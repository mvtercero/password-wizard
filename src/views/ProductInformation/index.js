import React, { useState }  from 'react'
import Button from '../../components/Button'
import head from './group.svg';
import lock from './group-3.svg';
import './ProductInformation.css';
import { useTranslation } from 'react-i18next'

const Step1 = ({ step, setStep }) => {
  const { t } = useTranslation()
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
            <div>
              <img src={head} alt="cabeza pensando"></img>
            </div>
            <p className="product-info__group-info">{t('info.image1.text')}</p>
            </div>
            <div className="product-info__group-detail">
              <div>
                <img src={lock} alt="candado"></img>
              </div>
              <p className="product-info__group-info">{t('info.image2.text')}</p>
              </div>
          </div>
          <div className="product-info__group-text">
            <h4 className="product-info__group-title">{t('info.paragraph1.subtitle')}</h4>
            <p className="product-info__group-info">{t('info.paragraph1.text')}</p>
          </div>
          <div className="product-info__group-text">
            <h4 className="product-info__group-title">{t('info.paragraph2.subtitle')}</h4>
            <p className="product-info__group-info">{t('info.paragraph2.text')}</p>
          </div>
          <div className="product-info__terms-conditions">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckbox}
            />
            {t('info.terms&conditions')}
          </div>
        </div>

          <div className="product__buttons">
            <Button
              type="button"
            >
              {t('button.cancel')}
            </Button>
            <div className="product-info__check">

            <Button
              type="submit"
              onClick={handleNext}
              disabled={disabledButton}
            >
              {t('button.next')}
            </Button>
            </div>
          </div>
      </div>
    )
}

export default Step1;