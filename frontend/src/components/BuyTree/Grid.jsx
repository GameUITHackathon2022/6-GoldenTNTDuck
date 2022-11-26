import React from "react"
import Cell from './Cell'

const Grid = ({ gridData, handleSelectCell }) => {

  const cntToCode = (cnt) => Math.min(9, Math.max(2, Math.floor(cnt/10)))
  const cntToHex = (cnt) => {
    const code = cntToCode(cnt)
    switch(code) {
      case 2:
        return '#bbf7d0'
      case 3:
        return '#86efac'
      case 4:
        return '#4ade80'
      case 5:
        return '#22c55e'
      case 6:
        return '#16a34a'
      case 7:
        return '#15803d'
      case 8:
        return '#166534'
      case 9:
        return '#14532d'
    }
  }

  return (
    <div className='flex flex-col gap-y-2'>
      {gridData.map((ele, idx) => {
          const row = ele.map((data) => 
            <Cell 
              key={data.id} 
              colorHex={cntToHex(data.cnt)}
              data={data} 
              handleClick={() => handleSelectCell(data.id)}/>
          )
        return (
          <div className='flex gap-x-2' key={idx}>
            {row}
          </div>
        )} 
      )}
    </div>
  )
}

export default Grid
