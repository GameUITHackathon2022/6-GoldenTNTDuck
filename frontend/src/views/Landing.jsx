import React from 'react'
import { Container, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import LandingImg from '../assets/landing.png'
import Map from '../assets/VietNam.png'

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center'
}))

const Landing = () => {
  return (
    <StyledContainer>
      <div className='bg-green-500 w-[98.8vw] object-contain -z-20 absolute'>
        <img src={LandingImg} alt='landing'/>
      </div>
      <div className='flex flex-row items-center justify-center h-[80vh] mt-5'>
        <img className='w-[28rem]' src={Map} alt="map" />
        <div className='ml-10'>
          <div>
            <p className='text-6xl font-bold mt-6 my-2 text-white uppercase'>Cùng vẽ nên màu</p>
            <p className='text-[80px] font-bold text-lime-700 my-2 text-center'>XANH</p>
          </div>
          <div className='mt-20'>
            <p className='text-9xl font-bold text-green-800'>1,234,567</p>
            <p className='uppercase text-3xl mt-6 flex flex-row-reverse text-white font-bold mb-6'>cây đã trồng</p>
          </div>
        </div>
      </div>
      <Link to={'/sign-in'}>
        <Button variant='contained' size='large' sx={{paddingLeft: 5, paddingRight: 5, backgroundColor: "#047857"}}>Go  &rarr;</Button>
      </Link>
    </StyledContainer>
  )
}

export default Landing
