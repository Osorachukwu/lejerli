import React from "react";
// import Link from "next/link";
import { ChevronDown } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function NavList({ styleProp }) {
  return (
    <div className={`${styleProp}`}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="focus:outline-none">
          <div className="flex justify-between items-center gap-2 px-1 py-2.5 font-medium rounded-lg">
            All Time
            <ChevronDown size={16} />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="bg-white shadow-lg px-3 py-2 rounded-lg space-y-2">
          <DropdownMenu.Item className="focus:outline-none">Profile</DropdownMenu.Item>
          <DropdownMenu.Item className="focus:outline-none">Billing</DropdownMenu.Item>
          <DropdownMenu.Item className="focus:outline-none">Team</DropdownMenu.Item>
          <DropdownMenu.Item className="focus:outline-none">Subscription</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      

      <a>Intergrations</a>
      <a>Price</a>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="focus:outline-none">
          <div className="flex justify-between items-center gap-2 px-1 py-2.5 font-medium rounded-lg">
            All Time
            <ChevronDown size={16} />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className="bg-white shadow-lg px-3 py-2 rounded-lg space-y-2">
          <DropdownMenu.Item className="focus:outline-none">Profile</DropdownMenu.Item>
          <DropdownMenu.Item className="focus:outline-none">Billing</DropdownMenu.Item>
          <DropdownMenu.Item className="focus:outline-none">Team</DropdownMenu.Item>
          <DropdownMenu.Item className="focus:outline-none">Subscription</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
