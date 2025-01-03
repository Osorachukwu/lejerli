import React from "react";
import linkIcon from '@/assets/icons/link-icon.svg'
// // import Image //from "next/image";
 //from "next/image";

export default function ConnectWalletBtn() {
  return (
    <button
      type="button"
      className="text-white bg-secondaryColor font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center gap-2"
    >
     <img src={linkIcon} alt="link icon" />
     Connect Wallet
    </button>
  );
}
