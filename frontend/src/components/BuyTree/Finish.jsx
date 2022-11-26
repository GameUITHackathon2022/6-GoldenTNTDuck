import React from "react"
import { useData } from '../../hooks/useData'

const Finish = () => {
  const { setValues, data } = useData();

  const handleClick = () => {
    console.log(data)
  }

  return (
    <>
      <div>Finish</div>
      <button onClick={() => handleClick()}>
        Click
      </button>
    </>
  )
}

export default Finish
