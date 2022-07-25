import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
    //firebase login
  };

  const register = (e) => {
    e.preventDefault();
    auth

      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <button className="login__signButton" onClick={signIn}>
            Sign-in
          </button>

          <p>
            By sigin-In you agree to Amazon certifications of Use & Sale. Please
            see your privacy noticy,our cooking notice and our Internet Based
            Ads Noticesee your privacy noticy,our cooking notice and our
            Internet Based Ads Notice
          </p>

          <button className="login__RegisterBotton" onClick={register}>
            Create your Amazon Clone Account
          </button>
          <br />
          <h5>Developed by : Mifras Gaffoor</h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
