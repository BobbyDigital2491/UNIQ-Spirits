import React from 'react'
import Nav2 from '../components/Nav2'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Seo from '../components/Seo'

const Shop = () => {
  return (
    <div className=''>
        <Seo title={"Uniq Spirits"} 
             description={"Welcome to U'NIQ Spirits."} 
             image={"public/UNIQ.jpg"} 
             url={"UniqSpirits.com"}  />
        <Nav2/>
        <br/><br/><br/><br/><br/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Shop