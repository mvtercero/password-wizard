import React from 'react'
import Modal from '../Modal'

const ErrorModal = () => {
  return (
    <>
      <Modal type="error" buttonText="Volver a password manager">
        <h2>Ha habido un error</h2>
        <div>no hemos podido modificar tu Contraseña Maestra</div>
      </Modal>
    </>
  )
}

export default ErrorModal