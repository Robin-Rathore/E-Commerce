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

function App() {
  return (
    <>
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/addProducts" element={<AddProduct />} />
            <Route path="/register" element={<Signup/>} />
            <Route path="/user" element={<User />} />
            <Route path="/ProductDetail/:id" element={<ProductDetail/>} />
            <Route path="/bulkorder" element={<BulkOrderPage/>} />
            <Route path="/smartwatch" element={<SmartWatch/>} />
            <Route path="/newlaunches" element={<NewLaunches/>} />
            <Route path="/earphones" element={<EarPhones/>} />
            <Route path="/speakers" element={<Speaker/>} />
            <Route path="/accessories" element={<Accessories/>} />
            <Route path="/UserInfo" element={<UserInfo/>} />
            <Route path="/myOrders" element={<MyOrders/>} />
          </Routes>
        </BrowserRouter>

        
        
        
        
    </>
  )
}
export default App;
