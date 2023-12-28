import Layout from '@layouts/layout'
import Footer from "@components/footer"
import LoginComponent from "@components/loginSteps/LoginComponent"
import PhoneVerificationComponent from '@components/loginSteps/PhoneVerificationComponent';
import Additional from '@components/loginSteps/Additional';
import RegistrationSuccess   from '@components/loginSteps//RegistrationSuccess';
import { useState } from "react";

function ActiveStepFormComponent(){
	const [step,setStep] = useState<number>(4);
	const [phone,setPhone] = useState<string>("");
    const [height,setHeight] = useState<number>(0);
    const [weight,setWeight] = useState<number>(0);
    const [kcal,setKcal] = useState<number>(0);
	switch (step) {
		case 1:
            return <LoginComponent onChange={setStep} setPhone={setPhone}/>;
        case 2:
            return <PhoneVerificationComponent phone={phone} onChange={setStep}/>;
        case 3:
            return <Additional onChange={setStep} setHeight={setHeight} setWeight={setWeight} setKcal={setKcal}/>;;
        case 4:
            return <RegistrationSuccess height={height} weight={weight} kcal={kcal}/>; 
        default:
          return null;
    }
}

const LoginPage1 = () =>{ 
    //setStep
    return (
        <Layout>
       	 	<ActiveStepFormComponent />
            <Footer />
        </Layout>
    )
}

export default LoginPage1