import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Seo from '../components/Seo'
import Collections from '../components/Collections'
import Reviews from '../components/Reviews'
import C2 from '../components/C2'


const home = () => {
  return (
    <div className='bg-black'>
        <Seo title={"Uniq Spirits"} 
             description={"Welcome to U'NIQ Spirits."} 
             image={"public/UNIQ.jpg"} 
             url={"UniqSpirits.com"}  />
        
        <Hero/>
        <Collections/>
        <C2/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

export default home
