import React from 'react'

const TotalPoints = ({ points }) => {
    return (
      <div
        className='flex flex-col items-center mt-6 border border-black'
      >
        <p className='text-xl' > Total Points</p>
        <p className='text-4xl font-bold'>{points}</p>
      </div>
    );
};

export default TotalPoints
