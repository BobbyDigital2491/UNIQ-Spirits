import React from 'react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import Shows from '../components/Shows'
import Shows2 from '../components/Shows2'
import PHero from '../components/PHero'
import Footer from '../components/Footer'
import Shows3 from '../components/Shows3'

const Podcasts = () => {
  return (
    <div>
        <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
        <Nav/>
        
        <PHero/>
        
        <div className="grid grid-cols-2 gap-4 bg-black sm:max-grid-cols-1">
        <Shows/>
        
        <Shows2/>
        <Shows3/>
        </div>
       
        <Footer/>
    </div>
  )
}

export default Podcasts
