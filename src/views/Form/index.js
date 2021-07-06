import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { isValidPassword } from './validation'

const Step2 = ({ step, setStep, password, setPassword }) => {
    const [errors, setErrors] = useState({})
 const handleSetPassword = ({ target }) => {
    setPassword({
      type: 'SET_PASSWORD',
      payload: { [target.name]: target.value },
    })
  }
  const handleNext = (e) => {
    e.preventDefault()
    const errors = isValidPassword(password)
    setErrors(errors)
    if (Object.keys(errors).length > 0) return
    setStep(step + 1)
  }
  return (
    <form onSubmit={handleNext}>
      <Input
        type="text"
        name="password1"
        value={password.password1}
        label="Crea tu contraseña maestra"
        onChange={(e) => handleSetPassword(e)}
        error={errors.password1}
      />
      <Input
        type="text"
        name="password2"
        value={password.password2}
        label="Repite tu contraseña maestra"
        onChange={(e) => handleSetPassword(e)}
        error={errors.password2}
      />
        <Input
        type="text"
        name="clue"
        value={password.clue}
        label="Crea tu pista para recordar tu contraseña(Opcional)"
        onChange={(e) => handleSetPassword(e)}
        error={errors.clue}
      />
      <div>
        <Button onClick={() => setStep(step - 1)} type="button">
          Cancelar
        </Button>
        <Button type="submit"> Siguiente</Button>
      </div>
    </form>
  )
}


export default Step2