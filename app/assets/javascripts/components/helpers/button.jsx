const Button = ({value, primary, onClick}) => {
  const buttonClasses = classNames('btn', {
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
