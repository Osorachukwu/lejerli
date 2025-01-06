import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import companyLogo from "@/assets/company-logo-white.svg";
import btcBg from "../assets/btc-bg.svg";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import googleLogo from "@/assets/Google_Icons.webp";
import axios from "axios";
import $ from 'jquery';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(window.localStorage.getItem("loginStatus"));

  useEffect(() => {
    if (loginStatus === "true") {
      navigate("/");
;    }
  }, []);

  // const handleSignin = async () => {
  //   // alert(email)
  //   if (!email || !password) {
  //     setMessage("Please fill in all fields.");
  //     return;
  //   }

  //   if (!/\S+@\S+\.\S+/.test(email)) {
  //     setMessage("Please provide a valid email.");
  //     return;
  //   }

  //   setLoading(true);
  //   setMessage(null);

  //   try {
  //     const response = await axios.post(
  //       "https://api.lejerli.online/api/v1/auth/login",
  //       {
  //         email,
  //         password,
  //       }
  //     );

  //     if (response.status === 200) {
  //       setMessage(response.data.message);
  //       // setOpenOTPModal(true);
  //       // setEmail("");
  //       // setPassword("");
  //       // console.log(response.data)
  //       navigate("/create-account");
  //     } else {
  //       setMessage(response.data.message || "Signup failed. Please try again.");
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       // Handle 422 Unprocessable Entity error
  //       if (error.response.status === 422) {
  //         setMessage(
  //           "Password is not complex enough. Please use a mix of uppercase and lowercase letters, numbers, and special characters"
  //         );
  //       } else {
  //         setMessage(
  //           error.response.data.message ||
  //             "An error occurred. Please try again later."
  //         );
  //       }
  //     } else {
  //       setMessage("An error occurred. Please check your internet connection.");
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  const handleSignin = () => {
    window.localStorage.setItem("loginStatus", "false");

    $.ajax({
      type: "POST",
      url: "https://api.lejerli.online/api/v1/auth/login",
      crossDomain: true,
      xhrFields: {
        withCredentials: true,
      },
      cache: false,
      data: {
        email: email,
        password: password
      },
      success: ((res) => {
        let stored_email = window.localStorage.getItem("email");
        window.localStorage.setItem("user", res.data.email);//this will set a localstorage variable for current user
        
        if (!stored_email.includes(",")) {
          //only one user yet for the system
          if (stored_email !== res.data.email) {
            //drop a message, invalid email or password
          }
          else if (stored_email === res.data.email) {

            window.localStorage.setItem("loginStatus", "true");            navigate("/onboarding");
          }
          else {

          }
        }
        else {
          //for multiple users
          let split_stored_email = stored_email.split(",");

          if (split_stored_email.includes(res.data.email)) {

            window.localStorage.setItem("loginStatus", "true");            navigate("/onboarding");
          }
        }
      })
    })
  }



  return (
    <section className="bg-primaryColor text-white lg:h-screen p-4 lg:p-16 relative overflow-y-hidden">
      {/* bg-image */}
      <img src={btcBg} alt="" className="absolute -z-0 opacity-70" />
      <div className="h-full flex flex-col lg:flex-row">
        <div className="flex flex-col justify-between w-full lg:w-1/3 mb-8 lg:mb-0">
          <div>
            <div className="mb-10">
              <Link to="/">
                <img src={companyLogo} alt="Lejerli logo" />
              </Link>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold mb-6">
                Sign in to your Lejerli account
              </p>
              <ul className="list-disc pl-5 text-lg lg:text-xl space-y-2">
                <li>Import wallets</li>
                <li>Track and manage your portfolio</li>
                <li>Generate profit and loss reports</li>
              </ul>
            </div>
          </div>

          <footer className="hidden lg:block">
            <div className="flex gap-4 mb-4 justify-center lg:justify-start">
              {[
                {
                  socialMediaIcon: <Instagram className="text-primaryColor" />,
                  socialMediaUrl: "",
                },
                {
                  socialMediaIcon: <Facebook className="text-primaryColor" />,
                  socialMediaUrl: "",
                },
                {
                  socialMediaIcon: <Twitter className="text-primaryColor" />,
                  socialMediaUrl: "",
                },
                {
                  socialMediaIcon: <Youtube className="text-primaryColor" />,
                  socialMediaUrl: "",
                },
              ].map((socialMedia, i) => (
                <a key={i} href="#" className="bg-white rounded-full p-2">
                  {socialMedia.socialMediaIcon}
                </a>
              ))}
            </div>

            <div className="space-x-4 mb-4 text-center lg:text-left">
              <a href="#">Terms of use</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies</a>
            </div>
            <span className="text-sm text-white text-center lg:text-left">
              ©
              <a href="#" className="hover:underline">
                Lejerli
              </a>
              2024
            </span>
          </footer>
        </div>
        {/* col 2 */}
        <div className="w-full lg:w-2/3 bg-white text-black rounded-lg p-8 lg:p- z- relative ">
          <div className="flex flex-col w-full h-full">
            <div className="space-y-2 mb-8">
              <p className="text-3xl font-semibold">
                Let's create your account
              </p>
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
                  onChange={(e)=> setEmail(e.target.value)}
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
                  onChange={(e)=> setPassword(e.target.value)}
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
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="w-full text-white bg-secondaryColor font-medium rounded-lg text-sm px-5 py-2.5 mb-4"
                onClick={handleSignin}
              >
                Sign into your account
              </button>

              {/* <div
                className="absolute top-0 right-0 flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div className="font-medium">{message}</div>
              </div> */}
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
              Don't have an account yet?
              <Link
                to="/create-account"
                className="text-secondaryColor hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
