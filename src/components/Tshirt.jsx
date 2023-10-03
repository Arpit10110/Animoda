import React from 'react'
import "../style/TshirtCard.css"
import {TshirtList} from "./TshirtList"
import { ToastContainer, toast } from "react-toastify";
import ProductCard from "./ProductCard.jsx"
import {useDispatch} from "react-redux"
const Tshirt = () => {
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
    <div className="mainTshirtDiv">
      {
        TshirtList.map((i)=>{
        return(
          <ProductCard key={i.id} imgsrc={i.imgsrc} name={i.name} price={i.Price} id={i.id} handler={addtocart} />
        ) 
        })
      }
       <ToastContainer
        position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </div>
    </>
  )
}

export default Tshirt