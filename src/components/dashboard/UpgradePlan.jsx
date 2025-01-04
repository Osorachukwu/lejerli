import { ArrowDownToLine, Zap } from "lucide-react";
import React from "react";
import dartIcon from '../../assets/dart-icon.png'

export default function UpgradePlan() {
  return (
    <div className="text-xs space-y-2 mb-3 bg-purple-100 rounded-lg p-3">
      <div className="flex gap-2 ">
        <div>
          <p className="font-bold text-lg">I4 days free plan</p>
          <p>You have I3 days left</p>
        </div>
        <div>
         <img src={dartIcon} alt="" className="min-w-5"/>
        </div>

      </div>
      {/* Progress bar 👇 */}
      <div className=" bg-blue-200 rounded-lg">
        <div className="bg-secondaryColor h-2 w-[70%] rounded-lg"></div>
      </div>
      <button
        type="button"
        className="w-full flex justify-center py-2 items-center text-secondaryColor hover:bg-gray-100 hover:text-secondaryColor border border-secondaryColor focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center me-2"
      >
        <Zap />
        Upgrade Paln
      </button>
    </div>
  );
}
