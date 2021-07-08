import React from "react";
import Title from "../Title";
import LottieAnimation from "../Lottie";
import signup from "../../animation/signup.json";
import { Row, Container,Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUpLogic from "./SignUpLogic";



const SignUp = () => {
    return (
        <div className="div">
            <Title />
            
                <Row>
                    <Col sm={6}><LottieAnimation lotti={signup} height={400} width={500} /></Col>
                    <Col><SignUpLogic /></Col>
                </Row>
          
            
        </div>
    )
}

export default SignUp;