import React, { useState } from "react";
import axios from "axios";
import googleLogo from "@/assets/Google_Icons.webp";
import { Link } from "react-router-dom";
export default function CreateAccountComponent({ handleSignup, loading, message }) {
 

  return (
      <div className="flex flex-col w-full h-full">
        <div className="space-y-2 mb-8">
          <p className="text-3xl font-semibold">Let's create your account</p>
          <p className="text-xl">
            Signup for Lejerli and manage your portfolio easily
          </p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col w-full h-full"
        >
          <div className="mb-6 w-full">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6 w-full">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Create Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center mb-6 ">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
            <label
              htmlFor="remember"
              className="ms-2 text-sm font-medium text-gray-900"
            >
              I agree with Lejerli's Terms of Service and Privacy Policy.
            </label>
          </div>
          <button
            type="button"
            className="w-full text-white bg-secondaryColor font-medium rounded-lg text-sm px-5 py-2.5 mb-4"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Continue"}
          </button>
          {message && <p className="text-center text-red-500">{message}</p>}
          <div className="flex gap-3 justify-between items-center my-4">
            <div className="border h-[1px] w-full"></div>
            Or
            <div className="border h-[1px] w-full"></div>
          </div>
          <a
            href="#"
            type="button"
            className="flex justify-center items-center border border-secondaryColor text-secondaryColor rounded-lg font-medium text-sm py-2"
          >
            <img src={googleLogo} alt="" className="h-10 w-10" />
            Connect with Google
          </a>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <a href="" className="text-secondaryColor hover:underline">
            Login
          </a>
        </p>
      </div>
  );
}
