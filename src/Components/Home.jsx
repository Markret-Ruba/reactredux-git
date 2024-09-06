import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import image1 from './../assets/image1.jpg'
import image2 from './../assets/image2.jpg'
import image3 from './../assets/image3.jpg'
import image4 from './../assets/image4.jpg'
import image5 from './../assets/image5.jpg'
import Product from './Product'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home ()  {
  const cartItems = useSelector(state => state.cart.cart)
  return (
    <div className='w-100 d-flex flex-column'>
      <div className='d-flex justify-content-between px-4 bg-dark text-white align-items-center'>
        <h2>Code</h2>
        <Link to ="/checkout"><h4>Cart -<small>{cartItems.length}</small></h4></Link>
      </div>
      <div className='container d-flex flex-wrap mt-5'>
        <div className='border w-50'>
          <Product
          id="1"
          title="iPhone 9"
          image={image1}
          />
        </div>
        <div className='border w-50'>
          <Product
          id="2"
          title="iPhone X"
          image={image2}
          />
        </div>
        <div className='border w-50'>
          <Product
          id="3"
          title="Samsung Universe 9"
          image={image3}
          />
        </div>
        <div className='border w-50'>
          <Product
          id="4"
          title="OPPOF19"
          image={image4}
          />
        </div>
        <div className='border w-50'>
          <Product
          id="5"
          title="Huawei P30"
          image={image5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home

