import React from 'react'
import Navbar from '../components/Navbar'
import { Grid } from '@mui/material'
import TreeStatus from '../components/TreeStatus'
import TotalPoints from '../components/Store/TotalPoints'
import AwardCard from '../components/Store/AwardCard'

const Store = () => {
  const treeInfo = {
    name: "Cây gì đây",
    desc: "Loài cam là một cây lai được trồng từ xưa, có thể lai giống giữa loài bưởi (Citrus maxima) và quýt (Citrus reticulata).",
  }
  return (
    <> 
    <Navbar />
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <TreeStatus info={{...treeInfo, progress: 23}}/>
        <TreeStatus info={{...treeInfo, progress: 72}}/>
        <TreeStatus info={{...treeInfo, progress: 56}}/>
        <TreeStatus info={{...treeInfo, progress: 98}}/>
      </Grid>
      <Grid item xs={7}>
        <div className='grid grid-cols-2 gap-x-4 gap-y-40 mt-6'>
          <AwardCard info={{available: true, price: 10000}}/>
          <AwardCard info={{available: true, price: 10000}}/>
        </div>
      </Grid>
      <Grid item xs={2}>
        <TotalPoints points={100}/>
      </Grid>
    </Grid>
    </>
  )
}

export default Store
