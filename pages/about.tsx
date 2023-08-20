/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import About from '../components/About'
import Footer from '../components/Footer'
import Info3 from '../components/Info3'
import AHero from '../components/AHero'

const about = () => {
  return (
    <div className='bg-black'>
      <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
      <Nav/>
      <AHero/>
      
      <Footer/>
      
    </div>
  )
}

export default about
