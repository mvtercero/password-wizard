import React from 'react'
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
export default Button