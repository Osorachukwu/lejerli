// import Image //from "next/image";
 //from "next/image";
import React from "react";
import googleLogo from "@/assets/Google_Icons.webp";

export default function CreateAccount() {
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
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Create Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree with Lejerli's
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Terms of Service
            </a>
            and
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>
        <button
          type="button"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Continue
        </button>
        <div className="flex gap-3 justify-between items-center my-2">
          <div className="border h-[1px] w-full"></div>
          Or
          <div className="border h-[1px] w-full"></div>
        </div>
        <a href="#" type="button">
          <div className="flex justify-center items-center border border-blue-700 text-blue-700 rounded-lg font-medium text-sm dark:bg-blue-600 dark:hover:bg-blue-700 hover:text-white focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
            <img src={googleLogo} alt="" className="h-10 w-10" />
            Connect with Google
          </div>
        </a>
      </form>
      <p className="text-black text-center mt-4">
        Already have an account?{" "}
        <a href="" className="text-blue-600 hover:underline dark:text-blue-500">
          Login
        </a>
      </p>
    </div>
  );
}
