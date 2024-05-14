import { useState } from 'react'
import Header from './components/Header'
import Example from './components/Example'
import TopSlider from './components/TopSlider'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <TopSlider/>
      <Footer/>
    </>
  )
}

export default App;
