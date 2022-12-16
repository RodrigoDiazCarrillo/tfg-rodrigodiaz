import { useEffect, useState } from "react";
import "./Address.css";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../img/logo-blanco.png";
import { useUserAuth } from "../context/userAuthContext";
import { auth, db } from "../firebase-config";
import { Footer } from "../components/Footer";
import { getFirestore, doc, getDoc, addDoc, setDoc, updateDoc, collection } from "firebase/firestore";

function Shipping() {

  const [cliente, setCliente] = useState({});
  const [name, setName] = useState("");
  const [primer, setPrimer] = useState("");
  const [segundo, setSegundo] = useState("");
  const [nif, setNif] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [num, setNum] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { user } = useUserAuth();
  const [isShown, setIsShown] = useState(false);
  let navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    try {
      await updateDoc(doc(db, "clientes", user.email), {
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
      setIsShown(current => !current);
      alert("Datos correctamente modificados")

    } catch (err) {
      console.log(err.message);
    }

  };
  
  useEffect(() => {
  
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'clientes', user.email)
    getDoc(queryDoc)
      .then(res => setCliente(res.data()))

  }, [register])

  const handleClick = event => {
    // Toggle shown state
    setIsShown(current => !current);
  };
  const continuar = (e) => {
    navigate("/cart/shipping");
  }

  return (
    <section className="shopping">
      <header>
        <div className="logo">
          <img src={img1} alt="" className="pic" />
        </div>
        <div className="shopping-route">
          <div className="current"><p>1</p><h3>Cesta</h3></div>
          <div className="current"><p>2</p><h3>Dirección de envío</h3></div>
          <div><p>3</p><h3>Opciones de entrega</h3></div>
          <div><p>4</p><h3>Método de pago</h3></div>
        </div>


        <hr></hr>
      </header>
      <section className="content">
        <h2>Dirección de envío</h2>
  
        <div className="client-data">
              <div className="client">
                  <div>
                  <p><strong>Nombre:</strong> {cliente?.Nombre}</p>
                  <p><strong>Primer apellido:</strong> {cliente?.PrimerA}</p>
                  <p><strong>Segundo Apellido:</strong> {cliente?.SegundoA}</p>
                  </div>
                  <div>
                  
                  <p><strong>DNI/NIF:</strong> {cliente?.NIF}</p>
                  <p><strong>Teléfono (+34): </strong> {cliente?.Teléfono}</p>
                  </div>
                <div>
                  
                  <p><strong>Dirección:</strong> {cliente?.Dirección}</p>
                  <p><strong>Número:</strong> {cliente?.Número}</p>
                  <p><strong>Código postal:</strong> {cliente?.CP}</p>
                  </div>
                  <div>
                  <p><strong>Ciudad:</strong> {cliente?.Ciudad}</p>
                  <p><strong>Provincia:</strong> {cliente?.Provincia}</p>
                  </div>
              </div>
       
                <div className="botones">
                  <button className="button-3" onClick={handleClick}> Modificar datos</button>
                  <button className="button-3" onClick={continuar}>Guardar y continuar</button>
                </div>
                {isShown && (
                  <form onSubmit={register}>
                    <div>
                      <input
                        required
                        placeholder="Nombre"
                        autoComplete="off"
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        required
                        placeholder="Primer Apellido"
                        autoComplete="off"
                        type="text"
                        onChange={(e) => setPrimer(e.target.value)}
                      />
                      <input
                        required
                        placeholder="Segundo Apellido"
                        autoComplete="off"
                        type="text"
                        onChange={(e) => setSegundo(e.target.value)}
                      />
                      <input
                        required
                        placeholder="NIF"
                        autoComplete="off"
                        type="text"
                        onChange={(e) => setNif(e.target.value)}
                      />
                      <input
                        required
                        placeholder="Teléfono"
                        autoComplete="off"
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <input
                        required
                        placeholder="Dirección"
                        autoComplete="off"
                        type="text"
                        onChange={(e) => setStreet(e.target.value)}
                      />
                      <input
                        required
                        placeholder="Número"
                        autoComplete="off"
                        type="number"
                        onChange={(e) => setNum(e.target.value)}
                      />
                      <input
                        required
                        placeholder="Ciudad"
                        autoComplete="off"
                        type="text"
                        onChange={(e) => setCity(e.target.value)}
                      />
                      <input
                        required
                        placeholder="Provincia"
                        autoComplete="off"
                        type="text"
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                    <button className="button-3" type="Submit">
                      Aceptar
                    </button>
                  </form>
                )}

              </div>




      </section>

      <hr></hr>
      <Footer/>
    </section>
  );
};

export default Shipping;

