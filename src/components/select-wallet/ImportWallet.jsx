import React, { useState } from "react";
import { ArrowDownToLine, ChevronDown, Info, X } from "lucide-react";
import bitcoinLogo from "@/assets/assets-logo/bitcoin-logo.svg";
import axios from "axios";
import $ from 'jquery';
// import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function ImportWallet({ selectedExchange }) {
  let exchange = "Kucoin2";
  const [secret, setSecret] = useState("");
  const [key, setKey] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const handleConnectWallet = async () => {
    if (!secret || !key || !passphrase || !secret) {
      setMessage("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const { status, data } = await axios.post(
        "https://api.lejerli.online/api/v1/exchange",
        {
          exchange,
          secret,
          key,
          passphrase
        }
      );

      if (status === 201) {
        setMessage(data.message);
        setSecret("");
        setKeyAddress("");
        setPassphrase("");
      } else {
        setMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          setMessage(
            "Password is not complex enough. Please use a mix of uppercase and lowercase letters, numbers, and special characters."
          );
        } else {
          setMessage(error.response.data.message || "An error occurred. Please try again later.");
        }
      } else {
        setMessage("An error occurred. Please check your internet connection.");
      }
    } finally {
      setLoading(false);
    }
  };

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
            <p>
              Please provide your public address; it doesn't give us the ability
              to remove your funds.
            </p>
          </div>
          <p className="text-xl">
            Lejerli will fetch all deposit and withdrawal transactions from the
            wallet public, blockchain, or receiving address. We support all
            major blockchain imports. Signup for Lejerli and manage your
            portfolio easily.
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
                <p>{selectedExchange} </p>
              </div>
              <button>
                <X />
              </button>
            </div>
          </div>
          <form className="mx-auto">
            <div className="mb-5">
              <label htmlFor="secret" className="block mb-2 font-medium text-gray-900">
                Secret
              </label>
              <input
                type="text"
                id="secret"
                placeholder="Enter Secret"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="wallet-key" className="block mb-2 font-medium text-gray-900">
                Key
              </label>
              <input
                type="text"
                id="wallet-key"
                placeholder="Enter Key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="passphrase" className="block mb-2 font-medium text-gray-900">
                Passphrase
              </label>
              <input
                type="text"
                id="passphrase"
                placeholder="Enter Passphrase"
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              />
            </div>
          </form>
          <div className="flex justify-end items-center">
            <button
              type="button"
              className="px-5 py-2.5 inline-flex items-center text-white bg-[#8041FF] hover:bg-gray-100 hover:text-[#8041FF] border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center me-2"
              onClick={handleConnectWallet}
              disabled={loading}
            >
              <ArrowDownToLine />
              {loading ? "Loading..." : "Import CSV File"}
            </button>
            <button
              type="button"
              className="px-5 py-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 me-2 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Cancel
            </button>
          </div>
          {message && <p className="text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
}
