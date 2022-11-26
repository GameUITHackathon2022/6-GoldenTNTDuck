import React from "react"
import CardArea from '../CardArea'
import { useData } from '../../hooks/useData'
import { useQuery } from '@tanstack/react-query'
import axiosClient from '../../api/axiosClient'

const Step1 = ({handleNext, handleBack}) => {
  const {data, setValues} = useData()
  const {data:areas, isLoading} = useQuery({
    queryKey: ['repoData'],
    queryFn: () => axiosClient.get('https://vast-cliffs-60000.herokuapp.com/api/v1/areas')
  })
  if (isLoading) return <div>Loading...</div>
  console.log(areas.data.data)
  const handleNext_ = (obj) => {
    setValues({area: obj})
    handleNext()
  }
  return (
    <div className='mt-6'>
      <div
      className='grid grid-cols-2 gap-y-9'
      >
        {areas.data.data.map((obj) => <CardArea data={obj} handleNext={() => handleNext_(obj)} key={obj.id} />)}
      </div>
    </div>
  )
}

export default Step1
