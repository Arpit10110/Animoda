import React from 'react'
import orderPlacedImg from "../assets/OrderPlaced.gif"
import "../style/OrderPlaced.css"
import  {Link} from "react-router-dom"
const OrderPlaced = () => {
  return (
   <>
   <div className="OrderPlaced">
   <h4>Order Placed Successfully</h4>
   <img className='orderPlacedImg' src={orderPlacedImg} alt="orderPlacedImg" />
   <Link to="/" className='orderplacedbtn'>Go To HomePage</Link>
   </div>
   </>
  )
}

export default OrderPlaced