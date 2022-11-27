import React from "react"
import CardPayment from "./CardPayment"
import Grid from '@mui/material/Grid'
import CardPaymentBank from "./CardPaymentBank"
import Button from '@mui/material/Button';
import { useData } from '../../hooks/useData'
import Backdrop from '@mui/material/Backdrop'

const Step4 = ({handleNext, handleBack}) => {
  const {data, setValues} = useData()

  const handleNext_ = () => {
    console.log(data) 
    handleNext()
  }

  return (
      <>
        <Grid container
          justifyContent="space-evenly"
          spacing={5}
          sx={{ pt: 5 }}
        >
          <Grid item xs={10}>
            <CardPayment/>
          </Grid>
          <Grid item xs={10}>
            <CardPaymentBank/>
          </Grid>
        </Grid>
        <div
          className='flex justify-around mt-6'
        >
          <Button
            color="inherit"
            onClick={handleBack}
          >
            Back
          </Button>
          <Button 
            onClick={handleNext_}
          >
            Next
          </Button>
        </div>
      </>
  )
}

export default Step4

