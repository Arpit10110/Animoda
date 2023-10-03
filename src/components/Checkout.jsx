import React from 'react'
import "../style/Chekout.css"
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import OrderPlaced from "./OrderPlaced"
const Contact = () => {
    let mes="Order has been Placed ";
    const [state, handleSubmit] = useForm("myyqbdev");
    if (state.succeeded) {
   return(<OrderPlaced/>);
  }
  return (
    <div className='CheckoutDiv' >
       <form id='myForm' onSubmit={handleSubmit} className='Checkform'>
        <input className='input' type="text" name='Name' placeholder='Enter Your Name'autoComplete='off' required />
        <input className='input' type="text" name='Phoneno' placeholder='Enter Your Phone no.' autoComplete='off' required />
        <input className='input' type="text" name='Email' placeholder='Enter Your E-mail' autoComplete='off' required />
        <input className='input' type="text" name='Address' placeholder='Enter Your Address ' autoComplete='off' required />
        <input className='input' id='Message' value={mes} type="text" name='Message' placeholder='' autoComplete='off' required />
        <h5 className='payment'>Payment : Cash On Delivery </h5>
        <button type='submit' className='PTO' disabled={state.submitting}>Place the Order</button>
       </form>
    </div>
  )
}

export default Contact;