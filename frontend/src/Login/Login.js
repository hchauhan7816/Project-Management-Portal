import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import LogoImage from "../Images/NavLogo.png";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const Login = (props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  let handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  let handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: emailValue.toLowerCase(),
        userPassword: passwordValue,
      }),
    });
    const parsedRes = await res.json();
    if (parsedRes.loginState) {
      toast.dark("Successful Login.");
      props.loginPressed();
    } else {
      toast.error("Incorrect email or password. Please try again.");
    }
  };
  if (!props.loggedIn) {
    return (
      <main className="form-signin text-center">
        <Link to="/">
          <img src={LogoImage} alt="JIIT Logo" width="200" height="200" />
        </Link>
        <h1 className="h3 mb-3 fw-normal py-3">Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              name="userEmail"
              id="userEmail"
              value={emailValue}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="userEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              id="userPassword"
              name="userPassword"
              value={passwordValue}
              onChange={handlePasswordChange}
              required
            />
            <label htmlFor="userPassword">Password</label>
          </div>

          <button type="submit" className="w-100 btn btn-lg submitBtn">
            Log In
          </button>
          <Link to="/">
            <div className="row justify-content-center mb-4 py-3">
              <div>About JIIT Project Management Portal</div>
            </div>
          </Link>

          {/* <Link className="signup-link" to="/register">
            Don't have an account? Sign up for JIIT!
          </Link>  */}
        </form>
      </main>
    );
  }
  // we lifted the redirect state up to the main App.js Router
  // } else {
  //   return <Redirect to="/dashboard" />;
  // }
};

Login.propTypes = {
  loginPressed: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Login;
