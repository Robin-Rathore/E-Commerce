import { useState } from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from './FrontPage';
import Signup from './components/Signup';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
        <BrowserRouter> 
          <Routes>
            <Route exact path="/" element={<FrontPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Signup/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;
