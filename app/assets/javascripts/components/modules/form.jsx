class CalculatorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { weight: null, height: null, alert: {type: null, message: null}, loading: false }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDone = this.handleDone.bind(this)
    this.handleFail = this.handleFail.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit() {
    this.setState({loading: true})
    const {weight, height} = this.state

    $.ajax({
      type: 'PUT',
      url: '/home',
      data: {weight: weight, height: height}
    })
    .done((response) => this.handleDone(response))
    .fail((response) => this.handleFail(response))
  }

  handleDone(response) {
    const message = `${response.category} (MBI: ${response.bmi})`
    this.setState({loading: false, alert: {type: 'success', message: message} })
  }

  handleFail(response) {
    const message = response.responseJSON.errors[0]
    this.setState({loading: false, alert: {type: 'error', message: message} })
  }

  handleSignOut() {
    $.ajax({
      type: 'DELETE',
      url: '/users/sign_out',
      data: {}
    })
    .done(() => location.reload())
  }

  render() {
    const {alert, loading} = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit} btnValue='Calculate BMI' btnLoading={loading}>
          <Input type='number' name='weight' id='weight' required={true}
                 label='Weight' invalidFeedback='Weight is required.' groupText='kg'
                 onChange={this.handleChange} />
          <Input type='number' name='height' id='height' required={true}
                 label='Height' invalidFeedback='Height is required.' groupText='cm'
                 onChange={this.handleChange} />
        </Form>

        {alert.message && <Message type={alert.type} message={alert.message} />}

        <div className='login-options--nav-link'>
          <a onClick={this.handleSignOut}>Sign Out</a>
        </div>
      </div>
    )
  }
}

Form.defaultProps = {}
Form.propTypes = {}
