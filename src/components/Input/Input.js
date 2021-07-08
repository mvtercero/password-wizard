import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Input.css';
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Input = ({ id, label, name, value, onChange, error, placeholder }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const handleClick = () => setIsPasswordShow((showed) => !showed)

  return (
    <div data-cy={id}>
      <label className="input__label">{label}</label>
      <div className="input__wrapper">
      <input
        className="input"
        type={ name !== 'clue'
          ? isPasswordShow ? 'text' : 'password'
          : 'text'
        }
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {
        name !== 'clue' ? (
          isPasswordShow
            ? <BsEye size={20} onClick={handleClick} />
            : <BsEyeSlash size={20} onClick={handleClick} />
        ) :
        <></>
      }
    </div>
    {error && (
        <div>
          <span className="input__error">{error}</span>
        </div>
      )}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}

export default Input