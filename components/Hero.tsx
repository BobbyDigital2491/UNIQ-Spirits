/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from 'react';
import H2 from './H2';

const Hero = () => {        
    return (
      <div className="relative pt-32 overflow-hidden xl:pt-40 bg-black">
      <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12 bg-transparent">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
              <div className="flex items-center justify-between">
                  <div className="flex flex-shrink-0">
                      <a href="/home" title="U'NiQ Spirits" className="inline-flex outline-none ring-2 ring-offset-secondary rounded-full ring-white ">
                          <img className="w-auto h-20 rounded-full" src="/UNIQ.jpg" alt="U'NiQ Spirits" />
                      </a>
                  </div>
  
                  <div className="md:hidden">
                      <H2/>
                  </div>
  
                  <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                      
  
                      <a href="/Shop" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Products </a>
  
                      <a href="#" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Contact Us </a>
                  </div>
              </div>
          </div>
      </header>
  
      <div className="relative">
          <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
              <div className="text-left md:max-w-xl md:mx-auto md:text-center">
                  <h1 className="tracking-tighter text-white">
                      <span className="font-sans font-normal text-7xl">Life is</span><br />
                      <span className="font-serif italic font-normal text-8xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-yellow-900 ">U&apos;Ni<span className='text-red-500'>Q</span></span>
                  </h1>
                  <p className="mt-5 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                  We strive to continuously innovate and explore new winemaking techniques, 
                  pushing the boundaries of traditional flavors and aromas. With a focus on sustainability and ethical practices, 
                  we aim to create a positive impact on the environment and the communities we operate in. At U’NiQ, we believe 
                  that every sip should be an adventure, and we are dedicated to delivering excellence in every bottle.</p>
  
                  <div className="mt-8">
                      <a
                          href="/Shop"
                          title=""
                          className="
                              inline-flex
                              items-center
                              justify-center
                              px-8
                              py-2
                              font-sans
                              text-base
                              font-semibold
                              transition-all
                              duration-200
                              border-2 border-transparent
                              rounded-full
                              sm:leading-8
                              bg-red-500
                              sm:text-lg
                              text-black
                              hover:bg-red-600
                              hover:bg-opacity-90
                              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                          "
                          role="button"
                      >
                          See Products
                      </a>
                  </div>
              </div>
          </div>
      </div>
  
      <div className="relative max-w-5xl px-6 mx-auto mt-12 -mb-8 group sm:px-8 lg:px-12 sm:-mb-24 lg:-mb-36 xl:-mb-40">
          <div className="overflow-hidden rounded-md aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
              
<video src="https://bafybeighfpc2rgmah22mq5imhnt6fw573fkuyjoc5aryfap6tzwc6ws3jq.ipfs.dweb.link/UNIQAD.mp4" className="w-full" 
 controls
 autoPlay
        loop
        muted>
   
  Your browser does not support the video tag.
</video>

          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
             
          </div>
      </div>
  </div>
  

    )
}
export default Hero;
