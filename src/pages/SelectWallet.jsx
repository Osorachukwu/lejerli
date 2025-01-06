import React, { useState } from "react";
import companyLogo from "../assets/company-logo.svg";
import SelectWalletComponent from "../components/select-wallet/SelectWalletComponent";
import ImportWallet from "../components/select-wallet/ImportWallet";
import { Link } from "react-router-dom";
import bitcoinLogo from "@/assets/assets-logo/bitcoin-logo.svg";
import ethLogo from "@/assets/assets-logo/eth-logo.svg";
import metamaskLogo from "@/assets/assets-logo/metamask-logo.svg";
import phantomLogo from "@/assets/assets-logo/phantom-logo.svg";
import binanceLogo from "@/assets/assets-logo/binance-logo.svg";
import ledgerLogo from "@/assets/assets-logo/ledger-logo.svg";
import coinbaseLogo from "@/assets/assets-logo/coinbase-logo.svg";
import trezorLogo from "@/assets/assets-logo/trezor-logo.svg";
import oneTradingLogo from "@/assets/assets-logo/onetrading-logo.svg";
import krakenLogo from "@/assets/assets-logo/kraken-logo.svg";
import kucoinLogo from "@/assets/assets-logo/kucoin-logo.svg";
import bitgetLogo from "@/assets/assets-logo/bitget-logo.svg";
import abraLogo from "@/assets/assets-logo/abra-logo.svg";
import { ArrowDownToLine } from "lucide-react";

export default function SelectWallet() {
  let walletOrExchangeData = [
    {
      id: 1,
      walletOrExchangeImage: bitcoinLogo,
      walletOrExchangeTile: "Bitcoin",
      walletOrExchangecategory: "",
    },
    {
      id: 2,
      walletOrExchangeImage: ethLogo,
      walletOrExchangeTile: "ETH Wallet",
      walletOrExchangecategory: "",
    },
    {
      id: 3,
      walletOrExchangeImage: metamaskLogo,
      walletOrExchangeTile: "MetaMask",
      walletOrExchangecategory: "",
    },
    {
      id: 4,
      walletOrExchangeImage: phantomLogo,
      walletOrExchangeTile: "Phantom",
      walletOrExchangecategory: "",
    },
    {
      id: 5,
      walletOrExchangeImage: binanceLogo,
      walletOrExchangeTile: "Binance",
      walletOrExchangecategory: "",
    },
    {
      id: 6,
      walletOrExchangeImage: ledgerLogo,
      walletOrExchangeTile: "Ledger",
      walletOrExchangecategory: "",
    },
    {
      id: 7,
      walletOrExchangeImage: coinbaseLogo,
      walletOrExchangeTile: "Coinbase",
      walletOrExchangecategory: "",
    },
    {
      id: 8,
      walletOrExchangeImage: trezorLogo,
      walletOrExchangeTile: "Trezor",
      walletOrExchangecategory: "",
    },
    {
      id: 9,
      walletOrExchangeImage: oneTradingLogo,
      walletOrExchangeTile: "One Trading",
      walletOrExchangecategory: "",
    },
    {
      id: 10,
      walletOrExchangeImage: krakenLogo,
      walletOrExchangeTile: "Kraken",
      walletOrExchangecategory: "",
    },
    {
      id: 11,
      walletOrExchangeImage: kucoinLogo,
      walletOrExchangeTile: "KuCoin",
      walletOrExchangecategory: "",
    },
    {
      id: 12,
      walletOrExchangeImage: bitgetLogo,
      walletOrExchangeTile: "Bitget",
      walletOrExchangecategory: "",
    },
  ];
  const [switchComponentTwo, setswitchComponentTwo] = useState(false);
  const [selectedExchange, setselectedExchange] =useState(null)
  const handleWalletImport = (id) => {
    // setswitchComponentTwo(!switchComponentTwo);
    setselectedExchange(id)
    if (id) {
      setswitchComponentTwo(!switchComponentTwo);
    }
    console.log(selectedExchange);
  };

  return (
    <section
      className={`bg-primaryColor p-4 lg:p-10 ${
        switchComponentTwo && "md:h-screen"
      }`}
    >
      <div
        className={`bg-white p-5 lg:p-10 rounded-lg ${
          switchComponentTwo && "h-full"
        }`}
      >
        <Link to="/">
          <img src={companyLogo} alt="" className="mb-10" />
        </Link>
        {/*💥 Most popular and All */}
        {switchComponentTwo ? (
          <ImportWallet selectedExchange={selectedExchange} />
        ) : (
          // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
          // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
          <div>
            <div className="mb-10 space-y-4 md:flex justify-between">
              <div>
                <p className="text-3xl font-semibold">
                  Let's create your account {selectedExchange}
                </p>
                <p className="text-xl">
                  Signup for Lejerli and manage your protfolio easily
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="px-5 py-2.5 inline-flex items-center text-black  hover:bg-gray-100 hover:text-secondaryColor border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center me-2"
                >
                  <ArrowDownToLine />
                  Import CSV File
                </button>
              </div>
            </div>
            {/* 💥 Search bar, All, Exchange, BNitcoin, Wallet */}
            <div className="flex flex-col md:flex-row items-center mb-4">
              <form className="me-2 max-w-sm md:w-1/4 ">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500"
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
                    className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Search for your exchange wallet or blockchain"
                    required
                  />
                </div>
              </form>
              <div className="space-y-2 md:space-y-0">
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:border-blue-500 focus:text-blue-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10  "
                >
                  All
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:border-blue-500 focus:text-blue-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
                >
                  Exchange
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:border-blue-500 focus:text-blue-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
                >
                  Bitchain
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:border-blue-500 focus:text-blue-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
                >
                  Wallet
                </button>
              </div>
            </div>

            {/* Most popular👇 */}
            <div className="mb-6">
              <p className="font-semibold mb-4 md:text-lg">Most Popular</p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {walletOrExchangeData.slice(0, 12).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 items-center border py-5 rounded-lg cursor-pointer"
                    onClick={() => handleWalletImport(item.walletOrExchangeTile)}
                  >
                    <img src={item.walletOrExchangeImage} alt="" />
                    <p>{item.walletOrExchangeTile}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* All👇 */}
            <div>
              <p className="font-semibold mb-4 md:text-lg">All</p>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {walletOrExchangeData.slice(0, 12).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 items-center border py-6 rounded-lg"
                  >
                    <img src={item.walletOrExchangeImage} alt="" />
                    <p>{item.walletOrExchangeTile}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
          // 💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥
        )}
      </div>
    </section>
  );
}
