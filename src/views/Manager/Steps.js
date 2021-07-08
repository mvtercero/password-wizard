import React from 'react'
import Step1 from "../steps/Step1/ProductInformation";
import Step2 from "../steps/Step2/Form";
import Step3 from "../steps/Step3/Feedback";

const Steps = (step, setStep, password, setPassword) => [
  {
    view: (
      <Step1
        setStep={setStep}
        step={step}
      />
    ),
  },
  {
    view: (
      <Step2
        setStep={setStep}
        step={step}
        password={password}
        setPassword={setPassword}
      />
    ),
  },
  {
    view: (
      <Step3
        setStep={setStep}
        step={step}
        password={password}
      />
    ),
  },
]
export default Steps