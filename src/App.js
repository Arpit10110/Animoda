import React from 'react'
import {HashRouter as Router, Routes ,Route} from "react-router-dom"
import "./style/Style.css"
import Home from "./components/Home.jsx"
import Products from "./components/Products.jsx"
import Tshirt from "./components/Tshirt.jsx"
import Accessories from "./components/Accessories.jsx"
import Bags from "./components/Bags.jsx"
import Contact from './components/Contact'
import Footer from "./components/Footer.jsx"
import Navbar from './components/Navbar'
import Checkout from './components/Checkout.jsx'
import Cart from './components/Cart'
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}>
          <Route path="T-shirt" element={<Tshirt/>}/>
          <Route path="Bags" element={<Bags/>}/>
          <Route path="Accessories" element={<Accessories/>}/>
        </Route>
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App