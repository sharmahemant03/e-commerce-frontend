import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import {Box }from '@mui/material'
const OrderDetail = () => {
  return (
    <div>

    <div className='px:5 lg:px-20'>
        <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
      <AddressCard/>
    </div>

    <div className='py-20'>
        <OrderTracker activeStep={2}/>
    </div>

    <Grid container className='space-y-5'>
        {[1,1,1,1,1].map((item)=> <Grid item container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex items-center space-x-4'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70" alt="" />
                    <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Men Embroidered Jacquard Straight Kurta</p>
                        <p className='space-x-5 opacity-50 text-xs font-semibold'><span>Color: Yellow</span><span>Size: XL</span></p>
                        <p>&#8377;1099</p>
                    </div>
                </div>
            </Grid>
            <Grid item>
                <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 '/>
                    <span>Rate & Review Product</span>

                </Box>

            </Grid>

        </Grid>)}
       

    </Grid>

    </div>

  )
}

export default OrderDetail;
