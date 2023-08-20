/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const C2 = () => {
  return (
    <section className='bg-white'>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
        New Collection
      </h2>

      <p className=" mx-auto mt-4 text-gray-500">
      Our mission at U’NiQ is to provide our customers with an exceptional and unforgettable wine experience. We are committed to producing a high-quality product, ensuring that each bottle tells a story and delivers a remarkable taste sensation. We strive to continuously innovate and explore new winemaking techniques, pushing the boundaries of traditional flavors and aromas. With a focus on sustainability and ethical practices, we aim to create a positive impact on the environment and the communities we operate in. At U’NiQ, we believe that every sip should be an adventure, and we are dedicated to delivering excellence in every bottle.
      </p>
    </header>

    <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li>
        <a href="/SweetRed" className="relative block group">
          <img
            src="Display.jpg"
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-red-600 bg-black">Sweet Red</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="/Sauvignon" className="relative block group">
          <img
            src="Shelf.jpeg"
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            className="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 className="text-xl font-medium text-red-600 bg-black">U&apos;NiQ Sauvignon Blanc</h3>

            <span
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" className="relative block group">
          <img
            src="Uniq.jpg"
            alt=""
            className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          
        </a>
      </li>
    </ul>
  </div>
</section>
  )
}

export default C2
