import React, { useEffect, useState } from "react";
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
  // console.log(otpVerified);

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
        // Handle 422 Unprocessable Entity error
        if (error.response.status === 422) {
          setMessage(
            "Password is not complex enough. Please use a mix of uppercase and lowercase letters, numbers, and special characters"
          );
        } else {
          setMessage(
            error.response.data.message ||
              "An error occurred. Please try again later."
          );
        }
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

replecate whats in the component above for whats in the component below, so that users can import their wallet by passing in thir secret, key and passphrase using this endpoint https://api.lejerli.online/api/v1/exchange



import React from "react";
import { ArrowDownToLine, ChevronDown, Info, X } from "lucide-react";
import bitcoinLogo from "@/assets/assets-logo/bitcoin-logo.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function ImportWallet() {
  const [secret, setSecret] = useState("");
  const [keyAddress, setKeyAddress] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [defaultCurrency, setDefaultCurrency] = useState("");
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-10">
        {/* Col 1 */}
        <div className="md:w-1/2 space-y-3 md:space-y-8">
          <div className="flex items-center gap-4">
            <img src={bitcoinLogo} alt="" />
            <p>Bitcoin</p>
          </div>
          <p className="text-3xl font-semibold">
            Adding Your Bitcoin Wallet Address
          </p>
          <div className="flex items-center gap-2 border border-[#8041FF] text-[#8041FF] bg-[#8041ff25] rounded-lg p-1 text-xs md:text-base">
            <Info />
            <p className="">
              Please provide your public address it doesn't give us the ability
              to remove your funds
            </p>
          </div>
          <p className="text-xl">
            Lejerli will fetch all deposit and withdrawal transactions from the
            wallet public, blockchain, or receiving address. We support all
            major blockchain imports. Signup for Lejerli and manage your
            protfolio easily
          </p>
        </div>
        {/* Col 2 */}
        <div className="md:w-1/2 space-y-8 pt-8">
          <div>
            <p className="text-3xl font-semibold">Wallet</p>
            <p className="text-xl">Import wallet using public address</p>
          </div>
          <div>
            <p>Bitcoin</p>
            <div className="flex items-center justify-between border rounded-lg p-3 mt-2">
              <div className="flex gap-2 items-center">
                <img src={bitcoinLogo} alt="" className="rounded-full" />
                <p>Bitcoin</p>
              </div>
              <button>
                <X />
              </button>
            </div>
          </div>
          <form className="mx-auto">
            <div className="mb-5">
              <label
                htmlFor="secret"
                className="block mb-2 font-medium text-gray-900"
              >
                Secret
              </label>
              <input
                type="text"
                id="secret"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                placeholder="Enter Secret"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="wallet-key"
                className="block mb-2 font-medium text-gray-900"
              >
                key
              </label>
              <input
                type="text"
                id="wallet-key"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                placeholder="Enter Key"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="passphrase"
                className="block mb-2 font-medium text-gray-900"
              >
                Passphrase
              </label>
              <input
                type="text"
                id="passphrase"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                placeholder="Enter Passphrase"
                required
              />
            </div>
          </form>
          <div>
            <p className="text-start">Select a default currency</p>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="w-full">
                <div className="flex justify-between items-center gap-8 p-4 font-medium rounded-lg border w-full">
                  Default Currency
                  <ChevronDown size={16} />
                </div>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="bg-white shadow-customBoxShadow px-3 py-2 rounded-lg space-y-2">
                <DropdownMenu.Item>
                  Profile Profile Profile Profile Profile
                </DropdownMenu.Item>

                <DropdownMenu.Item>Billing</DropdownMenu.Item>

                <DropdownMenu.Item>Team</DropdownMenu.Item>

                <DropdownMenu.Item>Subscription</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
          {/* BTN's */}
          <div className="flex justify-end items-center">
            <Link to="/dashboard">
              <button
                type="button"
                className="px-5 py-2.5 inline-flex items-center text-white bg-[#8041FF] hover:bg-gray-100 hover:text-[#8041FF] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center me-2"
              >
                <ArrowDownToLine />
                Import CSV File
              </button>
              <button
                type="button"
                className="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 me-2 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                Cancle
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
