import React from 'react'
import Navbar from '../Navbar/Navbar';
import Slideshow from '../Slideshow/Slideshow';
import "./home.css"
import Footer from '../Footer/Footer';
import CardsApp from '../Cards/cardsapp';
import Testimonial from '../Moti/moti';
// import Ourwork from '../Ourwork/ourwork';
import VideoBackground from '../Youtube/youtube';
// import RadialTeam from '../Second/second';
import SocialMediaIcons from '../SocialMedia';
// import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className='home'>
    <Navbar/>
    {/* <div className='hhh'>
      <h1 className='head1'> STUDIOS </h1>
      <p id="p2">Capturing the beauty of your journey.</p>
    </div> */}
    {/* <VideoBackground/> */}
    {/* <div> */}
      <Slideshow/>


    {/* </div> */}
    <br/>
    {/* <RadialTeam/> */}
  
    {/* <div> */}
      < CardsApp/>
    {/* </div> */}
    <br>
    </br>
    <Testimonial/>
    

    {/* <Ourwork/> */}

    <VideoBackground/>
    <SocialMediaIcons />
    
    {/* <div> */}
    <Footer/>
    {/* </div> */}
    </div>
    

  )
}

export default Home;