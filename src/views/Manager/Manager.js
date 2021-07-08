import React, { useReducer, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PasswordReducer, DefaultState } from './user-reducer'
import Header from '../../components/Header/Header'
import Steps from './Steps'
import './Manager.css';

const Manager = () => {
  const { t } = useTranslation()
  let [step, setStep] = useState(0)
  const [password, setPassword] = useReducer(PasswordReducer, DefaultState)
  let steps = Steps(step, setStep, password, setPassword)

  return (
    <div data-cy='manager' className="manager">
      <Header
        steps={steps}
        step={step}
      ></Header>
      <h1 className="manager__title">{t('title')}</h1>
      <div className="manager__title-line"></div>
      {steps[`${step}`].view}
    </div>
  )
}
export default Manager