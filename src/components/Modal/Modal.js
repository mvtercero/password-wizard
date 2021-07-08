import React from 'react'
import PropTypes from 'prop-types'
import { BsCheck, BsExclamationTriangle} from "react-icons/bs";
import Button from '../Button/Button';
import './Modal.css'

const Modal = ({ type = 'success', buttonText, children }) => {
  return (
    <div className="modal__complete">
      <div className="modal">
        <div className="modal__container">
          {type === 'success' ? <BsCheck size={72} /> : <BsExclamationTriangle size={72} />}
          <div className="modal__text">{children}</div>
        </div>
        <div className="modal__button">
          <Button type="button">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  type: PropTypes.string,
  buttonText: PropTypes.string,
  children: PropTypes.array,
}

export default Modal
