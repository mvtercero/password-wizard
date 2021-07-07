import React, { useReducer, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PasswordReducer, DefaultState } from './user-reducer'
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import Steps from './Steps'
import './Manager.css';

const Manager = () => {
  const { t } = useTranslation()
  let [step, setStep] = useState(0)
  const [password, setPassword] = useReducer(PasswordReducer, DefaultState)
  let steps = Steps(step, setStep, password, setPassword)

  return (
    <div className="manager">
      <div className="header">
      {steps.map((item, index) => {
        return (
          <div
            key={index}
          >
           <div className="circulo"> {index < step ? <IoCheckmarkCircleSharp size={40}/>  : index + 1} </div>
          </div>
        )
      })}
      </div>
      <div>
        <h1 className="manager__title">{t('title')}</h1>
        <div className="manager__title-line"></div>
        {steps[`${step}`].content}
      </div>
    </div>
  )
}
export default Manager