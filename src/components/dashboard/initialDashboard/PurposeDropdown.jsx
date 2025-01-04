import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function PurposeDropdown() {
  return (
    <div>
      <p className="text-start font-medium">Purpose</p>
      <DropdownMenu.Root>
            <DropdownMenu.Trigger className="focus:outline-none border rounded-lg w-full">
              <div className="flex justify-between items-center gap-8 px-1 py-2 rounded-lg border">
                What are you primarily using this software for
                <ChevronDown size={16} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white shadow-customBoxShadow px-3 py-2 rounded-lg space-y-2 z-50">
              <DropdownMenu.Item>Profit and Loss Estimation</DropdownMenu.Item>
              <DropdownMenu.Item>Tax report Generation</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
    </div>
  );
}
