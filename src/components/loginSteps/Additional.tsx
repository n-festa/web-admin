import { useForm } from "react-hook-form";
import { postData } from '@utils/services'; 
import { server } from '@utils/server'; 
import { useState } from "react";

type StepType = {
    onChange : any,
    setHeight: any,
    setWeight: any,
    setKcal: any,
}

interface LoginType {
    name?: string;
    email?: string;
    ngaySinh?:any;
    movement?: number;
    sex?: number;
    chieuCao?: number;
    canNang?: number;
    allergy?: string,
    diseases?:string;
    gioiTinh?:number;
    loaiLaoDong?:number;
}


const Additional = ({onChange,setHeight,setWeight,setKcal}: StepType) => {
    const [styling, setstyling] = useState({ status: false,from: "",   style: "" });
    function handleClick(childNo :any) {
        setstyling({ status: true, from: childNo, style: "applyBgColor" });
    }

    const [cheDoAn, setCheDoAn] = useState({ status: false,from: "",   style: "" });
    function handleClickCheDoAn(childNo:any) {
        setCheDoAn({ status: true, from: childNo, style: "applyBgColor" });
    }


    const { register,handleSubmit } = useForm();
    const onSubmit = async (data: LoginType) => {
        let selectedDate = document.getElementById('birthDate') as HTMLInputElement;
        data.ngaySinh = selectedDate.value;
        data.gioiTinh = 1;
        data.loaiLaoDong = 2;

        setHeight(data.chieuCao);
        setWeight(data.canNang);

        const res = await postData(`${server}auth/setEnergy`, {
            data: data,
        });
        
        setKcal(res.result.result.nangLuongKhuyenNghi.giaTri_Min);
        setTimeout(() => {
            onChange(4);
        }, 2000);
    };

    return (
        <div className="phone_verification">
            <div className="content27">
                <div className="heading-and-supporting-text3 font-size18 text-start">
                    <b className="heading26">CHIA SẺ THÊM VỚI CHÚNG TÔI VỀ BẠN</b>
                    <div className="supporting-text53">
                        Những thông tin bạn cung cấp sẽ giúp chúng tôi đưa ra những gợi ý
                            về đồ ăn phù hợp hơn với thể trạng và nhu cầu của bạn.
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="user-info-parent">
                        <div className="user-info">
                            <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">
                                        Tên
                                        <label className="text-red ms-1"> *</label>
                                    </div>
                                    <div className="input7 ">
                                        <input placeholder="Ví dụ: nguyen.vana" type="text"
                                            className="text-input1 border-none no-outline no-padding w-100" name="name"
                                        />
                                    </div>
                                </div>
                               
                            </div>
                           
                            <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">
                                        Email
                                        <label className="text-red ms-1"> *</label>
                                    </div>
                                    <div className="input7">
                                        <div className="content28">
                                            <input placeholder="Ví dụ: nguyen.vana@email.com" type="text"
                                                className="text-input1 border-none no-outline no-padding w-100" name="email"
                                            />
                                        </div>
                                    </div>
                                </div>
                              
                            </div>

                            <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">
                                        Ngày sinh
                                        <label className="text-red ms-1"> *</label>
                                    </div>
                                    <div className="input7">
                                        <div className="content28">
                                            <div className="text80 font-size16">
                                                <input placeholder="Ví dụ: 27/07/1995" type="date"
                                                className="text-input1 border-none no-outline no-padding w-100" name="ngaySinh"
                                                id="birthDate"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="gioi-tinh">
                                <div className="text73">
                                    Giới tính
                                    <label className="text-red ms-1"> *</label>
                                </div>
                                <div className="radio-check-parent">
                                    <div className="radio-check">
                                        <div className="input10">
                                            <input type="radio" name="gioiTinh" className="checkbox-base1" value="1" />
                                        </div>
                                        
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Nam</div>
                                        </div>
                                    </div>
                                    <div className="radio-check">
                                        <div className="input10">
                                            <input type="radio" name="gioiTinh" className="checkbox-base1" value="0" />
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Nữ</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="email-parent">
                                <div className="email1">
                                    <div className="input-with-label6">
                                        <div className="text73">
                                            Chiều cao ( cm )
                                            <label className="text-red ms-1"> *</label>
                                        </div>
                                        <div className="input7">
                                            <input placeholder="Ví dụ: 163" type="text"
                                                className="text-input1 border-none no-outline no-padding w-100 input7" name="chieuCao"
                                            />
                                        </div>
                                    </div>
                                    <div className="hint-text6">Cm</div>
                                </div>
                                <div className="email1">
                                    <div className="input-with-label6">
                                        <div className="text73">
                                            Cân nặng ( kg )
                                            <label className="text-red ms-1"> *</label>
                                        </div>
                                        <div className="input7">
                                            <input placeholder="Ví dụ: 60" type="text"
                                                className="text-input1 border-none no-outline no-padding w-100 input7" name="canNang"
                                            />
                                        </div>
                                    </div>
                                    <div className="hint-text6">Kg</div>
                                </div>
                            </div>
                        </div>

                        <div className="user-info">
                            <div className="gioi-tinh1">
                                <div className="text73">Mức độ vận động hàng ngày</div>
                                
                                <div className="donate-now button-group">
                                    <div className={
                                            styling?.status && styling?.from == "child-1"
                                              ? "button56 active"
                                              : "button56"
                                        } >
                                        <input className="d-none" type="radio" id="a25" name="amount" />
                                        <label htmlFor="a25"  className="text83" onClick={() => handleClick(`child-1`)}>Nhẹ nhàng</label>
                                    </div>

                                    <div className={
                                            styling?.status && styling?.from == "child-2"
                                              ? "button56 active"
                                              : "button56"
                                        } >
                                        <input  className="d-none" type="radio" id="a50" name="amount" />
                                        <label htmlFor="a50" className="text83" onClick={() => handleClick(`child-2`)}>Trung Bình</label>
                                    </div>
                                    <div className={
                                            styling?.status && styling?.from == "child-3"
                                              ? "button56 active"
                                              : "button56"
                                        } >
                                        <input  className="d-none" type="radio" id="a75" name="amount" />
                                        <label htmlFor="a75" className="text83" onClick={() => handleClick(`child-3`)}>Nặng</label>
                                    </div>
                                </div>
                            </div>
                            <div className="gioi-tinh2">
                                <div className="label13">Chế độ ăn hiện tại</div>
                                <div className="button-group1">
                                    <div className={
                                            cheDoAn?.status && cheDoAn?.from == "child-4"
                                              ? "button56 no-padd active"
                                              : "button56 no-pad"
                                        } >
                                        <input  className="d-none" type="radio" id="a01" name="CDA" />
                                        <label htmlFor="a01" className="text83" onClick={() => handleClickCheDoAn(`child-4`)}>Hỗn hợp</label>
                                    </div>
                                    <div className={
                                            cheDoAn?.status && cheDoAn?.from == "child-5"
                                              ? "button56 no-pad active"
                                              : "button56 no-pad"
                                        } >
                                        <input  className="d-none" type="radio" id="a02" name="CDA" />
                                        <label htmlFor="a02" className="text83" onClick={() => handleClickCheDoAn(`child-5`)}>Thuần chay</label>
                                    </div>
                                    <div className={
                                            cheDoAn?.status && cheDoAn?.from == "child-6"
                                              ? "button56 no-pad active"
                                              : "button56 no-pad"
                                        } >
                                        <input  className="d-none" type="radio" id="a03" name="CDA" />
                                        <label htmlFor="a03" className="text83" onClick={() => handleClickCheDoAn(`child-6`)}>Chỉ ăn thịt </label>
                                    </div>
                                    
                                </div>
                                <div className="button-group1">
                                    <div className={
                                            cheDoAn?.status && cheDoAn?.from == "child-7"
                                              ? "button56 no-pad active"
                                              : "button56 no-pad"
                                        } >
                                        <input  className="d-none" type="radio" id="a04" name="CDA" />
                                        <label htmlFor="a04" className="text83" onClick={() => handleClickCheDoAn(`child-7`)}>Cá </label>
                                    </div>
                                    <div className={
                                            cheDoAn?.status && cheDoAn?.from == "child-8"
                                              ? "button56 no-pad active"
                                              : "button56 no-pad"
                                        } >
                                        <input  className="d-none" type="radio" id="a05" name="CDA" />
                                        <label htmlFor="a05" className="text83" onClick={() => handleClickCheDoAn(`child-8`)}>Chay </label>
                                    </div>
                                    <div className={
                                            cheDoAn?.status && cheDoAn?.from == "child-9"
                                              ? "button56 w133 active"
                                              : "button56 w133"
                                        } >
                                        <input  className="d-none" type="radio" id="a06" name="CDA" />
                                        <label htmlFor="a06" className="text83" onClick={() => handleClickCheDoAn(`child-9`)}>Không ăn kiêng</label>
                                    </div>
                                </div>
                            </div>
                            <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">Dị ứng với đồ ăn (nếu có)</div>
                                    <input placeholder="Ví dụ: sữa động vật, trứng..." type="text"
                                        className="text-input1 border-none no-outline no-padding w-100 input7"
                                        name="allergy"
                                    />
                                    
                                </div>
                                <div className="supporting-text53">
                                    Chia sẻ thêm về đồ ăn mà bạn bị dị ứng. Ví dụ: sữa động vật,
                                      trứng, hải sản (cá, tôm, cua...), thuỷ sản (cá, tôm, lươn...),
                                      các loại hạt (đậu nành, óc chố, hạnh nhân...)
                                </div>
                            </div>
                                <div className="ten">
                                <div className="input-with-label6">
                                    <div className="text73">Bệnh mãn tính (nếu có)</div>
                                    <div className="input7">
                                        <input placeholder="Ví dụ: Cao huyết áp..." type="text"
                                        className="text-input1 border-none no-outline no-padding w-100 input7" 
                                        name="diseases"
                                        />
                                    </div>
                                </div>
                                <div className="supporting-text53">
                                    Tim, Cao huyết áp, Huyết áp thấp, Gout, Tiểu đường, hen suyễn,
                                      ung thư....
                                </div>
                            </div>
                            <div className="gioi-tinh">
                                <div className="text73">Chế độ ăn mong đợi</div>
                                <div className="radio-check-group">
                                    <div className="radio-check3">
                                        <div className="input10">
                                            <input type="radio" name="che_do_an" className="checkbox-base1" value="0" />
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Thuần chay</div>
                                            <div className="supporting-text54">
                                            Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                        <div className="input10">
                                            <input type="radio" name="che_do_an" className="checkbox-base1" value="1" />
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Eat clean</div>
                                            <div className="supporting-text54">
                                            Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                        <div className="input10">
                                            <input type="radio" name="che_do_an" className="checkbox-base1" value="2" />
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Tăng cơ</div>
                                            <div className="supporting-text54">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                         <div className="input10">
                                            <input type="radio" name="che_do_an" className="checkbox-base1" value="3" />
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Bổ sung chất xơ</div>
                                            <div className="supporting-text54">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                        <div className="input10">
                                            <input type="radio" name="che_do_an" className="checkbox-base1" value="4" />
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Chế độ ăn hỗn hợp</div>
                                           
                                        </div>
                                    </div>
                                    <div className="radio-check3">
                                        <div className="input10">
                                            <input type="radio" name="che_do_an" className="checkbox-base1" value="4" />
                                        </div>
                                        <div className="text-and-supporting-text3">
                                            <div className="text78">Khác </div>
                                            
                                        </div>
                                    </div>
                                    <div className="input7" id="chedoan_khac">
                                        <input placeholder="Vui lòng điền tên chế độ ăn mong muốn" type="text"
                                            className="text-input1 border-none no-outline no-padding w-100 input7"
                                            name="allergy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="button68 text-center"  type="submit">
                        <span className="text69">Hoàn tất</span>
                    </button>
                </form>
            </div>
        </div>
    )
}
  
export default Additional
  