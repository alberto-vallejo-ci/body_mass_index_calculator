const Fa = ({icon, size, className}) => {
  let iconClasses = classNames(className,{
    'fa': true,
    [`fa-${icon}`]: !!icon,
    [`fa-${size}x`]: !!size,
  })
  return <i className={iconClasses}></i>
}

Fa.defaultProps = {}
Fa.propTypes = {}
