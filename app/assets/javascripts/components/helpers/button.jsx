const Button = ({value, primary, onClick, className, loading, disabled}) => {
  const buttonClasses = classNames('btn', className, {
    'btn-primary': primary
  })

  const buttonDisabled = disabled || loading

  return(
    <button className={buttonClasses} onClick={onClick} disabled={buttonDisabled}>
      {loading && <Fa icon='spinner' className='fa-spin' />}
      {value}
    </button>
  )
}

Button.defaultProps = {}
Button.propTypes = {
  // value: React.PropTypes.string,
  // primary: React.PropTypes.bool,
  // onClick: React.PropTypes.func,
}
