import React from "react";
// import Image //from "next/image";
 //from "next/image";
import portfolioBalance from "@/assets/icons/portfolio-balance.svg";
import totalProfit from "@/assets/icons/total-profit.svg";
import totalLoss from "@/assets/icons/total-loss.svg";

export default function TotalPortfolioProfitLoss() {
  return (
    <div className="grid grid-cols-3 gap-3 p-2">
      <div className="border flex items-center gap-2 p-4 rounded-lg">
        <img src={portfolioBalance} alt="Portfolio Balance" />
        <div>
          <p>Total Portfolio Balance</p>
          <p>$345,000</p>
        </div>
      </div>
      <div className="border flex items-center gap-2 p-4 rounded-lg">
        <img src={totalProfit} alt="Portfolio Balance" />
        <div>
          <p>Total Profit</p>
          <p>$45,000</p>
        </div>
      </div>
      <div className="border flex items-center gap-2 p-4 rounded-lg">
        <img src={totalLoss} alt="Portfolio Balance" />
        <div>
          <p>Total Loss</p>
          <p>$5,000</p>
        </div>
      </div>
    </div>
  );
}
