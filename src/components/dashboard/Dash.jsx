import React from "react";
import allAssets from "@/assets/icons/all-assets.svg";
import trustWallet from "@/assets/icons/trust-wallet.svg";
import linkIconBlack from '@/assets/icons/link-icon-black.svg'
import { ChevronDown, Search } from "lucide-react";
import ConnectWalletBtn from "../ConnectWalletBtn";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Dash() {
  return (
    <div>
      {/* SEARCH */}
      <div className="flex justify-end items-center border-b h-16 mb-5 px-3">
        <form className="max-w-md ">
          {/* <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label> */}
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center mb-5 mx-3">
        <div>
          <p className="font-bold">Dashboard</p>
          <div className="flex gap-1 items-center text-xs">
            <img src={linkIconBlack} alt="" className="h-3 w-3" />
            <p>1 address connected</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2.5 font-medium rounded-lg border">
                <div className="flex items-center gap-2">
                  <img src={allAssets} alt="alt" /> All Assets
                </div>
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
Profile</DropdownMenu.Item>
              <DropdownMenu.Item>
Billing</DropdownMenu.Item>
              <DropdownMenu.Item>
Team</DropdownMenu.Item>
              <DropdownMenu.Item>
Subscription</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2.5 font-medium rounded-lg border">
                <div className="flex items-center gap-2">
                  <img src={trustWallet} alt="alt" /> Trust Wallet
                </div>
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
Profile</DropdownMenu.Item>
              <DropdownMenu.Item>
Billing</DropdownMenu.Item>
              <DropdownMenu.Item>
Team</DropdownMenu.Item>
              <DropdownMenu.Item>
Subscription</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          {/* Put btn */}
          <ConnectWalletBtn />
        </div>
      </div>
    </div>
  );
}
