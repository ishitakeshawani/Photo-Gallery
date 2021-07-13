import React, { useRef, useState} from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";
import { useAuth, } from '../../contexts/AuthContexts';
import "./signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpLogic = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [ermail, setErmail] = useState('');
    const [Loading, setLoading] = useState(false);
    const history = useHistory();
    // const { getuser } = useAuth();
    let isValid = true;
    const notify = () => toast("Wow so easy!");

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            setError("");
            setErmail("");
            
              if (typeof passwordRef !== "undefined") {

                if(passwordRef.length < 6){
        
                    setError("Please add at least 6 charachter.");
        
                }
        
              }
              if (typeof emailRef !== "undefined") {
                var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        
                if (!pattern.test(emailRef)){
                    isValid(false);
                 setErmail("Please enter valid email address.");
                }
        
              }
            
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            // getuser();
            history.push("/home");

        } catch {
            
            // setError('failed to create an account');
        }

        setLoading(false);
        

       
    }

    return (
        <>
            <Container className="d-flex align-items-center "
                style={{ minHeight: "80vh" }}
            >
                <div className="w-100" style={{ maxWidth: "500px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mt-4">Sign Up</h2>

                            
                            <Form onSubmit={handleSubmit}>
                            {ermail && (()=>{notify()})}
                                <Form.Group id="name">
                                    <Form.Label>
                                        Username
                            </Form.Label>
                                    <Form.Control type="text" ref={nameRef} required />
                                </Form.Group>
                                <Form.Group id="email">
                                    <Form.Label>
                                        Email
                            </Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>
                                        Password 
                            </Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                
                                <Button disabled={Loading} className="w-100 mt-3" type="submit">Sign Up</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login" className="bottomlink">Log In</Link>
                    </div>
                </div>
            </Container>

        </>
    );
}

export default SignUpLogic;