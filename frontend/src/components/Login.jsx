import React from 'react'
// import Link from 'next/link'
import Signup from './Signup'
import google from "../images/google-icon.png"
import apple from "../images/apple-icon.png"
import facebook from "../images/facebook-icon.png"
import twitter from "../images/twitter-icon.png"
import { LinkOff, LinkOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
    

    <div className="flex justify-center items-center ">
        <div className="flex justify-center my-5 items-center bg-red-400 " style={{}}>
          <form className="bg-white p-10 md:p-20 rounded shadow-lg" style={{}} >

            {/* Login*/}
            <h1 className="text-gray-800 font-bold text-3xl mb-5">Login</h1>{} 

            {/* Create Account */}
            <div className="flex flex-col md:flex-row">
              <p className="text-m font-normal text-gray-600 mb-3 md:mb-0 md:mt-1/2">Don't have an account yet?  </p>
              <Link to={"/register"} className='ml-3 mb-2' style={{ color: "#00b9aa" }}> Create Account </Link>
              
              
            </div>

            {/* login with others */}
            <div className="flex justify-center mb-5 md:ml-5">
              <p className='google m-3 cursor-pointer icon-container' ><img src={google} alt="google-icon" style={{ height: "20px" }} /></p>
              <p className='google m-3 cursor-pointer icon-container' ><img src={facebook} alt="facebook-icon" style={{ height: "20px" }} /></p>
              <p className='google m-3 cursor-pointer icon-container' ><img src={apple} alt="apple-icon" style={{ height: "20px" }} /></p>
              <p className='google m-3 cursor-pointer icon-container' ><img src={twitter} alt="twitter-icon" style={{ height: "20px" }} /></p>
            </div>


            {/**Or Wali line */}
            <div className="flex items-center mb-5">
              <div className="flex-1 bg-black " style={{ height: "1px" }} ></div>
              <span className="mx-4">OR</span>
              <div className="flex-1 bg-black " style={{ height: "1px" }}></div>
            </div>


            {/** Email-area */}
            <div className="mb-4">
              <input
                required
                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                type="email"
                placeholder="Email"
                name="email"
                // value={}
                
              />
            </div>


            {/** password-area */}
            <div className="relative mb-4">
              <input
                required
                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                type="password"
                placeholder="Password"
                name="password"
                // value={}
              />              
            </div>
 

            {/**Forgot password */}
            <div className="forgot-password text-xs mb-7 text-gray-700">
              <a href="">Forgot your Password?</a>
            </div>


            {/**Login button*/}
            <button type="submit" className="w-full py-2 rounded-lg text-white font-semibold mb-2 shining-btn" style={{ backgroundColor: "#52B6AA " , zIndex:"999"}}>
              Login
            </button>

          </form>
        </div>
      </div>



    </>
  )
}

export default Login