class CalculatorForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { weight: null, height: null }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    console.log('fooo')
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input type='number' name='weight' id='weight' required={true}
               label='Weight' invalidFeedback='Weight is required.' groupText='kg' />
        <Input type='number' name='height' id='height' required={true}
               label='Height' invalidFeedback='Height is required.' groupText='cm'/>
      </Form>
    )
  }
}

Form.defaultProps = {}
Form.propTypes = {}
