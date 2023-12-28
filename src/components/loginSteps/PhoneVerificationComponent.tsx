//import { useForm } from "react-hook-form";
import TimerContainer from "../time/TimerContainer";
import { useState, useEffect, createRef, useMemo } from "react";
import { server } from "@utils/server";
import OTPInput from "@components/OTPinput";

type StepType = {
  onChange: any;
  phone: string;
};

const PhoneVerificationComponent = ({ phone, onChange }: StepType) => {
    console.log("render PhoneVerificationComponent");
  // show 6 input
    const numberOfInputs = 6;
    const [inputRefsArray] = useState(() =>
        Array.from({ length: numberOfInputs }, () => createRef())
    );
    const [currentIndex, setCurrentIndex] = useState(0);
    let phoneNumber = phone as string;

    const [letters, setLetters] = useState(() =>
        Array.from({ length: numberOfInputs }, () => "")
    );

    const authenticateOTP = async (phoneNumber: string, inputOTP: string) => {
    await fetch(`${server}auth/authenticateOTP`, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        phoneNumber: phoneNumber.substring(1),
        inputOTP: inputOTP,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status == "success") {
          setTimeout(() => {
            onChange(3);
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    };
    const handleLetterChange = (letters: Array<string>) => {
    console.log("start handleLetterChange");

    //Check if inputRefsArray is inital state -> return
    if (inputRefsArray[0].current == null) {
      return;
    }
    //Check if there is any value at current index
    if (letters[currentIndex] == "") {
      return;
    }
    //Calculate NextIndex & get nextInput
    const nextIndex = currentIndex + 1;
    // const nextInput: any =
    //   inputRefsArray?.[nextIndex % numberOfInputs]?.current;
    //Update currentIndex
    setCurrentIndex(nextIndex % numberOfInputs);
    //Move cursor to nextInput
    // nextInput.focus();
    // nextInput.select();
    //Authenticate OTP if user finishes
    if (nextIndex === numberOfInputs) {
      //array letters to string without separator
      const inputOTP = letters.join("");
      authenticateOTP(phoneNumber, inputOTP);
      //clear letters
      setLetters(() => Array.from({ length: numberOfInputs }, () => ""));
    }
    console.log("end handleLetterChange");
    };

    const handleOTPInputChange = (megaIndex: number, value: string) => {
    setLetters((letters) =>
      letters.map((letter, letterIndex) =>
        letterIndex === megaIndex ? value : letter
      )
    );
    };
    const handleOTPInputSelect = (megaIndex: number) => {
        setCurrentIndex(megaIndex);
    };
    const focusOnCurrentInput = () => {
    console.log("focusOnCurrentInput");
    //focus on current input when user click on the the page
    console.log("currentIndex", currentIndex);
    const currentInput: any = inputRefsArray?.[currentIndex]?.current;
    currentInput.focus();
    currentInput.select();
    };

    useMemo(() => handleLetterChange(letters), [letters]);
    useEffect(() => {
        window.addEventListener("click", focusOnCurrentInput, false);
        return () => {
            window.removeEventListener("click", focusOnCurrentInput);
        };
    }, [currentIndex]);
    
    return (
        <div className="sign-up otp">
            <div className="content26">
                <div className="heading-and-supporting-text3 title text-center">
                    <div className="title">
                        <b className="line-height-38 text-gray-600 text-start">Xác nhận mã OTP</b>
                        <div className="sub-heading text-sm-semibold-size text-gray-600 text-start mt-2">
                            <span> Nhập mã OTP 6 chữ số được gửi tới số điện thoại bạn đăng ký. </span>
                            <br />
                            <span> Mã OTP chỉ có hiệu lực trong vòng <b>2 phút</b> .</span>
                        </div>
                    </div>
                </div>
                <div className="verification-code-input-field-parent content26 text-gray-7001 text-sm-semibold-size">
                  <div className="verification-code-input-field">
                    <div className="input-with-label">
                      <div className="input7" id={`${currentIndex}`}>
                        {inputRefsArray.map((ref: any, index) => {
                          return (
                            <OTPInput
                              megaIndex={index}
                              inputRef={ref}
                              onChange={handleOTPInputChange}
                              onSelect={handleOTPInputSelect}
                              value={letters[index]}
                              disabled={currentIndex != index}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <TimerContainer phone={phone} />
                </div>
            </div>
        </div>
    );
};

export default PhoneVerificationComponent;
