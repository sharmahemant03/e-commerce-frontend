import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, IconButton } from '@mui/material';
const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] sm:w-[6rem] sm:h-[8rem]'>
                    <img className="w-full h-full object-cover object-top" src="https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/6/o/-original-imagydw4vcgzffhw.jpeg?q=70" alt="" />
                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>Men Slim Mid Rise Black T-Shirt</p>
                    <p className='opacity-70'> Size: L,White</p>
                    <p className='opacity-70 mt-2'>Seller: Indian Terrain</p>
                    <div className='flex space-x-5 items-center  text-gray-900 mt-6 lg:ml-[2rem] sm:ml-[1rem] pt-6'>
                        <p className='font-semibold'>&#8377;199</p>
                        <p className='opacity-50 line-through'>&#8377;211</p>
                        <p className='text-green-600 font-semibold'>5% off</p>
                    </div>
                </div>


            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>3</span>
                    <IconButton sx={{ color: "RGB(145,85,253" }}>
                        <AddCircleOutlineIcon />
                    </IconButton>

                    <div>
                        <Button sx={{ color: "RGB(145,85,253" }}>REMOVE</Button>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default CartItem
