import React, { useState } from 'react'
import './Input.css';
import { BsEye, BsEyeSlash } from "react-icons/bs";

const Input = ({ label, name, value, onChange, error, placeholder }) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false)
  const handleClick = () => setIsPasswordShow((showed) => !showed)

  return (
    <div>
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
          <span> {error}</span>
        </div>
      )}
    </div>
  )
}
export default Input