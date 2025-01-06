import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Link } from "lucide-react";

export default function ConnectWallet() {
  return (
    <section className="h-screen absolute right-0 top-0 py-2">
      <div className="h-full shadow-lg bg-white rounded-lg p-4 w-80">
        <p className="font-bold mb-10">Connect Wallet</p>
        <div className="mb-8 space-y-2">
            <p>Exchange</p>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="w-full flex justify-between items-center gap-8 px-1 py-2 font-medium rounded-lg border">
               <p className="font-normal">Select an exchange</p>
                <ChevronDown size={16} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white p-2 rounded-md shadow-xl space-y-2 z-50">
              <DropdownMenu.Item>Profile</DropdownMenu.Item>

              <DropdownMenu.Item>Billing</DropdownMenu.Item>

              <DropdownMenu.Item>Team</DropdownMenu.Item>

              <DropdownMenu.Item>Subscription</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="waller"
              className="block mb-2 text-gray-900"
            >
              Your email
            </label>
            <input
              type="text"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Input Wallet Address"
              required
            />
          </div>
        </form>
        <button
          type="button"
          className="text-white bg-secondaryColor hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center gap-2"
        >
          <Link className="h-5" />
          Connect Wallet
        </button>
      </div>
    </section>
  );
}
