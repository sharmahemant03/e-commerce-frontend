import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
// import HomePage from './customer/components/Pages/HomePage/HomePage';
import Footer from './customer/components/Footer/Footer';
import OrderDetail from './customer/components/Order/OrderDetail';
// import Product from './customer/components/Product/Product';
// import ProductDetails from './customer/components/ProductDetails/ProductDetails';

// import Cart from './customer/components/Cart/Cart';
// import Checkout from './customer/components/Checkout/Checkout';
// import Order from './customer/components/Order/Order';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CustomerRoutes from './customer/Routers/CustomerRoutes';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRoutes/>}></Route>
      </Routes>

    
    </div>
  );
}

export default App;
