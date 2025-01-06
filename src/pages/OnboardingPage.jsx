import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Onboarding from "../components/onboarding/Onboarding";
import companyLogo from "@/assets/company-logo-white.svg";
import btcBg from "../assets/btc-bg.svg";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function OnboardingPage() {
  const [loginStatus, setLoginStatus] = useState(
    window.localStorage.getItem("loginStatus")
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (loginStatus === "false") {
      navigate("/signin");
    }
  }, []);

  const logOut = () => {
    window.localStorage.setItem("loginStatus", "false");
    window.localStorage.setItem("user", "");
    navigate("/signin");
  }

  return (
    <section className="bg-primaryColor text-white lg:h-screen p-4 lg:p-16 relative overflow-y-hidden">
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
                Welcome to Lejerli
              </p>
              <p className="text-xl">
                We are here to manage and help you grow your portfolio
              </p>
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
            <button className="ml-4" onClick={logOut}>Log out</button>

          </footer>
        </div>
        {/* col 2 */}
        {/* Moving from the create account component to the onbordeing 1 based on the state above💥 */}
        <div className="w-full lg:w-2/3 bg-white text-black rounded-lg p-8 lg:p- z- relative ">
          <Onboarding />
        </div>
      </div>
    </section>
  );
}
