import { useState } from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from './FrontPage';
import Signup from './components/Signup';
import ProductDetail from './components/ProductDetail'
import BulkOrderPage from './components/BulkOrderPage';
import SmartWatch from './components/Pages/SmartWatch';
import NewLaunches from './components/Pages/NewLaunches';
import EarPhones from './components/Pages/EarPhones';
import Speaker from './components/Pages/Speaker';
import Accessories from './components/Pages/Accessories';
import User from './components/User'
import Admin from './components/Admin';
import AddProduct from './components/Pages/AddProduct';
import UserInfo from './components/UserInfo';
import MyOrders from './components/MyOrders';
import AdminInfo from './components/AdminInfo';
import AddAdvPageProduct from './components/Pages/AddAdvPageProduct';
import UpdateProduct from './components/UpdateProduct';
import OrderDetails from './components/OrderDetails';
import Users from './components/Users';
import StripeCheckout from './components/StripeCheckout';
import LuxeEditionPage from './components/Pages/LuxeEditionPage';
import ValueEditionPage from './components/Pages/ValueEditionPage';
import ScrollToTop from './components/ScrollComponent';
import { Toaster } from 'react-hot-toast';
import AllProducts from './components/Pages/AllProducts';

function App() {
  return (
    <>
        <BrowserRouter> 
        <Toaster />
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addProducts" element={<AddProduct />} />
            <Route path="/register" element={<Signup/>} />
            <Route path="/user" element={<User />} />
            <Route path="/ProductDetail/:id" element={<ProductDetail/>} />
            <Route path="/updateProduct/:id" element={<UpdateProduct/>} />
            <Route path="/bulkorder" element={<BulkOrderPage/>} />
            <Route path="/smartwatch" element={<SmartWatch/>} />
            <Route path="/newlaunches" element={<NewLaunches/>} />
            <Route path="/earphones" element={<EarPhones/>} />
            <Route path="/speakers" element={<Speaker/>} />
            <Route path="/accessories" element={<Accessories/>} />
            <Route path="/UserInfo" element={<UserInfo/>} />
            <Route path="/myOrders" element={<MyOrders/>} />
            <Route path="/addProductToAdvPage" element={<AddAdvPageProduct/>} />
            <Route path="/AdminInfo" element={<AdminInfo/>} />
            <Route path="/luxeEditionPage" element={<LuxeEditionPage/>} />
            <Route path="/ValueEditionPage" element={<ValueEditionPage/>} />
            <Route path="/OrderDetails" element={<OrderDetails/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/viewall" element={<AllProducts/>} />
            <Route path="/stripeCheckout" element={<StripeCheckout/>} />
          </Routes>
        </BrowserRouter>

        
        
        
        
    </>
  )
}
export default App;
