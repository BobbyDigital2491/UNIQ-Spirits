/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Nav from '../components/Nav'
import Seo from '../components/Seo'
import Footer from '../components/Footer'
import Red from '../components/Red'
import HamburgerMenu from '../components/HamburgerMenu'
import Nav2 from '../components/Nav2'

const SweetRed = () => {
  return (
    <div>
        <Seo title={"Uniq Spirits"} 
             description={"Welcome to U'NIQ Spirits."} 
             image={"public/UNIQ.jpg"} 
             url={"UniqSpirits.com"}  />
        <Nav2/>
        <Red/>
      
    </div>
  )
}

export default SweetRed
