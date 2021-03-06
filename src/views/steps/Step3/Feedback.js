import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/Button/Button'
import { submitForm } from '../../../services/api'
import SuccessModal from '../../../components/SucessModal/SucessModal'
import ErrorModal from '../../../components/ErrorModal/ErrorModal'
import './Feedback.css';
import { useTranslation } from 'react-i18next'

const Step3 = ({ step, setStep, password}) => {
  const { t } = useTranslation()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setshowErrorModal] = useState(false)

  const handleSubmitForm = async () => {
    const { password1, password2, clue } = password
    setStep(step)
    try {
      const { status } = await submitForm(password1, password2, clue)
      status === 200 ? setShowSuccessModal(true) : setshowErrorModal(true)
    } catch (error) {
      setshowErrorModal(true)
    }
  }
  return (
    <div data-cy='step-3'>
      <div className="feedback">
        <h2>{t('feedback.title')}</h2>
        <p>{t('feedback.text')}</p>
      </div>
      <div className="feedback__buttons">
        <Button
          onClick={() => setStep(step - 1)}
          type="button">
          {t('button.cancel')}
        </Button>
        <Button
          type="submit"
          onClick={handleSubmitForm}>
          {t('button.send')}
        </Button>
      </div>
      {showSuccessModal && <SuccessModal />}
      {showErrorModal && <ErrorModal />}
    </div>
  )
}

Step3.propTypes = {
  step: PropTypes.number,
  setStep: PropTypes.func,
  password: PropTypes.object,
}

export default Step3;