import React from "react"
import StarRateIcon from '@mui/icons-material/StarRate';
import GroupIcon from '@mui/icons-material/Group';

const Cell = ({ data, handleClick, colorHex }) => {
  return (
    <button
      style={{backgroundColor: colorHex, cursor: (data.cnt == 100 ? 'not-allowed' : 'pointer')}}
      className={`border border-black w-[50px] h-[50px]`}
      onClick={() => handleClick()}
    >
      {data.hasCeleb ? <StarRateIcon/> : (data.hasFriend ? <GroupIcon/> : data.id)}
    </button>
  )
}

export default Cell
