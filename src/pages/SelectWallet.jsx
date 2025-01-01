import React, { useState } from "react";
import companyLogo from "../assets/company-logo.svg";
import SelectWalletComponent from "../components/select-wallet/SelectWalletComponent";
import ImportWallet from "../components/select-wallet/ImportWallet";
import { Link } from "react-router-dom";

export default function SelectWallet() {
  const [switchComponentTwo, setswitchComponentTwo] = useState(false);
  const handleSwitchTwo = () => {
    setswitchComponentTwo(!switchComponentTwo);
  };
  console.log(switchComponentTwo);

  return (
    <section
      className={`bg-primaryColor p-4 lg:p-10 ${
        switchComponentTwo && "md:h-screen"
      }`}
    >
      <div
        className={`bg-white p-5 lg:p-10 rounded-lg ${
          switchComponentTwo && "h-full"
        }`}
      >
        <Link to="/">
          <img src={companyLogo} alt="" className="mb-10" />
        </Link>
        {/*💥 Most popular and All */}
        {switchComponentTwo ? (
          <ImportWallet />
        ) : (
          <SelectWalletComponent handleSwitchTwo={handleSwitchTwo} />
        )}
      </div>
    </section>
  );
}
