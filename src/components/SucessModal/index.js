import React from 'react'
import Modal from '../Modal'

const SuccessModal = () => {
  return (
    <>
      <Modal type="success" buttonText="Acceder">
        <h2>¡Tu password manager ya está creado!</h2>
        <div>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones</div>
      </Modal>
    </>
  )
}

export default SuccessModal