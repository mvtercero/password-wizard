import React from 'react'
import Step1 from "../../views/ProductInformation";
import Step2 from "../../views/Form";
import Step3 from "../../views/Feedback";

const Steps = (step, setStep, password, setPassword) => [
  {
    content: (
      <Step1
        setStep={setStep}
        step={step}
      />
    ),
  },
  {
    content: (
      <Step2 setStep={setStep} step={step} password={password} setPassword={setPassword} />
    ),
  },
  {
    content: <Step3 setStep={setStep} step={step} />,
  },
]
export default Steps