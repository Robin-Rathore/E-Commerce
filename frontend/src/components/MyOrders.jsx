import React from 'react'
import Header from './Header'
import TopSlider from './TopSlider'
import Footer from './Footer'

const MyOrders = () => {
  return (
    <>
      <Header />
      <TopSlider/>
      <div className='wrapper'>
        <p className='p-4 text-xl'>
            My Orders
        </p>
        <div className="product-wrapper p-4">
            <h2>Orders Displays Here</h2>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyOrders
