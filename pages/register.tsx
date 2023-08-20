/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import Seo from '../components/Seo'

const Register = () => {
  return (
    <div>
      <Seo title={"Channel 91"} 
      description={"Welcome to Channel 91, a variety channel where you can find whatever content your'e looking for. From documentaries to podcasts, comedy skits to real news. Channel 91 is the home of content."} 
      image={"public/monkey.png"} 
      url={"CH91.com"}  />
        
<section className="bg-black">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Pattern"
        src="/CH91.png"
        className="absolute inset-0 h-full w-full object-fit bg-black"
      />
    </aside>

    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="/">
          <span className="sr-only">Home</span>
          <img src='/CH91.png' width={70} height={80} alt="Logo" />
        </a>

        <h1
          className="mt-6 text-2xl font-bold text-yellow-400 sm:text-3xl md:text-4xl"
        >
          Welcome to Channel 91 📺
        </h1>

        <p className="mt-4 leading-relaxed text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-sm font-medium text-white"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              name="first_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="LastName"
              className="block text-sm font-medium text-white"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              name="last_name"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-white">
              Email
            </label>

            <input
              type="email"
              id="Email"
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="Password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>

            <input
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-white"
            >
              Password Confirmation
            </label>

            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-white">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-white">
              By creating an account, you agree to our &nbsp;
              <a href="#" className="text-gray-500 ">
                terms and conditions &nbsp;
              </a>
              and &nbsp;
              <a href="#" className="text-gray-500 ">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className="inline-block shrink-0 rounded-md border border-white bg-yellow-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black focus:outline-none focus:ring active:text-black"
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-white sm:mt-0">
              Already have an account? &nbsp;
              <a href="/login" className="text-gray-500 underline">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>

    
    </div>
  )
}

export default Register
