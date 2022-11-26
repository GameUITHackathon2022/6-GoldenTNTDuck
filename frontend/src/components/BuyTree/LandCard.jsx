import React from 'react'

const LandCard = ({ data }) => {
  return (
    <div 
      className='flex flex-col items-center gap-2'
    >  
      <p
        className='text-4xl'
      >Selected Land ID</p>
      {data && <p className='text-8xl font-bold'>{data.id}</p>}
      {data && data.hasCeleb && <p className='text-2xl'>A Celebrity planted a tree here!</p>}
      {data && data.hasFriend && <p className='text-2xl'>Your friend planted a tree here!</p>}
      {data && <p className='text-2xl'>Total trees planted: {data.cnt}</p>}
    </div>
  )
}

export default LandCard
