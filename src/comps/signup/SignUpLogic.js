import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContexts";
import "./signup.css";
import { toast } from "react-toastify";
toast.configure();

const SignUpLogic = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signup } = useAuth();
  let [errors, setErrors] = useState("");
  const [Loading, setLoading] = useState(false);
  const history = useHistory();

  const finalValidate = () => {
    errors = {};

    if (username === undefined || username === "")
      errors.username = "Please enter your name";
    else if (username.length < 4)
      errors.username = "Please enter at least 4 characters";

    if (email === undefined || email === "")
      errors.email = "Please enter your email";
    else if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email)
    )
      errors.email = "Please enter a valid username address";

    if (password.length < 6)
      errors.password = "Please enter at least 6 characters";

    setErrors(errors);

    if (Object.entries(errors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (!finalValidate()) return;
    setLoading(true);

    try {
      await signup(email, password);
      let message = "Sign Up successfully";
      toast.success(message, {
        position: "top-right",
        autoClose: 0,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setLoading(false);

      history.push("/home");
    } catch (error) {
      errors = {};
      errors.other = error.message;
      setErrors(errors);
      setLoading(false);
    }
  }

  return (
    <>
      <Container
        className="d-flex align-items-center "
        style={{ minHeight: "80vh" }}
      >
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mt-4">Sign Up</h2>

              <form>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    required
                    type="username"
                    className="form-control"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                  <span className="form-text text-danger">
                    {errors.username || ""}
                  </span>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <span className="form-text text-danger">
                    {errors.email || ""}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    class="form-control"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <span className="form-text text-danger">
                    {errors.password || ""}
                  </span>
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e)}
                    className="btn btn-primary"
                    disabled={Loading}
                  >
                    Sign UP
                  </button>
                </div>
              </form>
              <span className="form-text text-danger">
                {errors.other || ""}
              </span>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="bottomlink">
              Log In
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUpLogic;
