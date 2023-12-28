import { useForm } from "react-hook-form";
import { server } from "../../utils/server";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput  from "react-phone-number-input";
import { toast } from "react-toastify";

type StepType = {
    onChange: any;
    setPhone: any;
};

const LoginComponent = ({ onChange, setPhone }: StepType) => {
    const { handleSubmit} = useForm();
  // const [value,setValue] = useState()
    const [value, setValue] = useState<string | undefined>();
    const [error, setError] = useState<string>();

    const onSubmit = async () => {
        var phone = value;
        console.log(phone);
        setPhone(phone);
        if (phone) {
            if (phone.length == 12) {
              toast.success(" Success!", { autoClose: 1500 });
                      setTimeout(() => {
                        onChange(2);
                      }, 3000);
            } else {
                toast.error(" Fail!", { autoClose: 1500 });
                setError("Số điện thoại của bạn dường như chưa chính xác.");
            }
        } else {
            toast.error(" Fail!", { autoClose: 1500 });
            setError("Vui lòng nhập số điện thoại của bạn");
        }
    };

    return (
    <div className="sign-up">
        <div className="image-login-page">
            <div className="image-login-page-child"></div>
            <img src="/images/login_image.png" alt="product" />
        </div>
        <div className="login-content">
            <div className="title">
                <b className="heading26">
                    Đặt ngay bữa ăn ngon & lành của riêng bạn!
                </b>
            </div>
            <div className="input-field-parent">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-field">
                        <div className="input-with-label">
                            <span className="font-weight-600">Điền số điện thoại của bạn</span>
                            <div className="phone-input">
                                <div className="input-with-label">
                                    <PhoneInput
                                  className="input77"
                                  international
                                  defaultCountry="VN"
                                  value={value}
                                  onChange={setValue}
                                  rules={{
                                    required: true,
                                  }}
                                />
                                </div>
                              
                                <div className="hint-text d-none">
                                    This is a hint text to help user.
                                </div>
                            </div>
                        </div>
                        <div className="hint-text">
                            Chúng tôi sẽ gửi tới số điện thoại bạn đăng ký mã số OTP để kích
                            hoạt tài khoản
                        </div>
                    </div>
                    <button className="login-button w-100 border-radius-5xl mt-3 " type="submit">
                        <span className="text69">Tiếp tục</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
    );
};

export default LoginComponent;




