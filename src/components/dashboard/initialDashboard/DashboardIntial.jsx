import { Link } from "lucide-react";
import React, { useState } from "react";
import notePads from "../../../assets/undraw_no_data_re_kwbl.png";
import ConnectWallet from "./ConnectWallet";

export default function DashboardIntial() {
  // State to manage the visibility of the ConnectWallet component
  const [isWalletVisible, setWalletVisible] = useState(false);

  const handleConnectWallet = () => {
    setWalletVisible(true); // Show the ConnectWallet component
  };

  const closeWallet = () => {
    setWalletVisible(false); // Hide the ConnectWallet component
  };

  const handleClickOutside = (event) => {
    if (event.target.id === "modal-overlay") {
      closeWallet();
    }
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {isWalletVisible && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div
            className=""
            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
          >
            <ConnectWallet />
          </div>
        </div>
      )}
      {/* Connect Wallet Modal */}

      {/* Head */}
      <div className="flex justify-between border-b h-16 mb-5 px-3">
        <div className="flex">
          <button
            type="button"
            className="h-[100%] py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:border-b-secondaryColor focus:border-b focus:text-secondaryColor bg-white hover:text-secondaryColor focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            All
          </button>
          <button
            type="button"
            className="h-[100%] py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:border-b-secondaryColor focus:border-b focus:text-secondaryColor bg-white hover:text-secondaryColor focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Analyitics
          </button>
          <button
            type="button"
            className="h-[100%] py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:border-b-secondaryColor focus:border-b focus:text-blue-500 bg-white hover:text-secondaryColor hover:border-b-secondaryColor focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Report
          </button>
        </div>
        {/* Searchbar */}
        <div className="flex items-center">
          <form className="me-2">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>

      {/* Dashboard and connect wallet button */}
      <div className="flex justify-between mx-3">
        <p className="font-bold">Dashboard</p>
        <button
          type="button"
          onClick={handleConnectWallet}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center gap-2"
        >
          <Link className="h-5" />
          Connect Wallet
        </button>
      </div>

      {/* Body */}
      <div className="flex flex-col items-center gap-4 pt-5">
        <div className="text-center space-y-4">
          <p className="text-3xl font-bold">Welcome Jeffery 👋</p>
          <p>Connect a wallet to get started</p>
        </div>
        <div>
          <img src={notePads} alt="Notepads illustration" />
        </div>
      </div>
    </div>
  );
}
