import React from "react";
import linkIcon from '@/assets/icons/link-icon.svg'
// // import Image //from "next/image";
 //from "next/image";

export default function ConnectWalletBtn() {
  return (
    <button
      type="button"
      className="text-white bg-secondaryColor hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center gap-2"
    >
     <img src={linkIcon} alt="link icon" />
     Connect Wallet
    </button>
  );
}
