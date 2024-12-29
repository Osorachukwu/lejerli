import React, { useState } from "react";
import lejerliLogo from "../../assets/company-logo.svg";
import NavList from "./NavList";
import ConnectWalletBtn from "../ConnectWalletBtn";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [toogle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toogle);
  };
  return (
    <div className="relative w-full">
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="flex justify-center py-4">
          <nav className="flex gap-8 items-center border rounded-lg p-2 shadow-xl">
            <img src={lejerliLogo} alt="Company logo" />
            <NavList styleProp="space-x-8" />
            <ConnectWalletBtn />
          </nav>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden w-screen absolute shadow-2xl bg-white">
        <nav>
          <div className="flex justify-between px-5 py-3">
            <img src={lejerliLogo} alt="Company logo" />
            <button onClick={handleToggle}>
              <Menu />
            </button>
          </div>
          <div className="">
            {toogle && (
              <div className="h-screen space-y-8 px-5 mt-5">
                <NavList styleProp="flex flex-col gap-4 w-full text-lg" />
                <ConnectWalletBtn />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}