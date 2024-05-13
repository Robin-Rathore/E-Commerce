import { useState } from 'react'
import Header from './components/Header'
import Example from './components/Example'
import TopSlider from './components/TopSlider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <TopSlider/>
    </>
  )
}

export default App
