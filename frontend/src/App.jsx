import { useState } from 'react'
import Header from './components/Header'
import Example from './components/Example'
import TopSlider from './components/TopSlider'
import Footer from './components/Footer'
import Carousel from "./components/Carousel"
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Header/>
      <TopSlider/>
      {/* <Carousel/> */}
      <Footer/>
    </>
  )
}
export default App;
