import React, { useState } from "react";
import companyLogo from "@/assets/company-logo-white.svg";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Onboarding from "../components/onboarding/Onboarding";
// import CreateAccountComponent from "../components/onboarding/CreateAccountComponent";
import { Link } from "react-router-dom";
import btcBg from "../assets/btc-bg.svg";
// import EnterOTP from "../components/onboarding/EnterOTP";
import axios from "axios";
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
  console.log(otpVerified);

  const handleSignup = async () => {
    if (!email || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please provide a valid email.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post(
        "https://api.lejerli.online/api/v1/auth/signup",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        setMessage(response.data.message);
        setOpenOTPModal(true);
        setEmail("");
        setPassword("");
      } else {
        setMessage(response.data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setMessage(
          error.response.data.message ||
            "An error occurred. Please try again later."
        );
      } else {
        setMessage("An error occurred. Please check your internet connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  let handleConfirmOTP = () => {
    if (otpValue === "12345") {
      setOtpVerified(true);
    } else {
      alert("OTP is incorrect");
    }
  };

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
                for="otp"
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
        <div className="w-full lg:w-2/3 bg-white text-black rounded-lg p-8 lg:p- z- relative ">
          {
            otpVerified ? (
              <Onboarding />
            ) : (
              // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
              // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
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
                    <p className="text-center text-red-500">{message}</p>
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
                  <a href="" className="text-secondaryColor hover:underline">
                    Login
                  </a>
                </p>
              </div>
            )

            // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
            // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
          }
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
