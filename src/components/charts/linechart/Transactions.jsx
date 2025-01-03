import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Transactions() {
  return (
    <div className="m-2">
      <div className="flex items-center justify-between">
        <p className="font-bold">Transactions</p>
        <div className="space-x-3">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2 font-medium rounded-lg border">
                All Assets
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-customBoxShadow px-3 py-2 rounded-lg space-y-2 z-50">
              <DropdownMenu.Item>Profile</DropdownMenu.Item>
              <DropdownMenu.Item>Billing</DropdownMenu.Item>
              <DropdownMenu.Item>Team</DropdownMenu.Item>
              <DropdownMenu.Item>Subscription</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2 font-medium rounded-lg border">
                All Wallets
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-customBoxShadow px-3 py-2 rounded-lg space-y-2 z-50">
              <DropdownMenu.Item>Profile</DropdownMenu.Item>

              <DropdownMenu.Item>Billing</DropdownMenu.Item>

              <DropdownMenu.Item>Team</DropdownMenu.Item>

              <DropdownMenu.Item>Subscription</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2 font-medium rounded-lg border">
                Past Year
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-customBoxShadow px-3 py-2 rounded-lg space-y-2 z-50">
              <DropdownMenu.Item>Profile</DropdownMenu.Item>

              <DropdownMenu.Item>Billing</DropdownMenu.Item>

              <DropdownMenu.Item>Team</DropdownMenu.Item>

              <DropdownMenu.Item>Subscription</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
}
