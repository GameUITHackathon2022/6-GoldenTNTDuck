import React, { useState } from "react"
import { useData } from '../../hooks/useData'
import Grid from './Grid'
import LandCard from './LandCard'

import Button from '@mui/material/Button';

const NUM_COLS = 5
const NUM_ROWS = 5
const MAX_CNT = 100

const tmp = [
  [{id: 0, cnt: 50, hasCeleb: true}, {id: 1, cnt: 70}, {id: 2, cnt: 13}, {id: 3, cnt: 60}, {id: 4, cnt: 88}],
  [{id: 5, cnt: 50, hasFriend: true}, {id: 6, cnt: 70}, {id: 7, cnt: 13}, {id: 8, cnt: 60}, {id: 9, cnt: 88}],
  [{id: 10, cnt: 50}, {id: 11, cnt: 100}, {id: 12, cnt: 13}, {id: 13, cnt: 60}, {id: 14, cnt: 88}],
  [{id: 15, cnt: 50}, {id: 16, cnt: 70}, {id: 17, cnt: 13}, {id: 18, cnt: 60}, {id: 19, cnt: 88}],
  [{id: 20, cnt: 50}, {id: 21, cnt: 70}, {id: 22, cnt: 13}, {id: 23, cnt: 60}, {id: 24, cnt: 88}],
]

const Step2 = ({handleNext, handleBack}) => {
  // const [ gridData, setGridData ] = useState(Array.from(Array(NUM_ROWS), () => new Array(NUM_COLS)))
  const [ gridData, setGridData ] = useState(tmp)
  const [ selectedCellData, setSelectedCellData ] = useState(null)

  const {data, setValues} = useData()

  const handleSelectCell = (idx) => {
    for (let i = 0; i < tmp.length; i++) {
      for (let j = 0; j < tmp[i].length; j++) {
        if (gridData[i][j]['id'] == idx) {
          if (gridData[i][j]['cnt'] != 100) setSelectedCellData(gridData[i][j])
          return 
        }
      }
    }
  }

  const handleNext_ = () => {
    setValues({Step2: selectedCellData})
    handleNext()
  }
  return (
    <div>
      <div
        className='grid grid-cols-2 my-6'
      >
          <Grid gridData={gridData} handleSelectCell={handleSelectCell}/>
          <LandCard data={selectedCellData}/>
      </div>
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
          disabled={selectedCellData == null}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export default Step2
