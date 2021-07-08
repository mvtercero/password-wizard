import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'
import { isValidPassword } from './validation'
import './Form.css';
import { useTranslation } from 'react-i18next'

const Step2 = ({ step, setStep, password, setPassword }) => {
  const { t } = useTranslation()
  const [errors, setErrors] = useState({})
  const handleSetPassword = ({ target }) => {
    setPassword({
      type: 'SET_PASSWORD',
      payload: { [target.name]: target.value },
    })
    setErrors({})
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
      <h2 className="form__text-initial">{t('form.text1')}</h2>

      <form onSubmit={handleNext}>
        <div className="form">
          <div className="form__group">
            <Input
              type="password"
              name="password1"
              value={password.password1}
              label={t('form.inputPassword.label')}
              placeholder={t('form.inputPassword.placeholder')}
              onChange={(e) => handleSetPassword(e)}
              error={errors.password1}
            />
            <Input
              type="password"
              name="password2"
              value={password.password2}
              label={t('form.inputPassword2.label')}
              placeholder={t('form.inputPassword2.placeholder')}
              onChange={(e) => handleSetPassword(e)}
              error={errors.password2}
            />
          </div>
          <div>
            <h2 className="form__text">{t('form.text2')}</h2>
            <div className="form__clue">
              <Input
                type="text"
                name="clue"
                value={password.clue}
                label={t('form.inputClue.label')}
                placeholder={t('form.inputClue.placeholder')}
                onChange={(e) => handleSetPassword(e)}
                error={errors.clue}
            />
              <span className="input__total-value">{`${password.clue.length}/60`}</span>
            </div>
            </div>
          </div>
        <div className="form__buttons">
          <Button
            onClick={() => setStep(step - 1)}
            type="button"
          >
            {t('button.cancel')}
          </Button>
          <Button
            type="submit"
          >
            {t('button.next')}
          </Button>
        </div>
      </form>
    </>
  )
}

Step2.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  password: PropTypes.object,
  setPassword: PropTypes.func,
}

export default Step2