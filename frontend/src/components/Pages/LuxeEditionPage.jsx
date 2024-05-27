import React from 'react'
import Header from '../Header'
import TopSlider from '../TopSlider'
import Footer from '../Footer'

const LuxeEditionPage = () => {
  return (
    <>
      <div className="top_heade">
        <Header />
        <TopSlider/>
      </div>
    <div className="wrapper_of_SmartWatch">
      <div className="main_content_SmartWatch">
        <div className="heading_SmartWatch">
          <h1>Luxe Edition</h1>
        </div>
      </div>
      <div
        className={`min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16 'details-open' }`}
      >
        {/* <div className="flex flex-wrap justify-center gap-5 pt-8">
          {firstTenItems.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
              description={item.description}
            />
          ))}
        </div> */}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default LuxeEditionPage
