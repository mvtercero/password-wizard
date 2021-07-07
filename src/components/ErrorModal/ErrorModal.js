import React from 'react'
import Modal from '../Modal/Modal'
import { useTranslation } from 'react-i18next'

const ErrorModal = () => {
  const { t } = useTranslation()
  return (
    <>
      <Modal type="error" buttonText={t('errorModal.buttonText')}>
        <h2>{t('errorModal.title')}</h2>
        <div>{t('errorModal.text')}</div>
      </Modal>
    </>
  )
}

export default ErrorModal