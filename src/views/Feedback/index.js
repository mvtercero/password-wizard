import React, { useState }  from 'react'
import Button from '../../components/Button'
import { submitForm } from '../../services/api'
import SuccessModal from '../../components/SucessModal'
import ErrorModal from '../../components/ErrorModal'
import './Feedback.css';


const Step3 = ({password}) => {
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
            <h2>Título paso 3</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="feedback__buttons">
              <Button type="cancel">
              Cancelar
              </Button>
              <Button type="submit" onClick={handleSubmitForm}>
              Enviar
          </Button>
          </div>
          {showSuccessModal && <SuccessModal />}
          {showErrorModal && <ErrorModal />}
        </>
)}

export default Step3;