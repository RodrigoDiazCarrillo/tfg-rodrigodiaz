import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/userAuthContext";
import { AiFillHome } from "react-icons/ai";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/store");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/store");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="login">
        <div className="authcard">
          <h2 >Iniciar sesión</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="button-3" type="Submit">
              Entrar
            </button>

          </form>
          <hr />

          <GoogleButton
            className="g-btn"
            type="light"
            onClick={handleGoogleSignIn}
          />
          <div>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
          <div className="linkhome">
            <Link to="/"><AiFillHome /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
