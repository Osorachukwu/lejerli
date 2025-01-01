import companyLogoWhite from "../../assets/company-logo-white.svg";
import appleLogo from "../../assets/apple-logo.png";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primaryColor dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
          <div>
            <Link to="/">
              <img src={companyLogoWhite} alt="" />
            </Link>
            <div className="mt-10">
              {/* Apple store */}
              <button
                type="button"
                className="flex items-center justify-center w-44 text-black bg-white h-14 rounded-lg"
              >
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    App Store
                  </div>
                </div>
              </button>
              {/* Apple store */}
              {/* Google store */}
              <button
                type="button"
                className="flex items-center justify-center w-44 mt-3 text-black bg-white rounded-lg h-14"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </button>
              {/* Google store */}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Product
            </h2>
            <ul className="text-white dark:text-gray-400">
              <li className="mb-4">
                <Link to="#" className=" hover:underline">
                  How it works 
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Reviews
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                 Tax Professional Suite
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Tools
            </h2>
            <ul className="text-white dark:text-gray-400">
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                 Crypto Profit & Loss Calculator
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Crypto Tax Calculator
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Crypto Portfolio Tracker
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Crypto Converter
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-white dark:text-gray-400">
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Partner With Us
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
              Support
            </h2>
            <ul className="text-white dark:text-gray-400">
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Help Center
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*  */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between text-white pl-2">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            ©
            <a href="https://flowbite.com/" className="hover:underline">
              Lejerli
            </a>
            2024
          </span>
          <div className="flex sm:gap-5">
            <a>Terms of use</a>
            <a>Privacy Policy</a>
            <a>Cookies</a>
          </div>
          <div className="flex pb-4 mt-4 sm:justify-center sm:mt-0">
            
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white bg-white rounded-full p-1"
            >
              <Facebook />
              <span className="sr-only">Facebook page page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 bg-white rounded-full p-1"
            >
              <Twitter />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 bg-white rounded-full p-1"
            >
              <Youtube />
              <span className="sr-only">Youtube page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 bg-white rounded-full p-1"
            >
              <Instagram />
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
