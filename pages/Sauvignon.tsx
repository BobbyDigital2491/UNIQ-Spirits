/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Nav2 from '../components/Nav2'
import Sav from '../components/Sav'
import Footer from '../components/Footer'
import HamburgerMenu from '../components/HamburgerMenu'
import Seo from '../components/Seo'

const Sauvignon = () => {
  return (
    <div>
        <div>
        <Seo title={"Uniq Spirits"} 
             description={"Welcome to U'NIQ Spirits."} 
             image={"public/UNIQ.jpg"} 
             url={"UniqSpirits.com"}  />
        <Nav2/>
        <Sav/>
        <Footer/>
      
    </div>
    </div>
  )
}

export default Sauvignon