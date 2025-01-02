"use client";
import React, { useState } from "react";
import lejerliLogo from "@/assets/company-logo.svg";
import trustWallet from "@/assets/icons/trust-wallet.svg";
import RecentTransactions from "./RecentTransactions";
import SwitchTheme from "../SwitchTheme";
import TotalPortfolioProfitLoss from "./TotalPortfolioProfitLoss";
import Dash from "./Dash";
import Accounts from "./dashboardSideBar/Accounts";
import UserProfile from "./UserProfile";
import UpgradePlan from "./UpgradePlan";
import { Link } from "react-router-dom";
import iconn from "../../assets/Icons.png";
import Reports from "./dashboardSideBar/Reports";
import Settings from "./dashboardSideBar/Settings";
import HelpAndSupport from "./dashboardSideBar/HelpAndSupport";

export default function DashBoard() {
  // State to track the active view
  const [activeView, setActiveView] = useState("DashBoard");

  // Function to handle button clicks
  const handleButtonClick = (btnItem) => {
    setActiveView(btnItem.btnTitle); // Set active view based on button title
  };
  return (
    <section className="border rounded-lg shadow-xl hidden md:block">
      <div className="h-screen flex">
        {/* First col💥 */}
        <div className="w-1/5 border-r flex flex-col">
          <div className="flex justify-between items-center gap-5 px-8 h-16">
            <Link to="/">
              <img src={lejerliLogo} alt="Legeril Logo" />
            </Link>
            <img src={iconn} alt=""/>
          </div>
          {/* Dashbord main Buttons */}
          <div className="h-full px-5 py-2 border-t flex flex-col justify-between">
            <div className="space-y-2 mb-4">
              {[
                { id: 1, btnIcon: trustWallet, btnTitle: "DashBoard" },
                { id: 2, btnIcon: trustWallet, btnTitle: "Accounts" },
                { id: 3, btnIcon: trustWallet, btnTitle: "Analytics" },
                { id: 4, btnIcon: trustWallet, btnTitle: "Reports" },
                { id: 5, btnIcon: trustWallet, btnTitle: "Settings" },
                { id: 6, btnIcon: trustWallet, btnTitle: "Help & Support" },
              ].map((btnItem, i) => (
                <button
                  key={i}
                  className="py-2 px-2 w-full text-sm md:text-base rounded-lg flex items-center gap-1 whitespace-nowrap hover:bg-gray-300"
                  onClick={() => handleButtonClick(btnItem)}
                >
                  <img
                    src={btnItem.btnIcon}
                    alt="Dashboard button"
                    className="h-5"
                  />{" "}
                  {btnItem.btnTitle}
                </button>
              ))}
            </div>
            <div>
              <SwitchTheme />
              <UpgradePlan />
              <UserProfile />
            </div>
          </div>
        </div>
        {/* Second col 💥 */}
        <div className="w-4/5">
          {/* Conditional rendering of active view */}
          {activeView === "DashBoard" && (
            <>
              <Dash />
              <div className="mx-3">
                <TotalPortfolioProfitLoss />
                <RecentTransactions />
              </div>
            </>
          )}
          {activeView === "Accounts" && <Accounts />}
          {activeView === "Analytics" && <Analytics />}
          {activeView === "Reports" && <Reports />}
          {activeView === "Settings" && <Settings />}
          {activeView === "Help & Support" && <HelpAndSupport />}
        </div>
      </div>
    </section>
  );
}
