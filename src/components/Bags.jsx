import React from 'react'
import { Baglist } from './BagList'
import { ToastContainer, toast } from "react-toastify";
import ProductCard from './ProductCard'
import {useDispatch} from "react-redux"
const Bags = () => {
  const dispatch = useDispatch();
  const addtocart=(option)=>{
    dispatch({
      type: "addtocart",
      payload:option
    })
    dispatch({
      type:"calculatePrice",
    })
    dispatch({
      type:"storage",
    })
    toast.success("Added to Cart", { position: "top-right", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
  }
  return (
   <>
   <div className="BagMain">
    {
      Baglist.map((i)=>{
        return(
          <ProductCard key={i.id} id={i.id} name={i.name} price={i.Price} imgsrc={i.imgsrc}  handler={addtocart} />
        );
      })
    }
     <ToastContainer
        position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
   </div>
   </>
  )
}

export default Bags