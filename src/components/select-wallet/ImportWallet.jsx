import React from "react";
// import Image //from "next/image";
//from "next/image";
import { ArrowDownToLine, ChevronDown, Info, X } from "lucide-react";
import bitcoinLogo from "@/assets/assets-logo/bitcoin-logo.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function ImportWallet() {
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
                htmlFor="blockchain"
                className="block mb-2 font-medium text-gray-900"
              >
                Blockchain Address
              </label>
              <input
                type=""
                id="blockchain"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
                placeholder="Enter blockchain address"
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
              <DropdownMenu.Content
                className="bg-white shadow-customBoxShadow px-3 py-2 rounded-lg space-y-2"
              >
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
