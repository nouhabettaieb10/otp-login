import React, { useState } from "react";
import OtpInput from "./OtpInput";

const LoginWithPhone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const handlePhoneNumber = (e: any) => {
    setPhoneNumber(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // phone validation
    const regex: any = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Invalid Phoine number");
      return;
    }
    setShowOtpInput(true);
  };
  const handleOptSubmit = (e: any) => {};
  return (
    <div>
      {!showOtpInput ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="set phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={handleOptSubmit} />
        </div>
      )}
    </div>
  );
};

export default LoginWithPhone;
