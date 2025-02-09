import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-white pt-10">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-20">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
        Growing Your Portfolio Is Hard
      </h1>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
        <span className='text-secondaryColor'>Accounting</span> For It Shouldn't Be
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 ">
        Lejerli consolidates your crypto data across exchanges, tracks
        profit and loss, and helps you stay in control of your portfolio.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-5">
        <a
          href="#"
          className="py-3 px-5 sm:ms-4 text-sm font-medium text-primaryColor focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-secondaryColor focus:z-10 focus:ring-4 focus:ring-gray-100 "
        >
          Contact Sales
        </a>
        <Link
          to="/create-account"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primaryColor hover:bg-secondaryColor focus:ring-4 focus:ring-blue-300"
        >
          Get started
          <ArrowRight />
        </Link>
      </div>
    </div>
  </section>
  )
}
