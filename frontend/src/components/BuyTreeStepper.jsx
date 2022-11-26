import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DataProvider } from '../hooks/useData'

import Step1 from './BuyTree/Step1'
import Step2 from './BuyTree/Step2'
import Step3 from './BuyTree/Step3'
import Step4 from './BuyTree/Step4'
import Step5 from './BuyTree/Step5'
import Finish from './BuyTree/Finish'

const steps = ['Lựa chọn khu đất', 'Lựa chọn ô đất', 'Lựa chọn cây và số lượng', 'Thanh toán', 'Hoàn thành'];

const renderStep = (step, handleBack, handleNext) => {
  switch(step){
    case 0:
      return <Step1 handleBack={handleBack} handleNext={handleNext} />
    case 1:
      return <Step2 handleBack={handleBack} handleNext={handleNext} />
    case 2:
      return <Step3 handleBack={handleBack} handleNext={handleNext} />
    case 3:
      return <Step4 handleBack={handleBack} handleNext={handleNext} />
    case 4:
      return <Step5 handleBack={handleBack} handleNext={handleNext} />
    default:
      return <></>
  }
}

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const StepElement = renderStep(activeStep, handleBack, handleNext)

  return (
      <DataProvider>
        <div className='mt-6 mx-4'>
          <Stepper activeStep={activeStep}>
            {steps.map((label, _index) => {
              return (
                <Step key={label} sx={{
          '& .MuiStepLabel-root .Mui-completed': {
            color: '#15803d', // circle color (COMPLETED)
          },'& .MuiStepLabel-root .Mui-active': {
            color: '#15803d', // circle color (ACTIVE)
          }}}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Finish/>
            </React.Fragment>
          ) : (
            <React.Fragment>
                { 
                  StepElement
                }
            </React.Fragment>
          )}
        </div>
      </DataProvider>
  );
}
