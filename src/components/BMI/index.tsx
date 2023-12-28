import React from 'react';

interface BMIType{
    height: number,
    weight : number,
}

const BMI = ({height, weight} : BMIType) => {
    const BMIindex = (weight/ (height * height) * 10000).toFixed(2);
    let result_bmi ="";
    if( Number(BMIindex) < 16){
        result_bmi = "Gầy độ 3";
    }else if( 16 < Number(BMIindex)  && Number(BMIindex)  <17){
        result_bmi = "Gầy độ 2";
    }else if( 17< Number(BMIindex)  && Number(BMIindex)  <18.5){
        result_bmi = "Gầy độ 1";
    }else if( 18.5 < Number(BMIindex)  && Number(BMIindex)  <25){
        result_bmi = "Binh thuong";
    }else if( 25 < Number(BMIindex)  && Number(BMIindex)  <30){
        result_bmi = "Thừa cân";
    }else if( 30 < Number(BMIindex)  && Number(BMIindex)  <35){
        result_bmi = "Béo phì độ 1";
    }else if( 35 < Number(BMIindex)  && Number(BMIindex)  <40){
        result_bmi = "Béo phì độ 2";
    }else if( 40 < Number(BMIindex) ){
        result_bmi = "Béo phì độ 3";
    }

    return (
        <div className="bmi-parent">
            <div className="bmi text-xs-semibold-size font-weight-600">Chỉ số BMI</div>
                <div className="data-parent">
                    <div className="data position-relative">
                    <div className="data-child"></div>
                    <div className="div5">{BMIindex}</div>
                </div>
                <div className="cn-i">{result_bmi}</div>
            </div>
        </div>
    )
};

export default BMI;