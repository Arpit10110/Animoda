import React from 'react'
import "../style/productsNav.css"
import {Link, Outlet} from "react-router-dom"
const Products = () => {
  return (
    <>
    <div className="products">
    <div className='prodLink'>
      <Link className='ProductLinks'   to ="/Products/T-shirt" >Oversized T-shirt</Link>
      <Link className='ProductLinks'  to ="/Products/Bags" >Bags</Link>
      <Link className='ProductLinks'  to ="/Products/Accessories" >Accessories</Link>
    </div>
    <Outlet />
    </div>
    </>
  )
}

export default Products