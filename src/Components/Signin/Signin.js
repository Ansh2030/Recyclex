import React, { useState } from "react";
import "./Signin.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { auth, db, app } from "../../firebase_config";
import { useUserAuth } from "../../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, seterr] = useState("");
  const navigate = useNavigate();

  const { signUp, logIn, logOut, loginWithGoogle } = useUserAuth();

  const handlesignup = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, pass);
      window.localStorage.setItem("auth", "true");
      navigate("/");
    } catch (error) {
      seterr(error.message);
    }
  };
  // ===========================================
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, pass);
      window.localStorage.setItem("auth", "true");
      navigate("/");
    } catch (error) {
      seterr(error.message);
    }
  };

  const handlelogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const lwg = async () => {
    try {
      await loginWithGoogle();
    } catch (err) {
      console.log(err);
    }
  };

  const toggle = () => {
    if (document.getElementById("main").className !== "sign-up-mode")
      document.getElementById("main").className = "sign-up-mode";
    else document.getElementById("main").className = "";
  };

  return (
    <div>
      <div id="main">
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              <form
                action="index.html"
                autoComplete="off"
                onSubmit={handlelogin}
                className="sign-in-form"
              >
                <div className="logo">
                  <img src="./img/logo.png" alt="Develoopers" />
                  <h4>RecycleX</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registred yet?</h6>
                  <a href="#" className="toggle" onClick={toggle}>
                    Sign up
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minlength="4"
                      className="input-field"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minlength="4"
                      className="input-field"
                      autoComplete="off"
                      onChange={(e) => setPass(e.target.value)}
                      required
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign In" className="sign-btn" />

                  <p className="text">
                    Forgotten your password or you login datails?
                    <a href="#">Get help</a> signing in
                  </p>

                  {/* <button onClick={lwg}>Signin with google</button>
                <button onClick={handlelogout}>logout</button> */}
                </div>
              </form>

              <form
                action="index.html"
                onSubmit={handlesignup}
                autoComplete="off"
                className="sign-up-form"
              >
                <div className="logo">
                  <img src="./img/logo.png" alt="Develoopers" />
                  <h4>Develoopers</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a href="#" className="toggle" onClick={toggle}>
                    Sign in
                  </a>
                </div>

                <div className="actual-form">
                  <div className="input-wrap">
                    <input
                      type="text"
                      minlength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                    />
                    <label>Name</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="email"
                      className="input-field"
                      autoComplete="off"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <label>Email</label>
                  </div>

                  <div className="input-wrap">
                    <input
                      type="password"
                      minlength="4"
                      className="input-field"
                      autoComplete="off"
                      onChange={(e) => setPass(e.target.value)}
                      required
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign Up" className="sign-btn" />

                  <p className="text">
                    By signing up, I agree to the
                    <a href="#">Terms of Services</a> and
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            </div>

            <div className="carousel">
              <div className="images-wrapper">
                <img
                  src="./img/image1.png"
                  className="image img-1 show"
                  alt=""
                />
                <img src="./img/image2.png" className="image img-2" alt="" />
                <img src="./img/image3.png" className="image img-3" alt="" />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div className="text-group">
                    <h2>Take One Step </h2>
                    <h2>To Recycle the E- waste</h2>
                    <h2>Invite More Number of People</h2>
                  </div>
                </div>

                <div className="bullets">
                  <span className="active" data-value="1"></span>
                  <span data-value="2"></span>
                  <span data-value="3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
