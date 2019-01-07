const Button = ({value, primary, onClick, className}) => {
  const buttonClasses = classNames('btn', className, {
    'btn-primary': primary
  })

  return(
    <button className={buttonClasses} onClick={onClick}>
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
