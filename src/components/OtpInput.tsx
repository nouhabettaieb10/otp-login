import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ length = 4, onOtpSubmit = (e: any) => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputOtpRefs: any = useRef([]);
  useEffect(() => {
    if (inputOtpRefs.current[0]) inputOtpRefs.current[0].focus();
  }, []);
  const handleChange = (e: any, index: any) => {
    const value = e.target.value;
    console.log(value);
    if (isNaN(value)) return;
    const newopt = [...otp];
    newopt[index] = value.substring(value.length - 1);
    setOtp(newopt);
    const otpcombined = newopt.join("");
    if (otpcombined.length === length) onOtpSubmit(otpcombined);
    //handle move to next field
    if (value && inputOtpRefs.current[index + 1] && index < length - 1) {
      inputOtpRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (e: any, index: any) => {
    if (
      (e.key =
        "BackSpace" &&
        index > 0 &&
        inputOtpRefs.current[index - 1] &&
        !otp[index])
    ) {
      inputOtpRefs.current[index - 1].focus();
    }
  };
  return (
    <div>
      {otp.map((value: string, index: number) => {
        return (
          <input
            value={value}
            type="text"
            key={index}
            ref={(input: any) => (inputOtpRefs.current[index] = input)}
            style={{
              width: "50px",
              height: "50px",
              textAlign: "center",
              margin: "5px",
            }}
            onChange={(e: any) => handleChange(e, index)}
            onClick={() => {}}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
