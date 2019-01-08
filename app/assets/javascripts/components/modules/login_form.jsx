let LogInForm;

(() => {
  const RenderLogInForm = ({handleDisplay, handleChange, handleSubmit, alert, loading}) => (
    <div className='log-in-form'>
      <Form onSubmit={handleSubmit} btnValue='Log In' btnLoading={loading }>
        <Input type='text' name='email' id='email' required={true}
               label='Email' invalidFeedback='Email is required.'
               onChange={handleChange} />
        <Input type='password' name='password' id='password' required={true}
               label='Password' invalidFeedback='Password is required.'
               onChange={handleChange} />
      </Form>

        {alert.message && <Message type={alert.type} message={alert.message} />}

      <div className='login-options--nav-link'>
        <a onClick={() => handleDisplay('signUp')}>
          Register
        </a>
      </div>
    </div>
  )

  RenderLogInForm.defaultProps = {}
  RenderLogInForm.propTypes = {}

  LogInForm = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { email: '', password: '', alert: { type: null, message: null }, loading: false }
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
      const {email, password} = this.state

      $.ajax({
        type: 'POST',
        url: '/users/sign_in',
        data: {user: { email: email, password: password } }
      })
      .done(() => location.reload())
      .fail((result) => this.handleFail(result))
    }

    handleFail(result) {
      this.setState({loading: false, alert: { type: 'error', message: result.responseText }})
    }

    render() {
      const {handleDisplay} = this.props
      const {alert, loading} = this.state

      return (
        <RenderLogInForm handleDisplay={handleDisplay}
                         handleChange={this.handleChange}
                         handleSubmit={this.handleSubmit}
                         alert={alert} loading={loading}/>
      )
    }
  }

  LogInForm.defaultProps = {}
  LogInForm.propTypes = {}
})()
