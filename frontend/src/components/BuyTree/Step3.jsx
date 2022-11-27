import React, { useState } from "react"
import { useData } from '../../hooks/useData'
import TreeCard from "./TreeCard"
import Button from '@mui/material/Button';
import treeTypeObj from '../../data/treeTypeData.json'

const Step3 = ({handleNext, handleBack}) => {
  const [totalCount, setTotalCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0);
  const { setValues, data } = useData();
  const { Step2 } = data
  const limit = 100 - Step2.cnt
  console.log(limit)

  const treeTypeData = treeTypeObj.data

  const handleNext_ = () => {
    setValues({Step3: totalPrice})
    handleNext()
  }

  return (
    <>
      <button onClick={() => console.log(data)}>
        Click
      </button>
      <div className="tree-card p-10 grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-40 mb-24">
        {
          treeTypeData.map(tree => <TreeCard setTotalCount={setTotalCount} info={{...tree, limit, totalPrice, setTotalPrice, totalCount}} />)
        }
      </div>
      <div className="flex text-4xl flex-row-reverse pr-10">{`Tổng: ${totalPrice} VNĐ`}</div>
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
          disabled={totalPrice == 0}
        >
          Next
        </Button>
      </div>
    </>
  )
}

export default Step3

