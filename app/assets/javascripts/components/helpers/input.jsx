const Input = ({className, type, name, id, required, label,
                invalidFeedback, groupText}) => {
  let inputClasses = classNames('form-control', {}, className)

  return (
    <div className='form-group'>
      {label && <label htmlFor={id}>{label}</label>}

      <div className='input-group'>
        <input type={type} name={name} id={id} className={inputClasses}
               required={required} />
        <div className='input-group-append'>
          <span className='input-group-text'>{groupText}</span>
        </div>
      </div>


      {invalidFeedback && <div className='invalid-feedback'>{invalidFeedback}</div>}
    </div>
  )
}

Input.defaultProps = {
  required: false,
}
Input.propTypes = {
  // className: React.PropTypes.string,
}
