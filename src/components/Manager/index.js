import React, { useReducer, useState } from 'react'
import { PasswordReducer, DefaultState } from './user-reducer'
import Steps from './steps'
import './Manager.css';

const Manager = () => {
  let [step, setStep] = useState(0)
  const [password, setPassword] = useReducer(PasswordReducer, DefaultState)
  let steps = Steps(step, setStep, password, setPassword)

  return (
    <div>
      <h4>
        Step {step + 1}/{steps.length}
      </h4>
      <div className="steps-content">
        <h1>Crea tu password manager</h1>
        {steps[`${step}`].content}
      </div>
    </div>
  )
}
export default Manager