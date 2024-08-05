
'use client'

import { useState } from 'react'
import {Avatar} from '@mui/material'
import {Button} from '@mui/material'

import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import AuthModal from '../../Auth/AuthModal'
// import { useNavigate } from 'react-router-dom'



export default function Navigation() {
  const [open, setOpen] = useState(false);
  const[openAuthModal,setOpenAuthModal]=useState(false);
  const handleOpen=()=>{
    setOpenAuthModal(true);
  }
  const handleClose=()=>{
    setOpenAuthModal(false);
  }
  // const navigate=useNavigate;
  // const handleCategoryClick=()=>{
  //   navigate(`/product`);
  //   close();
  // };

  return (
    <div className="bg-white z-50">


      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Get free delivery on orders over &#8377;4999
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">


              {/* Logo */}
              <div className="ml-5 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="https://img.freepik.com/premium-photo/colorful-bag-with-o-it-that-says-o-it_711323-138357.jpg?w=740"
                    className="h-16 w-auto"
                  />
                </a>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {false?(<div>
                          <Avatar >H</Avatar>
                          
                        
                  </div>):(
                 <Button onClick={handleOpen}
                 className='text-sm font-medium text-gray-700 hover:text-gray-800 '>Signin</Button>)}

                </div>



                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AuthModal handleClose={handleClose} open={openAuthModal}/>


    </div>
  )
}
