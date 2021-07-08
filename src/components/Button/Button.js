import React from 'react'
import PropTypes from 'prop-types'
import './Button.css';
import ButtonType from './ButtonType'

const Button = ({ type, children, disabled, onClick }) => {
  const buttonType = ButtonType[type] || type.submit
  return (
    <button
      disabled={disabled}
      className={!disabled ? `btn btn--${buttonType}` : `btn btn--disabled`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button