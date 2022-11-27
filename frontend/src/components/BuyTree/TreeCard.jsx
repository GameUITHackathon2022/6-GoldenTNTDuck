import React, { useState } from 'react'
import TreePot from '../../assets/tree-pot.png'

const TreeCard = ({info, setTotalCount}) => {
    const {available, setTotalPrice, totalPrice, price, name, time, limit, totalCount} = info
    const [quantity, setQuantity] = useState(0)

    const handleIncreasingQuantity = () => {
        if (available && totalCount < limit){
            setTotalCount(prev => prev+1)
            setQuantity( prev => prev + 1)
            setTotalPrice(totalPrice + price)
        }
    }
        
    const handleDecreasingQuantity = () => {
        if (quantity > 0){
            setTotalCount(prev => prev-1)
            setQuantity( prev => prev - 1 )
            setTotalPrice(totalPrice - price)
        }
    }

    const color = available ? "green" : "red"

    const loadTailwind = <>
        <div className='border-green-300 bg-green-50 text-green-500'></div>
        <div className='bg-green-700'></div>
        <div className='border-red-300 bg-red-50 text-red-500'></div>
        <div className='bg-red-700'></div>
    </>

    const decreasingStyle = quantity === 0 ? 'text-gray-400 cursor-not-allowed' : 'hover: scale-110 cursor-pointer'
    const increasingStyle = (available && totalCount < limit) ? 'hover: scale-110 cursor-pointer' : 'text-gray-400 cursor-not-allowed'
  return (
    <div className='w-full h-24'>
        {false && loadTailwind}
        <div className={`w-full border-2 border-r-8 border-${color}-300 rounded-lg bg-${color}-50 shadow-md`}>
            <div className='py-2 px-4 flex flex-col justify-between h-full'>
                <div className='mb-2 grid grid-cols-2'>
                    <div className='w-24'>
                        <img src={TreePot} alt="Tree Pot"/>
                    </div>
                    <div className=''>
                        <p className={`text-${color}-500 text-2xl font-bold mb-2 break-words`}>{name}</p>
                        <p className='text-gray-700 break-words mb-2'>{`Thời gian sinh trưởng: ${time} năm`}</p>
                        <p className='font-semibold'>{`Giá: ${price}đ`}</p>
                        <div className='buying flex items-center text-center'>
                            <div onClick={handleDecreasingQuantity} className={`w-10 font-bold text-3xl ${decreasingStyle}`}>-</div>
                            <div className='text-3xl'>{quantity}</div>
                            <div onClick={handleIncreasingQuantity} className={`w-10 font-bold text-3xl ${increasingStyle}`}>+</div>
                        </div>
                    </div>
                </div>
                <div className='icon-box'>
                    <div className='flex items-center flex-row-reverse'>
                        <span className='text-sm font-extrabold text-cyan-600'>
                            {available ? "Còn hàng" : "Hết hàng"}
                        </span>
                        <div className={`h-2 w-2 rounded-lg bg-${color}-700 mr-1`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TreeCard
