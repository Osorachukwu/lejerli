import React, { useState } from "react";
import axios from "axios";
import googleLogo from "@/assets/Google_Icons.webp";
import { Link } from "react-router-dom";

export default function CreateAccountComponent({ handleSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSignup = async () => {
    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Simple validation for email and password
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please provide a valid email.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post("https://api.lejerli.online/api/v1/auth/signup", {
        email,
        password,
      });

      if (response.status === 201) {
        setMessage("Account created successfully!");
        // Optionally redirect or reset form
        setEmail("");
        setPassword("");
      } else {
        setMessage(response.data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("API Error Response:", error.response.data);
        setMessage(error.response.data.message || "An error occurred. Please try again later.");
      } else {
        setMessage("An error occurred. Please check your internet connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="space-y-2 mb-8">
        <p className="text-3xl font-semibold">Let's create your account</p>
        <p className="text-xl">
          Signup for Lejerli and manage your portfolio easily
        </p>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
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
          className="w-full text-white bg-secondaryColor font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Continue"}
        </button>
        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
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
        <a href="" className="text-secondaryColor hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}
