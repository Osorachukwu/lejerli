import React from "react";
// import Image //from "next/image";
 //from "next/image";
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
      walletOrExchangeTile: "phantom",
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
  return (
    <div>
        {/* Most popular👇 */}
        <div className="mb-6">
          <p className="font-semibold mb-4">Most Popular</p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {walletOrExchangeData.slice(0, 12).map((item) => (
              <div key={item.id} className="flex flex-col gap-2 items-center border py-6 rounded-lg">
                <img src={item.walletOrExchangeImage} alt="" />
                <p>{item.walletOrExchangeTile}</p>
              </div>
            ))}
          </div>
        </div>
        {/* All👇 */}
        <div>
          <p className="font-semibold mb-4">All</p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {walletOrExchangeData.slice(0, 12).map((item) => (
              <div key={item.id} className="flex flex-col gap-2 items-center border py-6 rounded-lg">
                <img src={item.walletOrExchangeImage} alt="" />
                <p>{item.walletOrExchangeTile}</p>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}
