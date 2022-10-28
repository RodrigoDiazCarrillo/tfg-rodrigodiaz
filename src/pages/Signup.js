import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import { AiFillHome } from "react-icons/ai";
import "./Signup.css";
import { auth, db } from "../firebase-config";
import { getFirestore, doc, getDoc, addDoc, setDoc, updateDoc, collection } from "firebase/firestore";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [primer, setPrimer] = useState("");
  const [segundo, setSegundo] = useState("");
  const [nif, setNif] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [num, setNum] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password );
      navigate("/store");
    } catch (err) {
      setError(err.message);
    }
  };
  const register = async (e) => {
    e.preventDefault();

    try {
      await 
      signUp(email, password );
      setDoc(doc(db, "clientes", email), {
        Nombre: name,
        PrimerA: primer,
        SegundoA: segundo,
        NIF: nif,
        Teléfono: phone,
        Dirección: street,
        Número: num,
        Ciudad: city,
        Provincia: state
      });
        
      alert("Resgistro realizado")
      navigate("/store");

    } catch (err) {
      console.log(err.message);
    }

  };

  
    return (
      <>
        <section className="signup">
          <div className="authcard">
            <h2 >Iniciar sesión</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={register}>
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
     <input
              placeholder="Nombre"
              autoComplete="off"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
              <input
              placeholder="Primer Apellido"
              autoComplete="off"
              type="text"
              onChange={(e) => setPrimer(e.target.value)}
            />
               <input
              placeholder="Segundo Apellido"
              autoComplete="off"
              type="text"
              onChange={(e) => setSegundo(e.target.value)}
            />
            <input
              placeholder="NIF"
              autoComplete="off"
              type="text"
              onChange={(e) => setNif(e.target.value)}
            />
             <input
              placeholder="Teléfono"
              autoComplete="off"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
             <input
              placeholder="Dirección"
              autoComplete="off"
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />
             <input
              placeholder="Número"
              autoComplete="off"
              type="number"
              onChange={(e) => setNum(e.target.value)}
            />
             <input
              placeholder="Ciudad"
              autoComplete="off"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
             <input
              placeholder="Provincia"
              autoComplete="off"
              type="text"
              onChange={(e) => setState(e.target.value)}
            />
              <button className="button-3" type="Submit">
                Entrar
              </button>
  
            </form>
            <hr />
  
           
            <div>
              Don't have an account? <Link to="/login">Login</Link>
            </div>
            <div className="linkhome">
              <Link to="/"><AiFillHome /></Link>
            </div>
          </div>
        </section>
      </>
    );
};

export default Signup;
