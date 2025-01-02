import React from "react";
import sheild from "@/assets/icons/shield.svg";
import btcIcon from "@/assets/icons/btc.svg";
import { ArrowUp, ArrowDown, ChevronDown } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";


export default function RecentTransactions() {
  let recentTransationsData = [
    {
      walletLogo: sheild,
      walletTitle: "Trust Wallet",
      //   statusIcon: ArrowUp,
      statusTitle: "Withdrawal",
      tokenIcon: btcIcon,
      tokenTitle: "-0.0017901 BTC",
      dateAndTime: "Dec 12, 2024 11:25 AM",
    },
    {
      walletLogo: sheild,
      walletTitle: "Trust Wallet",
      //   statusIcon: ArrowUp,
      statusTitle: "Deposit",
      tokenIcon: btcIcon,
      tokenTitle: "-0.0017901 BTC",
      dateAndTime: "Dec 12, 2024 11:25 AM",
    },
    {
      walletLogo: sheild,
      walletTitle: "Trust Wallet",
      //   statusIcon: ArrowUp,
      statusTitle: "Withdrawal",
      tokenIcon: btcIcon,
      tokenTitle: "-0.0017901 BTC",
      dateAndTime: "Dec 12, 2024 11:25 AM",
    },
    {
      walletLogo: sheild,
      walletTitle: "Trust Wallet",
      //   statusIcon: ArrowUp,
      statusTitle: "Deposit",
      tokenIcon: btcIcon,
      tokenTitle: "-0.0017901 BTC",
      dateAndTime: "Dec 12, 2024 11:25 AM",
    },
    {
      walletLogo: sheild,
      walletTitle: "Trust Wallet",
      //   statusIcon: ArrowUp,
      statusTitle: "Withdrawal",
      tokenIcon: btcIcon,
      tokenTitle: "-0.0017901 BTC",
      dateAndTime: "Dec 12, 2024 11:25 AM",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <p className="font-bold">Recent Transaction</p>
        <div className="flex gap-6">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2.5 font-medium rounded-lg border">
                All Time
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-customBoxShadow px-3 py-2 rounded-lg space-y-2">
              <DropdownMenu.Item>
Per Day</DropdownMenu.Item>
              <DropdownMenu.Item>
Last Week</DropdownMenu.Item>
              <DropdownMenu.Item>
Last Month</DropdownMenu.Item>
              <DropdownMenu.Item>
Last 6 Months</DropdownMenu.Item>
              <DropdownMenu.Item>
Last Year</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2.5 font-medium rounded-lg border">
                All Transactions
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-customBoxShadow px-3 py-2 rounded-lg space-y-2">
              <DropdownMenu.Item>
Incoming</DropdownMenu.Item>
              <DropdownMenu.Item>
Outgoing</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
      <div className="border rounded-lg shadow-xl">
        <div className="bg-slate-200 px-5 py-3 font-bold grid grid-cols-4">
          <p>Wallet</p>
          <p>Service</p>
          <p>Token</p>
          <p>Date & Time</p>
        </div>
        <div className="divide-y-2">
          {recentTransationsData.map((transaction, i) => (
            <div key={i} className="grid grid-cols-4">
              <div className="px-5 py-3 flex items-center gap-1">
                <img src={transaction.walletLogo} alt="" />
                <p>{transaction.walletTitle}</p>
              </div>
              <div className="flex items-center gap-1">
                {transaction.statusTitle === "Withdrawal" ? (
                  <ArrowUp className="text-red-600" />
                ) : (
                  <ArrowDown className="text-blue-600" />
                )}
                <p>{transaction.statusTitle}</p>
              </div>
              <div className="flex items-center gap-1">
                <img src={btcIcon} alt="" />
                <p>-0.0017901 BTC</p>
              </div>
              <p>Dec 12, 2024 11:25 AM</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
