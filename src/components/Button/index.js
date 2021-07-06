import React from 'react'
import './Button.css';
import ButtonType from './ButtonType'

const Button = ({ type, children,  onClick }) => {
  const buttonType = ButtonType[type] || type.default
 return (<button className={`btn btn--${buttonType}`} type={type} onClick={onClick}>
    {children}
  </button>)
}
export default Button