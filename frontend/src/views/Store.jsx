import React from 'react'
import Navbar from '../components/Navbar'
import { Grid, Typography } from '@mui/material'
import TreeStatus from '../components/TreeStatus'
import TotalPoints from '../components/Store/TotalPoints'
import AwardCard from '../components/Store/AwardCard'
import useCurrentUser from '../hooks/useCurrentUser'
import treeDataObj from '../data/treeStatusData.json'

const Store = () => {
  const {data} = useCurrentUser()
  const totalPoints = data ? data?.data?.trees?.length*10 : 0
  const treeData = treeDataObj.data
  return (
    <> 
    <Navbar user={data?.data}/>
    <Grid container spacing={1}>
    <Grid item xs={3}>
        <Typography variant="h1" sx={{ fontSize: 35, textAlign: "center", pt: 5, color: "#2d6a4f" }}>Cây của bạn</Typography>
        {
          treeData.map(treeInfo => <TreeStatus info={{...treeInfo}}/>)
        }
      </Grid>
      <Grid item xs={7}>
        <div className='grid grid-cols-2 gap-x-4 gap-y-40 mt-6'>
          <AwardCard info={{available: true, price: 100, totalPoints }}/>
          <AwardCard info={{available: true, price: 100, totalPoints}}/>
        </div>
      </Grid>
      <Grid item xs={2}>
        <TotalPoints points={totalPoints}/>
      </Grid>
    </Grid>
    </>
  )
}

export default Store
