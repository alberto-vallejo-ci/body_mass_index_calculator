const Message = ({type, message}) => {
  const elementClasses = classNames('alert', {
    'alert-success': type == 'success',
    'alert-danger': type == 'error',
  })

  return (
    <div className={elementClasses}>
      {message}
    </div>
  )
}
