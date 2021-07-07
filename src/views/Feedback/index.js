import React, { useState }  from 'react'
import Button from '../../components/Button'
import { submitForm } from '../../services/api'
import SuccessModal from '../../components/SucessModal'
import ErrorModal from '../../components/ErrorModal'
import './Feedback.css';
import { useTranslation } from 'react-i18next'

const Step3 = ({ step, setStep, password}) => {
  const { t } = useTranslation()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setshowErrorModal] = useState(false)

  const handleSubmitForm = async () => {
      const { password1, password2, clue } = password
      try {
        const { status } = await submitForm(password1, password2, clue)
        status === 200 ? setShowSuccessModal(true) : setshowErrorModal(true)
      } catch (error) {
        setshowErrorModal(true)
      }
  }
    return (
      <>
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
      </>
    )
  }

export default Step3;