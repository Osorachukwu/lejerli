import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

<DropdownMenu.Root>
<DropdownMenu.Trigger className="px-1 py-2 rounded border flex gap-2">
<p>Open</p>
<ChevronDown />
</DropdownMenu.Trigger>
<DropdownMenu.Content className="bg-white shadow-md rounded p-2 ">
<DropdownMenu.Item className="hover:bg-gray-100 p-1 focus:outline-none">
Item 1
</DropdownMenu.Item>
<DropdownMenu.Item className="hover:bg-gray-100 p-1 focus:outline-none">
Item 2
</DropdownMenu.Item>
<DropdownMenu.Item className="hover:bg-gray-100 p-1 focus:outline-none">
Item 3
</DropdownMenu.Item>
</DropdownMenu.Content>
</DropdownMenu.Root>

