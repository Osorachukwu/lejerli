import React from "react";
// import Image //from "next/image";
//from "next/image";
import { ArrowDownToLine, ChevronDown, Info, X } from "lucide-react";
import bitcoinLogo from "@/assets/assets-logo/bitcoin-logo.svg";

export default function ImportWallet() {
  return (
    <div className="flex gap-10">
      {/* Col 1 */}
      <div className="w-1/2 space-y-8">
        <div className="flex items-center gap-4">
          <img src={bitcoinLogo} alt="" />
          <p>Bitcoin</p>
        </div>
        <p className="text-3xl font-semibold">
          Adding Your Bitcoin Wallet Address
        </p>
        <div className="flex gap-2 border border-[#8041FF] text-[#8041FF] bg-[#8041ff25] rounded-lg p-1">
          <Info />
          <p>
            Please provide your public address it doesn't give us the ability to
            remove your funds
          </p>
        </div>
        <p className="text-xl">
          Lejerli will fetch all deposit and withdrawal transactions from the
          wallet public, blockchain, or receiving address. We support all major
          blockchain imports. Signup for Lejerli and manage your protfolio
          easily
        </p>
      </div>
      {/* Col 2 */}
      <div className="w-1/2 space-y-8 pt-8">
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
        <form class="mx-auto">
          <div class="mb-5">
            <label
              for="blockchain"
              class="block mb-2 font-medium text-gray-900 dark:text-white"
            >
              Blockchain Address
            </label>
            <input
              type=""
              id="blockchain"
              class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              className="w-[100%] bg-green-400"
              style={{ width: "100%" }}
            >
              <DropdownMenu.Item>

                Profile Profile Profile Profile Profile
              </DropdownMenu.Item>


              <DropdownMenu.Item>
Billing</DropdownMenu.Item>


              <DropdownMenu.Item>
Team</DropdownMenu.Item>


              <DropdownMenu.Item>
Subscription</DropdownMenu.Item>


            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        {/* BTN's */}
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="px-5 py-2.5 inline-flex items-center text-white bg-[#8041FF] hover:bg-gray-100 hover:text-[#8041FF] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2"
          >
            <ArrowDownToLine />
            Import CSV File
          </button>
          <button
            type="button"
            className="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 me-2 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}