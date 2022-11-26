import { Box, Skeleton, Stack, styled } from '@mui/material';
import React, { useState } from 'react';
import CardAchievement from './Items/CardAchivement';
import Grid from '@mui/material/Grid';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <Grid 
      container 
      rowSpacing={1} 
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      alignItems="center"
    >
      <Grid item xs={6}>
        <CardAchievement/>
      </Grid>
      <Grid item xs={6}>
        <CardAchievement/>
      </Grid>
      <Grid item xs={6}>
        <CardAchievement/>
      </Grid>
      <Grid item xs={6}>
        <CardAchievement/>
      </Grid>
    </Grid>
  );
};

export default Feed;
