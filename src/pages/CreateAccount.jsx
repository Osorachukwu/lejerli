import React, { useEffect, useState } from "react";
import companyLogo from "@/assets/company-logo-white.svg";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Onboarding from "../components/onboarding/Onboarding";
// import CreateAccountComponent from "../components/onboarding/CreateAccountComponent";
import { Link, useNavigate } from "react-router-dom";
import btcBg from "../assets/btc-bg.svg";
// import EnterOTP from "../components/onboarding/EnterOTP";
import axios from "axios";
import $ from "jquery";
import googleLogo from "@/assets/Google_Icons.webp";
// import googleLogo from "@/assets/Google_Icons.webp";
// import Onboarding from "@/components/onboarding/Onboarding";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [openOTPModal, setOpenOTPModal] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  // console.log(otpVerified);
  const [storeEmail, setStoreEmail] = useState("");
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState(
    window.localStorage.getItem("loginStatus")
  );

  useEffect(() => {
    if (loginStatus === "false") {
      navigate("/create-account");
    }
    else if (loginStatus === "true") {
      navigate("/onboarding");
    }
  }, []);

  const handleSignup = () => {
    $.ajax({
      type: "POST",
      url: "https://api.lejerli.online/api/v1/auth/signup",
      crossDomain: true,
      xhrFields: {
        withCredentials: true,
      },
      cache: false,
      dataType: "json",
      data: {
        email: email,
        password: password,
      },
      success: (response) => {
        if (response.data.email.length !== 0) {
          //action here
          setEmail("");
          setPassword("");
          setStoreEmail(response.data.email);
          setMessage(response.message);
          setOpenOTPModal(true);
        } else {
          //handle error here
        }
      },
      error: (response) => {
        if (response == 422) {
          //handle error here
        }
      },
    });
  };
  // const handleSignup = async () => {
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
  //       "https://api.lejerli.online/api/v1/auth/signup",
  //       {
  //         email,
  //         password,
  //       }
  //     );

  //     if (response.status === 200) {
  //       setMessage(response.data.message);
  //       setOpenOTPModal(true);
  //       setEmail("");
  //       setPassword("");
  //       setStoreEmail(response.data.email)
  //       console.log(response.data.email) //!checking to see it'll return the email
  //       // navigate("/signin")
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

  const handleConfirmOTP = () => {
    $.ajax({
      type: "POST",
      url: "https://api.lejerli.online/api/v1/auth/signup/verify-otp",
      dataType: "json",
      crossDomain: true,
      cache: false,
      xhrFields: {
        withCredentials: true,
      },
      data: {
        email: storeEmail,
        otp: otpValue,
      },
      success: (res) => {
        let Email = res.data.email;
        let token = res.data.access_token;

        let data_email = Email;
        let data_token = token;

        let stored_email = window.localStorage.getItem("email");
        let stored_token = window.localStorage.getItem("token");

        if (stored_email == null || stored_email.length == 0) {
          window.localStorage.setItem("email", data_email);
          window.localStorage.setItem("token", data_token);
        } else {
          let new_email = stored_email + "," + data_email;
          let new_token = stored_token + "," + data_token;
          window.localStorage.setItem("email", new_email);
          window.localStorage.setItem("token", new_token);
        }

        navigate("/signin");
      },
    });
  };

  // const handleConfirmOTP = async () => {
  //   try {
  //     const { status, data } = await axios.post(
  //       "https://api.lejerli.online/api/v1/auth/signup/verify-otp",
  //       {
  //         storeEmail,
  //         otpValue,
  //       }
  //     );

  //     if (status === 200) {
  //       navigate("/signin");
  //     } else {
  //       setMessage(data.message || "Signup failed. Please try again.");
  //     }
  //   } catch (error) {
  //     if (error.response) {
  //       if (error.response.status === 422) {
  //         setMessage(
  //           "Password is not complex enough. Please use a mix of uppercase and lowercase letters, numbers, and special characters."
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

  return (
    <section className="bg-primaryColor text-white lg:h-screen p-4 lg:p-16 relative overflow-y-hidden">
      {/* 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
      {/* 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
      {openOTPModal && !otpVerified && (
        <div class="max-w-md border absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
          <form
            class="bg-white shadow-customBoxShadow rounded px-8 py-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="otp"
              >
                Verify OTP:
              </label>
              <input
                class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="otp"
                type="text"
                placeholder="Enter OTP"
                value={otpValue}
                onChange={(e) => setOtpValue(e.target.value)}
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                class="bg-secondaryColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleConfirmOTP}
              >
                Verify
              </button>
              <a
                class="inline-block align-baseline font-bold text-sm text-secondaryColor"
                href="#"
              >
                Resend OTP
              </a>
            </div>
          </form>
        </div>
      )}
      {/* 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
      {/* 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
      {/* bg-image */}
      <img src={btcBg} alt="" className="absolute -z-0 opacity-70" />
      <div className="h-full flex flex-col lg:flex-row">
        {/* col 1 */}
        <div className="flex flex-col justify-between w-full lg:w-1/3 mb-8 lg:mb-0">
          <div>
            <div className="mb-10">
              <Link to="/">
                <img src={companyLogo} alt="Lejerli logo" />
              </Link>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold mb-6">
                Get started quickly with our friendly user interface
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
        {/* Moving from the create account component to the onbordeing 1 based on the state above💥 */}
        <div className="w-full lg:w-2/3 bg-white text-black rounded-lg p-5 lg:p- z- relative ">
          
              {/* 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
              {/* 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
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
                      I agree with Lejerli's Terms of Service and Privacy
                      Policy.
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
                  {message && (
                    // <p className="text-center text-red-500 absolute right-0">{message}</p>

                    <div
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
                    </div>
                  )}
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
                  <Link
                    to="/signin"
                    className="text-secondaryColor hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>

            {/* 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
            {/* 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 */}
        </div>
        <footer className="mt-8 lg:hidden">
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
          <div className="text-sm text-white text-center">
            ©
            <a href="https://flowbite.com/" className="hover:underline">
              Lejerli
            </a>
            2024
          </div>
        </footer>
      </div>
    </section>
  );
}
