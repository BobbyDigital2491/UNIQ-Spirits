/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Seo from '../components/Seo'
import Nav from '../components/Nav'
import NineOne from '../components/NineOne'
import Shows from '../components/Shows'
import Footer from '../components/Footer'
import Team91 from '../components/Team91'

const CH91 = () => {
  return (
    <div className='bg-gray-700'>
     <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />   
     <Nav/>
     <Shows/>
     <NineOne/>
     <Team91/>

     
     <Footer/>

    </div>
  )
}

export default CH91
