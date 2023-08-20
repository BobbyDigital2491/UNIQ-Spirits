/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Collections = () => {
  return (
  
<div className="bg-gray-100">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-2xl font-bold text-gray-900">About U&apos;NiQ</h2>

      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="Black.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              No Preservatives
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">100% organic and locally sourced grapes for NC & SC</p>
        </div>
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="SR.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Black Owned
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Created and Brewed by a purely balck owned company</p>
        </div>
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="/Shop.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="absolute inset-0"></span>
              Premium Craft Wine
            </a>
          </h3>
          <p className="text-base font-semibold text-gray-900">Pushing the boundaries of traditional flavors and aromas.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Collections
