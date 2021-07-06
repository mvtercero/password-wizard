import React, { useState }  from 'react'
import Button from '../../components/Button'
import head from './group.svg';
import lock from './group-3.svg';
import './ProductInformation.css';

const Step1 = ({ step, setStep }) => {
  const [checked, setChecked] = useState(false)
  const disabledButton = !checked
  const handleCheckbox = () => setChecked((checked) => !checked)
  const handleNext = () => {
    setStep(step + 1)
  }
    return (
      <div className="product-info">
        <div className="product-info__group">
        <div className="product-info__group-images">
          <div className="product-info__group-detail">
          <div className="product-info__group-img">
            <img src={head} alt="cabeza pensando"></img>
          </div>
          <p>Guarda aquí tus contraseñas, datos o cualquier información, olvida las notas de papel y las aplicaciones no protegidas</p>
          </div>
          <div className="product-info__group-detail">
        <div className="product-info__group-img">
          <img src={lock} alt="candado"></img>
        </div>
        <p>Crea tu contraseña maestra: sólo tú podrás acceder a tus secretos con ella</p>
        </div>
        </div>
        <div className="product-info__group-text">
          <h4>Cómo funciona</h4>
          <p>En primer lugar, debes crear una contraseña diferente para tus pertenencias electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien</p>
        </div>
        <div className="product-info__group-text">
          <h4>Qué datos puedes guardar</h4>
          <p>Por ejemplo, el número de tu tarjeta, el PIN, el PUK de tu teléfono móvil, el número de serie de alguno de tus dispositivos o cualquier información que necesites tener en un lugar seguro</p>
        </div>
        </div>
        <div className="product-info__check">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleCheckbox}
              />
              Aceptas los términos y condiciones
          </div>
          <Button onClick={handleNext} type="submit" disabled={disabledButton}>Siguiente</Button>
      </div>
    )
}

export default Step1;