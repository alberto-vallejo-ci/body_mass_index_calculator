class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleValidate = this.handleValidate.bind(this)
  }

  handleValidate(event) {
    event.preventDefault()
    event.stopPropagation()
    const form = document.getElementsByClassName('needs-validation')[0];
    if (form.checkValidity()) {
      const {onSubmit} = this.props
      onSubmit && onSubmit()
    }
    form.classList.add('was-validated');
  }

  render() {
    return (
      <form className='needs-validation' noValidate>
        {this.props.children}
        <Button value='Calculate BMI' primary onClick={this.handleValidate} />
      </form>
    )
  }
}

Form.defaultProps = {}
// Form.propTypes = {}
