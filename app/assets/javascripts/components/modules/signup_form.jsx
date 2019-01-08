let SignUpForm;

(() => {
  const RenderSignUpForm = ({handleDisplay, handleChange, handleSubmit, alert, loading}) => (
    <div className='sign-up-form'>
      <Form onSubmit={handleSubmit} btnValue='Register' btnLoading={loading}>
        <Input type='text' name='email' id='email' required={true}
               label='Email' invalidFeedback='Email is required.'
               onChange={handleChange} />
        <Input type='password' name='password' id='password' required={true}
               label='Password (Min is 6 Characters)' invalidFeedback='Password is required.'
               onChange={handleChange} />
        <Input type='password' name='password_confirmation' id='password_confirmation' required={true}
               label='Confirm Password' invalidFeedback='You need to confirm your Password.'
               onChange={handleChange} />
      </Form>

      {alert.message && <Message type={alert.type} message={alert.message} />}

      <div className='login-options--nav-link'>
        <a onClick={() => handleDisplay('logIn')}>
          Log In
        </a>
      </div>
    </div>
  )

  RenderSignUpForm.defaultProps = {}
  RenderSignUpForm.propTypes = {}


  SignUpForm = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { email: '', password: '', password_confirmation: '',
                     alert: {type: null, message: null}, loading: false }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleFail = this.handleFail.bind(this)
    }

    handleChange(event) {
      const {name, value} = event.target
      this.setState({[name]: value})
    }

    handleSubmit() {
      this.setState({loading: true})
      const {email, password, password_confirmation} = this.state

      $.ajax({
        type: 'POST',
        url: '/users',
        data: {user: {email: email, password: password, password_confirmation: password_confirmation } },
        dataType: "json"
      })
      .done(() => location.reload())
      .fail((response) => this.handleFail(response))
    }

    handleFail(response) {
      const errors = response.responseJSON.errors
      let message = ''

      // TODO: Improve error messages
      if (errors.password_confirmation) {
        message = `Password confirmation ${errors.password_confirmation}`
      }

      if (errors.password) {
        message = `Password ${errors.password}`
      }

      if (errors.email) {
        message = `Email ${errors.email}`
      }

      this.setState({loading: false, alert: { type: 'error', message: message } })
    }

    render() {
      const {handleDisplay} = this.props
      const {alert, loading} = this.state

      return(
        <RenderSignUpForm handleDisplay={handleDisplay}
                          handleChange={this.handleChange}
                          handleSubmit={this.handleSubmit}
                          alert={alert} loading={loading} />
      )
    }
  }

  SignUpForm.defaultProps = {}
  SignUpForm.propTypes = {}
})()
