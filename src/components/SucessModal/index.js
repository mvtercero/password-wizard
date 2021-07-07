import React from 'react'
import Modal from '../Modal'
import { useTranslation } from 'react-i18next'

const SuccessModal = () => {
  const { t } = useTranslation()
  return (
    <>
      <Modal type="success" buttonText={t('sucessModal.buttonText')}>
        <h2>{t('sucessModal.title')}</h2>
        <div>{t('sucessModal.text')}</div>
      </Modal>
    </>
  )
}

export default SuccessModal