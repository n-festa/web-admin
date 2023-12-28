import Link from "next/link"
import BMI from "../BMI"

type StepType = {
    height: any,
    weight: any,
    kcal:any,
}

const RegistrationSuccess = ({height,weight,kcal}: StepType) => {
    return (
        <div className="otp sign-up">
            <div className="content26">
                <div className="heading-and-supporting-text3 text-center">
                    <div className="title">
                        <b className="heading26 regis_success_text text-xs-semibold-size">
                            <p className="chc-mng">CHÚC MỪNG</p>
                            <p className="chc-mng">BẠN ĐÃ HOÀN THÀNH ĐĂNG KÍ</p>
                        </b>
                    </div>
                </div>
                <div className="regis_success_wrapper">
                    <BMI height={height} weight={weight} />
                    <div className="bmi-parent">
                        <div className="bmi text-xs-semibold-size font-weight-600">Năng lượng</div>
                        <div className="data-parent">
                            <div className="data position-relative">
                                <div className="data-child"></div>
                                <div className="div6">{kcal}</div>
                            </div>
                            <div className="cn-i">Kcal/ ngày</div>
                        </div>
                    </div>
                </div>
                <div className="button-wrapper">
                    <Link className="login-button padding-sm w-100 border-radius-5xl" href="/">
                        <span className="text68-button text-sm-semibold-size">Khám phá món ăn ngay hôm nay</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RegistrationSuccess
  