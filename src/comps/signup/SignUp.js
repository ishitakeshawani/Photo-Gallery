import React from "react";
import Title from "../Title";
import LottieAnimation from "../Lottie";
import signup from "../../animation/signup.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpLogic from "./SignUpLogic";



const SignUp = () => {
    return (
        <div className="div">
            <Title />
            <div className="row">
                <div class="col d-none d-lg-block"><LottieAnimation lotti={signup} height={400} width={500} /></div>
                <div class="col"><SignUpLogic /></div>
            </div>
               
        </div>
    )
}

export default SignUp;