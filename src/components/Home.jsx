import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import banner1 from "../assets/banner1.png"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import HomeProd1 from "../assets/HomeProd1.jpg"
import HomeProd2 from "../assets/HomeProd2.jpg"
import HomeProd3 from "../assets/HomeProd3.jpg"
import AboutVideo from "../assets/AboutVideo.mp4"
import {Link} from "react-router-dom"
import "../style/home.css"
const Home = () => {
  return (
   <>
   <div className='sliderIntro'>
     <Carousel className='caro' autoPlay={true} infiniteLoop={true} showStatus={false} showArrows={false} showIndicators={false} showThumbs={false} interval={2000}>
   <img src={banner2} className="bannerimg"  alt="banner2" />
   <img src={banner1} className="bannerimg"  alt="banner1" />
   <img src={banner3} className="bannerimg"  alt="banner3" />
  </Carousel>
   </div>
   <div className='about'>
    <div className="typewriter">
    <h1 className="aboutHead">Welcome to Animoda</h1>
    </div>
    <div className="aboutCont">
      <p>
      Welcome to AnimeModa, where fashion meets the captivating world of anime! We're your ultimate destination for all things stylish and anime-inspired. Dive into our curated collection of clothing, accessories, and apparel that celebrates the vibrant artistry and unique culture of anime. Whether you're an ardent fan, a dedicated cosplayer, or someone simply looking to infuse a touch of anime magic into your wardrobe, AnimeModa has something for everyone.Join us on a journey where creativity knows no bounds, and where every outfit tells a unique story. Let your style roar with AnimeModa  Where Anime Meets Fashion...
      </p>
      <video className='AboutVideo' src={AboutVideo}  autoPlay={true} muted={true} loop={true}/>
    </div>
   </div>
   <div className="Products">
   <div className="HomeProducts">
    <h1 className="ProductsHead">Products🧿️</h1>
   </div>
   <div className="HomeProd">
    <div className="Homeprodcard">
    <img className='HomeProdcardImg' src={HomeProd1} alt="HomeProd1" />
    <h5 className='HomeProdcardTitle'>OverSized T-shirt</h5>
    <Link className='Seemore' to="/Products/T-shirt">See More</Link>
    </div>
    <div className="Homeprodcard">
    <img className='HomeProdcardImg' src={HomeProd2} alt="HomeProd1" />
    <h5 className='HomeProdcardTitle'>Bags</h5>
    <Link className='Seemore' to="/Products/Bags">See More</Link>
    </div>
    <div className="Homeprodcard">
    <img className='HomeProdcardImg' src={HomeProd3} alt="HomeProd1" />
    <h5 className='HomeProdcardTitle'>Accessories</h5>
    <Link className='Seemore' to="/Products/Accessories">See More</Link>
    </div>
   </div>
   </div>
   </>
  )
}

export default Home