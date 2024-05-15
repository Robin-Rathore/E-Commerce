import { useState } from 'react'
import Header from './components/Header'
import Example from './components/Example'
import TopSlider from './components/TopSlider'
import Footer from './components/Footer'
<<<<<<< HEAD
import Carousel from "./components/Carousel"
=======
import Login from './components/Login'
import Signup from './components/Signup'


// import { Carousel } from './components/Carousel'
>>>>>>> 1fc7325829797bb16fa36967bff5b727c99f3e6b
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <TopSlider/>
      {/* <Carousel/> */}
      
      {/* <Login/> */}
      <Signup/>

      <Footer/>

    </>
  )
}
export default App;
