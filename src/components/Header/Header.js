import React from 'react'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import './Header.css';


const Header = ({step, steps}) => {
  return (
    <>
      <div className="header">
        { steps.map((item, index) => {
          return (
            <div
              key={index}
            >
            <div className="header__circle"> {index <= step ? <IoCheckmarkCircleSharp size={40}/> : index + 1} </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Header