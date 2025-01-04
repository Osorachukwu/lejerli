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
import Analytics from "./dashboardSideBar/Analytics";
import sideBarIconOne from '../../assets/sidebar-icons-1.svg'
import sideBarIconTwo from '../../assets/sidebar-icons-2.svg'
import sideBarIconThree from '../../assets/sidebar-icons-3.svg'
import sideBarIconFour from '../../assets/sidebar-icons-4.svg'
import sideBarIconFive from '../../assets/sidebar-icons-5.svg'

export default function DashBoard() {
  const [activeView, setActiveView] = useState("DashBoard");

  const handleButtonClick = (btnItem) => {
    setActiveView(btnItem.btnTitle);
  };

  return (
    <section className="shadow-xl h-screen overflow-hidden">
      <div className="flex h-full">
        {/* First col💥 */}
        <div className="w-1/5 h-full border-r flex flex-col fixed top-0 left-0 bg-white overflow-y-auto">
          <div className="flex justify-between items-center gap-5 px-8 h-16 border-b">
            <Link to="/">
              <img src={lejerliLogo} alt="Legeril Logo" />
            </Link>
            <img src={iconn} alt="" />
          </div>
          {/* Dashboard main Buttons */}
          <div className="h-full px-5 py-2">
            <div className="space-y-2 mb-32">
              {[
                { id: 1, btnIcon: sideBarIconOne, btnTitle: "DashBoard" },
                { id: 2, btnIcon: trustWallet, btnTitle: "Accounts" },
                { id: 3, btnIcon: sideBarIconTwo, btnTitle: "Analytics" },
                { id: 4, btnIcon: sideBarIconThree, btnTitle: "Reports" },
                { id: 5, btnIcon: sideBarIconFour, btnTitle: "Settings" },
                { id: 6, btnIcon: sideBarIconFive, btnTitle: "Help & Support" },
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
        <div className="w-4/5 ml-auto h-full overflow-y-auto pb-10">
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
