import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { isValidPassword } from './validation'
import './Form.css';

const Step2 = ({ step, setStep, password, setPassword }) => {
    const [errors, setErrors] = useState({})
 const handleSetPassword = ({ target }) => {
    setPassword({
      type: 'SET_PASSWORD',
      payload: { [target.name]: target.value },
    })
    setErrors(errors)
  }
  const handleNext = (e) => {
    e.preventDefault()
    const errors = isValidPassword(password)
    setErrors(errors)
    if (Object.keys(errors).length > 0) return
    setStep(step + 1)
  }
  return (
    <>
    <h2 className="form__text">En primer lugar, debes crear una contraseña diferente para tus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.</h2>
    <form onSubmit={handleNext}>
      <div className="form__group">
      <Input
        type="password"
        name="password1"
        value={password.password1}
        label="Crea tu contraseña maestra"
        placeholder="Introduce tu contraseña"
        onChange={(e) => handleSetPassword(e)}
        error={errors.password1}
      />
      <Input
        type="password"
        name="password2"
        value={password.password2}
        label="Repite tu contraseña maestra"
        placeholder="Repite tu contraseña"
        onChange={(e) => handleSetPassword(e)}
        error={errors.password2}
      />
      </div>
      <div className="form__clue">
        <h2 className="form__text">También puedes crear una pista que te ayude a recordar tu contraseña maestra</h2>
        <Input
          type="text"
          name="clue"
          value={password.clue}
          label="Crea tu pista para recordar tu contraseña (Opcional)"
          placeholder="Introduce tu pista"
          onChange={(e) => handleSetPassword(e)}
          error={errors.clue}
      />
      </div>
      <div className="form__buttons">
        <Button onClick={() => setStep(step - 1)} type="button">
          Cancelar
        </Button>
        <Button type="submit"> Siguiente</Button>
      </div>
    </form>
    </>
  )
}


export default Step2