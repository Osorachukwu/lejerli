import React from "react";
import { ChevronDown, Info, ArrowLeft, Earth } from "lucide-react";
import allAssets from "@/assets/icons/all-assets.svg";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import earthIcon from "../../assets/icons/earth-icon.svg";
import CountryDropdown from "../dashboard/initialDashboard/CountryDropdown";
import CurrencyDropdown from "../dashboard/initialDashboard/CurrencyDropdown";

export default function Onboarding() {
  return (
    <div>
      <div className="space-y-2 mb-8">
        <p className="text-3xl font-semibold">Let's create your account</p>
        <p className="text-xl">
          Signup for Lejerli and manage your protfolio easily
        </p>
      </div>
      <span className="flex gap-2 border p-2 rounded-lg text-sm border-secondaryColor text-secondaryColor">
        <Info className="h-5 w-5 text-secondaryColor" />
        <p>
          This allows us to Tailor your experience better and help you fully
          utilize our plateform
        </p>
      </span>
      <div className="space-y-5 my-5">
        <CountryDropdown />
        <CurrencyDropdown />
      </div>
      {/* Buttons */}
      <div className="flex">
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 flex items-center font-semibold"
        >
          <ArrowLeft />
          Back
        </button>
        <Link to="/select-wallet">
          <button
            // to="import-wallet"
            type="button"
            className="text-white bg-primaryColor hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-semibold"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
