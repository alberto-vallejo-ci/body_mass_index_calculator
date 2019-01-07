let LoginOptions;

(() => {
  const RenderLoginOptions = ({handleDisplay}) => (
    <div className='login-options'>
      <div className='row login-options--option'>
        <div className='col-md-10 offset-md-1'>
          <p className='login-options--option--description'>
            Register as a user to find out what is your Mass Body Index.
          </p>
          <Button primary value='Register' className='login-options--option--button'
                  onClick={() => handleDisplay('signUp')} />
        </div>
      </div>

      <div className='row login-options--option'>
        <div className='col-md-10 offset-md-1'>
          <p className='login-options--option--description'>
            Or just Log in if you're a user
          </p>
          <Button primary value='Log In' className='login-options--option--button'
                  onClick={() => handleDisplay('logIn')} />
        </div>
      </div>
    </div>
  )

  RenderLoginOptions.defaultProps = {}
  RenderLoginOptions.propTypes = {}


  LoginOptions = class extends React.Component {
    constructor(props) {
      super(props)
      this.state = { display: 'options' }
      this.handleDisplay = this.handleDisplay.bind(this)
    }

    handleDisplay(value) {
      this.setState({display: value})
    }

    render() {
      const {display} = this.state

      return (
        <div>
          {display == 'options' && <RenderLoginOptions handleDisplay={this.handleDisplay} />}
          {display == 'logIn' && <LogInForm handleDisplay={this.handleDisplay}/>}
          {display == 'signUp' && <SignUpForm handleDisplay={this.handleDisplay}/>}
        </div>
      )
    }
  }

  LoginOptions.defaultProps = {}
  LoginOptions.propTypes = {}
})()
