import React from "react";
import { ChevronDown } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Portfolio() {
  return (
    <div className="m-4">
      <div className="flex justify-between items-center">
        <p>Portfolio</p>
        <div className="space-x-3">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2.5 font-medium rounded-lg border">
                All Assets
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
Profile</DropdownMenu.Item>
              <DropdownMenu.Item>
Billing</DropdownMenu.Item>
              <DropdownMenu.Item>
Team</DropdownMenu.Item>
              <DropdownMenu.Item>
Subscription</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <div className="flex items-center gap-8 px-1 py-2.5 font-medium rounded-lg border">
                All Assets
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item>
Profile</DropdownMenu.Item>


              <DropdownMenu.Item>
Billing</DropdownMenu.Item>


              <DropdownMenu.Item>
Team</DropdownMenu.Item>


              <DropdownMenu.Item>
Subscription</DropdownMenu.Item>


            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
}
