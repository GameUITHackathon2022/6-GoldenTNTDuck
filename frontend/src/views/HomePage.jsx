import React from 'react'
import { Grid, Typography } from '@mui/material'
import Navbar from '../components/Navbar'
import Ranking from '../components/Ranking'
import TreeStatus from '../components/TreeStatus'
import CardArea from '../components/CardArea'
import BuyTreeStepper from '../components/BuyTreeStepper'


const HomePage = () => {
  const treeInfo = {
    name: "Cây gì đây",
    desc: "Loài cam là một cây lai được trồng từ xưa, có thể lai giống giữa loài bưởi (Citrus maxima) và quýt (Citrus reticulata).",
  }
  return (
    <>
    <Navbar />
    <Grid container spacing={1}>
      <Grid item xs={3}>
        <Typography variant="h1" sx={{ fontSize: 35, textAlign: "center", pt: 5, color: "#2d6a4f" }}>Cây của bạn</Typography>
        <TreeStatus info={{...treeInfo, progress: 23}}/>
        <TreeStatus info={{...treeInfo, progress: 72}}/>
        <TreeStatus info={{...treeInfo, progress: 56}}/>
        <TreeStatus info={{...treeInfo, progress: 98}}/>
      </Grid>
      <Grid item xs={7}>
        <BuyTreeStepper />
      </Grid>
      <Grid item xs={2}>
        <Ranking />
      </Grid>
    </Grid>
    </>
  )
}

export default HomePage