class CalculatorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { weight: null, height: null, type: null, message: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDone = this.handleDone.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  handleSubmit() {
    const {weight, height} = this.state

    $.ajax({
      type: 'PUT',
      url: '/home',
      data: {weight: weight, height: height}
    })
    .done((response) => this.handleDone(response))
  }

  handleDone(response) {
    const message = `${response.category} (MBI: ${response.bmi})`
    this.setState({ type: 'success', message: message })
  }

  render() {
    const {type, message} = this.state

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input type='number' name='weight' id='weight' required={true}
                 label='Weight' invalidFeedback='Weight is required.' groupText='kg'
                 onChange={this.handleChange} />
          <Input type='number' name='height' id='height' required={true}
                 label='Height' invalidFeedback='Height is required.' groupText='cm'
                 onChange={this.handleChange} />
        </Form>

        {message && <Message type={type} message={message} />}
      </div>
    )
  }
}

Form.defaultProps = {}
Form.propTypes = {}
