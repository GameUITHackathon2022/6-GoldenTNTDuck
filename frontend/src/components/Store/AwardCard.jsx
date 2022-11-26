import React, { useState } from 'react'
import TreePot from '../../assets/tree-pot.png'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';

const TreeCard = ({info}) => {
    const {available, price} = info
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
      };

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <div
          className='flex flex-col gap-4'
        >
          <p className='text-4xl'>Bạn có muốn đổi ...</p>
          <Button 
            onClick={() => console.log('abc')}    
            variant='contained'
          >Chấp nhận</Button>
        </div>
      </Backdrop>
    <div 
        className='w-full h-24 cursor-pointer'
        onClick={() => setOpen(true)}
    >
        <div className={`w-full border-2 border-r-8 border-green-300 rounded-lg bg-green-50 shadow-md`}>
            <div className='py-2 px-4 flex flex-col justify-between h-full'>
                <div className='mb-2 grid grid-cols-2'>
                    <div className='w-24'>
                        <img src={TreePot} alt="Tree Pot"/>
                    </div>
                    <div className=''>
                        <p className={`text-green-500 text-2xl font-bold mb-2 break-words`}>Cây gì đây</p>
                        <p className='text-gray-700 break-words mb-2'>{`Đây là cây nhị phân phiên bản có thể trồng được =))`}</p>
                        <p className='font-semibold'>{`Giá: ${price}đ`}</p>
                    </div>
                </div>
                <div className='icon-box'>
                    <div className='flex items-center flex-row-reverse'>
                        <span className='text-sm font-extrabold text-cyan-600'>
                            {available ? "Còn hàng" : "Hết hàng"}
                        </span>
                        <div className={`h-2 w-2 rounded-lg bg-green-700 mr-1`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TreeCard
