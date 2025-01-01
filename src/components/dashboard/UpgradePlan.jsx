import { ArrowDownToLine, Zap } from "lucide-react";
import React from "react";

export default function UpgradePlan() {
  return (
    <div className="text-xs space-y-2 mb-3">
      <div>
        <p className="font-bold">I4 days free plan</p>
        <p>You have I3 days left</p>
      </div>
      {/* Progress bar 👇 */}
      <div className=" bg-blue-200 rounded-lg">
        <div className="bg-secondaryColor h-2 w-[70%] rounded-lg"></div>
      </div>
      <button
        type="button"
        className="w-full flex justify-center py-2 items-center text-secondaryColor hover:bg-gray-100 hover:text-secondaryColor border border-secondaryColor focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2"
      >
        <Zap />
        Upgrade Paln
      </button>
    </div>
  );
}
