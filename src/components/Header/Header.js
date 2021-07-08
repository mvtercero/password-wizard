import React from 'react'
import PropTypes from 'prop-types'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import './Header.css';


const Header = ({step, steps}) => {
  return (
    <>
      <div data-cy='header' className="header">
        { steps.map((item, index) => {
          return (
            <div
              key={index}
            >
            <div className="header__circle">
              {
                index <= step
                ? <IoCheckmarkCircleSharp size={40}/>
                : index + 1
              }
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

Header.propTypes = {
  step: PropTypes.number,
  steps: PropTypes.array,
}

export default Header