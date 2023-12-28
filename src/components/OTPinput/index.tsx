import React, { useEffect } from "react";

interface OTPInputType {
  megaIndex: number;
  inputRef: any;
  onChange: any;
  onSelect: any;
  value: string;
  disabled: boolean;
}

const OTPInput = ({
  megaIndex,
  inputRef,
  onChange,
  onSelect,
  value,
  disabled,
}: OTPInputType) => {
  useEffect(() => {
    if (!disabled) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  });
  return (
    <div className="mega-input-field-base1" key={megaIndex}>
      <input
        className="text68 border-none text-center"
        name="OTP-value"
        key={megaIndex}
        ref={inputRef}
        type="number"
        id={`box${megaIndex}-1`}
        // placeholder="0"
        onChange={(e) => {
          const { value } = e.target;
          console.log("onChange input", megaIndex, "; value : ", value);
          onChange(megaIndex, value);
        }}
        onSelect={() => {
          console.log("onclick/select input", megaIndex);
          onSelect(megaIndex);
        }}
        value={value}
        minLength={1}
        maxLength={1}
        disabled={disabled}
      />
    </div>
  );
};

export default OTPInput;
