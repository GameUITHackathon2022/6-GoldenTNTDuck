import React from "react"
import CardArea from '../CardArea'
import { useData } from '../../hooks/useData'

const Step1 = ({handleNext, handleBack}) => {
  const {data, setValues} = useData()
  const tmp = [0, 1, 2, 3]
  const handleNext_ = (idx) => {
    setValues({Step1: idx})
    handleNext()
  }
  return (
    <div className='mt-6'>
      <div
      className='grid grid-cols-2 gap-y-9'
      >
        {tmp.map((idx) => <CardArea handleNext={() => handleNext_(idx)} key={idx} />)}
      </div>
    </div>
  )
}

export default Step1
