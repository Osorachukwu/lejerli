import React, { useState } from "react";
import companyLogo from "@/assets/company-logo-white.svg";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Onboarding from "../components/onboarding/Onboarding";
import CreateAccountComponent from "../components/onboarding/CreateAccountComponent";
import { Link } from "react-router-dom";
import btcBg from '../assets/btc-bg.svg'
// import googleLogo from "@/assets/Google_Icons.webp";
// import Onboarding from "@/components/onboarding/Onboarding";

export default function CreateAccount() {
  const [switchComponent, setswitchComponent] = useState(false);
  const handleSwitch = () => {
    setswitchComponent(!switchComponent);
  };
  // console.log(switchComponent);
  return (
    <section className="bg-primaryColor text-white lg:h-screen p-4 lg:p-16 relative">
      {/* bg-image */}
      <img src={btcBg} alt="" className="absolute -z-0 opacity-70"/>
      <div className="h-full flex flex-col lg:flex-row">
        {/* col 1 */}
        <div className="flex flex-col justify-between w-full lg:w-1/3 mb-8 lg:mb-0">
          <div>
            <div className="mb-10">
              <Link to="/">
                <img src={companyLogo} alt="Lejerli logo" />
              </Link>
            </div>
            <div className="px-4 lg:px-8">
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
                  socialMediaIcon: <Instagram className="text-purple-600" />,
                  socialMediaUrl: "",
                },
                {
                  socialMediaIcon: <Facebook className="text-purple-600" />,
                  socialMediaUrl: "",
                },
                {
                  socialMediaIcon: <Twitter className="text-purple-600" />,
                  socialMediaUrl: "",
                },
                {
                  socialMediaIcon: <Youtube className="text-purple-600" />,
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
            <span className="text-sm text-white text-center lg:text-left dark:text-gray-400">
              ©
              <a href="https://flowbite.com/" className="hover:underline">
                Lejerli
              </a>
              2024
            </span>
          </footer>
        </div>
        {/* col 2 */}
        {/* Moving from the create account component to the onbordeing 1 based on the state above💥 */}
        <div className="w-full lg:w-2/3 bg-white text-black rounded-lg p-8 lg:p-20 z-50">
          {switchComponent ? (
            <Onboarding />
          ) : (
            <CreateAccountComponent handleSwitch={handleSwitch} />
          )}
        </div>
        <footer className="mt-8 lg:hidden">
          <div className="flex gap-4 mb-4 justify-center lg:justify-start">
            {[
              {
                socialMediaIcon: <Instagram className="text-purple-600" />,
                socialMediaUrl: "",
              },
              {
                socialMediaIcon: <Facebook className="text-purple-600" />,
                socialMediaUrl: "",
              },
              {
                socialMediaIcon: <Twitter className="text-purple-600" />,
                socialMediaUrl: "",
              },
              {
                socialMediaIcon: <Youtube className="text-purple-600" />,
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
          <div className="text-sm text-white text-center dark:text-gray-400">
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
