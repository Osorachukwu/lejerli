import React, { useState } from "react";

export default function EnterOTP({}) {
  const [otpValue, setOtpValue] =useState("")
  let handleConfirmOTP = () => {
    if (otpValue === "1234") {
      alert("OTP is correct");
    } else {
      alert("OTP is incorrect");
    }
  };
  return (
    <div class="max-w-md border absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
      <form class="bg-white shadow-customBoxShadow rounded px-8 py-6">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="otp">
            Verify OTP:
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otp"
            type="text"
            placeholder="Enter OTP"
            value={otpValue}
            onChange={(e)=> setOtpValue(e.target.value)}
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-secondaryColor text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleConfirmOTP}
          >
            Verify
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-secondaryColor"
            href="#"
          >
            Resend OTP
          </a>
        </div>
      </form>
    </div>
  );
}
