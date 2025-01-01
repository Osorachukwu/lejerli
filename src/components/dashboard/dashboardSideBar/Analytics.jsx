import React from "react";
// import Image //from "next/image";
 //from "next/image";
import linkIconBlack from "@/assets/icons/link-icon-black.svg";
import ConnectWalletBtn from "../../ConnectWalletBtn";
import TotalPortfolioProfitLoss from "../TotalPortfolioProfitLoss";
import LineChart from "../../charts/linechart/LineChartComponent";
import PieChartComponent from "../../charts/piechart/PieChartComponent";
import VerticalBarChartComponent from "../../charts/barChart/BarChartComponent";

export default function Analytics() {
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <div>
          <p className="font-bold">Dashboard</p>
          <div className="flex gap-1 items-center text-xs">
            <img src={linkIconBlack} alt="" className="h-3 w-3" />
            <p>1 address connected</p>
          </div>
        </div>

        {/* Put btn */}
        <ConnectWalletBtn />
      </div>
      <LineChart />
      <TotalPortfolioProfitLoss />
      <div className="flex gap-4 px-2">
        <PieChartComponent />
        <VerticalBarChartComponent />
      </div>
    </div>
  );
}
