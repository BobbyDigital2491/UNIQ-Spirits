/* eslint-disable @next/next/no-img-element */
import React from 'react'

const AHero = () => {
  return (
    <div>
      
        <section className='bg-black'>
  <div
    className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Podcasts"
          src="/Filmz.png"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl text-yellow-400 font-bold sm:text-4xl">About Us</h2>

        <p className="mt-4 text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-yellow-400 text-white px-12 py-3 text-sm font-medium transition hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Contact
        </a>
      </div>
    </div>
  </div>
</section>

        
    </div>
  )
}

export default AHero