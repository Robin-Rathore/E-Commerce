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

function App() {
  return (
    <>
        <BrowserRouter> 
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup/>} />
            <Route exact path="/user" element={<User />} />
            <Route path="/ProductDetail" element={<ProductDetail/>} />
            <Route path="/bulkorder" element={<BulkOrderPage/>} />
            <Route path="/smartwatch" element={<SmartWatch/>} />
            <Route path="/newlaunches" element={<NewLaunches/>} />
            <Route path="/earphones" element={<EarPhones/>} />
            <Route path="/speakers" element={<Speaker/>} />
            <Route path="/accessories" element={<Accessories/>} />
          </Routes>
        </BrowserRouter>

        {/* <ProductDetail/> */}
        
    </>
  )
}
export default App;
