/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'

const Yr86 = () => {
  return (
    <div>
      <article className=" bg-black p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-white"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <span className="h-8 w-0.5 rounded-full bg-yellow-500"></span>
        <span className="h-6 w-0.5 rounded-full bg-yellow-500"></span>
        <span className="h-4 w-0.5 rounded-full bg-yellow-500"></span>
        <span className="h-6 w-0.5 rounded-full bg-yellow-500"></span>
        <span className="h-8 w-0.5 rounded-full bg-yellow-500"></span>
      </div>
    </div>

    <div>
      <strong
        className="rounded border border-white bg-yellow-400 px-3 py-1.5 text-[10px] font-medium text-black"
      >
        Episode #01
      </strong>

      <h3 className="mt-4 text-lg font-medium sm:text-xl">
        <a href="/Nf1" className="text-white hover:underline"> Open Season </a>
      </h3>

      <p className="mt-1 text-sm text-white">
        In the first ever episode of No Filter, the host and creator of the show Llama Lo3
        and his guests discuss Haiti and hip hop. 
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-white">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <p className="text-xs font-medium text-white">48:32 minutes</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        <h1 className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
          Featuring <a href="#" className=" hover:text-gray-700">Llama Lo3</a>,
           and
          <h1 className=" hover:text-gray-700">Crew</h1>
        </h1>
      </div>
    </div>
  </div>
</article>
    </div>
  )
}

export default Yr86
