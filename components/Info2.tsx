/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Seo from './Seo'

const Info2 = () => {
  return (
  <section className="bg-black">
    <Seo title="U'NiQ Spirits" description="Sign Up for pour newsletter" image={''} url={''}/>
    <div className="p- md:p-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-2xl font-bold text-gray-600 md:text-3xl">
          Stay up to date with us by signing up for our newsletter!
        </h2>
  
        <p className="hidden text-white sm:mt-4 sm:block">
        Stay in the loop with U&apos;NiQ Spirits! Subscribe to our newsletter
        and elevate your wine journey. Receive firsthand updates on new wine 
        releases, expert recommendations, delightful food pairings, and irresistible offers.
        Embrace the art of wine with us and savor every sip.
        </p>
      </div>
    </div>
  </section>

  )
}

export default Info2
