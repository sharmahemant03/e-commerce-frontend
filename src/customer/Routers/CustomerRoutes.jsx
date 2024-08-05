import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import HomePage from '../components/Pages/HomePage/HomePage'
import Cart from '../components/Cart/Cart'
import Product from '../components/Product/Product'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Checkout from '../components/Checkout/Checkout'
import Order from '../components/Order/Order'
import OrderDetail from '../components/Order/OrderDetail'


const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <Navigation/>
        </div>
        <Routes>
            <Route path="/login" element={<HomePage/>}></Route>
            <Route path="/register" element={<HomePage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/product" element={<Product/>}></Route>
            <Route path="/product/:productId" element={<ProductDetails/>}></Route>
            <Route path="/checkout" element={<Checkout/>}></Route>
            <Route path="/account/order" element={<Order/>}></Route>
            <Route path="/account/order/:orderId" element={<OrderDetail/>}></Route>

            

        </Routes>

        <div>
        <Footer/>
        </div>
      
    </div>
  )
}

export default CustomerRoutes
