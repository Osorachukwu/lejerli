// import Image //from "next/image";
//from "next/image";
import React, { useState } from "react";
import googleLogo from "@/assets/Google_Icons.webp";
import { Link } from "react-router-dom";

export default function CreateAccountComponent({ handleSwitch }) {
  return (
    <div>
      <div className="space-y-2 mb-8">
        <p className="text-3xl font-semibold">Let's create your account</p>
        <p className="text-xl">
          Signup for Lejerli and manage your protfolio easily
        </p>
      </div>
      <form action="">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Create Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <Link
            to="#"
            className="ms-2 text-sm font-medium text-primaryColor  hover:underline"
          >
            <label htmlFor="remember" className="">
              I agree with Lejerli's Terms of Service and Privacy Policy.
            </label>
          </Link>
        </div>
        <button
          type="button"
          className="w-full text-white bg-secondaryColor font-medium rounded-lg text-sm px-5 py-2.5 me-2 "
          onClick={handleSwitch}
        >
          Continue
        </button>
        <div className="flex gap-3 justify-between items-center my-2">
          <div className="border h-[1px] w-full"></div>
          Or
          <div className="border h-[1px] w-full"></div>
        </div>
        <a href="#" type="button">
          <div className="flex justify-center items-center border border-secondaryColor text-secondaryColor rounded-lg font-medium text-sm">
            <img src={googleLogo} alt="" className="h-10 w-10" />
            Connect with Google
          </div>
        </a>
      </form>
      <p className="text-black text-center mt-4">
        Already have an account?{" "}
        <a
          href=""
          className="text-secondaryColor hover:underline"
        >
          Login
        </a>
      </p>
    </div>
  );
}
