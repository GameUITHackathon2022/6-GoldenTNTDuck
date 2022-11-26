import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import axiosClient from '../api/axiosClient';

const API_GET_RANKING = "https://tranquil-ravine-97175.herokuapp.com/api/v1/sort_by_trees/"

function getRankingData()
{
  return axiosClient.get(API_GET_RANKING).then((responde) => responde.data)
}


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const RankingBox = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: 25
}));

const Ranking = () => {
  const [ranks, setRanks] = useState([])

  useEffect(() => {
    let mounted = true;
    getRankingData().then((items) => {
      if (mounted) {
        setRanks(items.data)
      }
    })

    return () => (mounted == false);
  }, [])

  return (
    <Box sx={{ width: '100%', padding: '10px', }}>
      <Stack spacing={2}>
        <RankingBox>Bảng xếp hạng</RankingBox>
        {
          ranks.map((item) => {
              return <Item>{item.name}</Item>
          })
        }
      </Stack>
    </Box>
  )
}

export default Ranking