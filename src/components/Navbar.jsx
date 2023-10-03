import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Nav.css"
import menu from "../assets/menu.png"
import close from "../assets/close.png"
import { useSelector } from 'react-redux'
import {BiCart} from"react-icons/bi"
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect,logout , isAuthenticated } = useAuth0(); 
  function menuFun(){
    let menuBtn=document.querySelector(".menu");
    let main=document.querySelector(".main");
    menuBtn.style="display:none;"
    main.style="display:flex;"
  }
  function closefun(){
    if (window.innerWidth <= 430) {
      let menuBtn=document.querySelector(".menu");
      let main=document.querySelector(".main");
      menuBtn.style="display:block;"
      main.style="display:none;"
    }
  }
  const {cartitem} = useSelector(state=>state.cart);
  return (
    <nav className='navbar'>
        <Link to="/"><h4 className='logoName'>AniModa<span>🦋</span></h4></Link>
        <main className='main'>
        <img className='close'  onClick={closefun} src={close} alt="" />
            <Link onClick={closefun} className='nava'  to="/">Home</Link>
            <Link onClick={closefun} className='nava'  to="/Products/T-shirt">Products</Link>
            <Link onClick={closefun} className='nava'  to="/Cart"><BiCart className='carticon'/><span className='cartval'>{cartitem.length}</span></Link>
            <Link onClick={closefun} className='nava'  to="/Contact">Contact</Link>
            {
               isAuthenticated ? (<Link className='nava' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Link> ):(<Link className='nava' onClick={() => loginWithRedirect()}>Log In</Link>)
            }
        </main>
        <img onClick={menuFun}  className="menu" src={menu} alt="" />
    </nav>
  )
}

export default Navbar