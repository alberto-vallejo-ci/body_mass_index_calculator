const Input = ({className, type, name, id, required, label,
                invalidFeedback, groupText, onChange}) => {
  const inputClasses = classNames('form-control', {}, className)
  const inputGroupClasses = classNames({
    'input-group': groupText
  })

  return (
    <div className='form-group'>
      {label && <label htmlFor={id}>{label}</label>}

      <div className={inputGroupClasses}>
        <input type={type} name={name} id={id} className={inputClasses}
               required={required} onChange={onChange} />

        {groupText && <div className='input-group-append'>
          <span className='input-group-text'>{groupText}</span>
        </div>}

        {invalidFeedback && <div className='invalid-feedback'>{invalidFeedback}</div>}
      </div>
    </div>
  )
}

Input.defaultProps = {
  required: false,
}
Input.propTypes = {
  // className: React.PropTypes.string,
}
