import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard/>
      </div>

      
      < div className='mt-10'>
            <div className='lg:grid grid-cols-3 relative'>
                <div className='col-span-2'>
                    {[1,1,1,1].map((item)=><CartItem/>)}
                </div>

                <div className=' px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                    <div className='border'>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                        <div className='space-y-3 font-semibold'>
                            <div className='flex justify-between pt-3 text-black'>
                                <span>Price</span>
                                <span>&#8377;1499</span>
                            </div>
                            <div className='flex justify-between pt-3 mb-10'>
                                <span>Discount</span>
                                <span className='text-green-600'>-&#8377;749</span>
                            </div>
                            <div className='flex justify-between pt-3 '>
                                <span>Delivery Charge</span>
                                <span className='text-green-600'>Free</span>
                            </div>
                            <div className='flex justify-between pt-3 font-bold'>
                                <span>Total Amount</span>
                                <span className='text-green-600'>&#8377;750</span>
                            </div>

                        </div>
                        <Button variant="contained"  className="w-full" sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd", mt: "1rem" }}>
                            Check Out
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default OrderSummary
