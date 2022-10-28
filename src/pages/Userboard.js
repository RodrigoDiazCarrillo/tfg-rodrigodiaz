import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { useEffect, useState } from "react";
import "./Userboard.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { auth, db } from "../firebase-config";
import { updateProfile } from "firebase/auth";
////////////////////
import { getFirestore, doc, getDoc, addDoc, setDoc, updateDoc, collection } from "firebase/firestore";





const Userboard = () => {
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


  //Funciona - id automatico
  // const register = async (e) => {
  //   e.preventDefault();
  //   const querydb = getFirestore();
  //   try {
  //     const docRef = await addDoc(collection(db, "cities"), {
  //       name: "Tokyo",
  //       country: "Japan"
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
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
  return (
    <section className="userboard">
      <Menu />
      <div className="userinfo">
        <h2>Usuario:&nbsp;{user.email}</h2>
        <div className="client">
          <div>
          <p><strong>Nombre:</strong> {cliente.Nombre}</p>
          <p><strong>Primer apellido:</strong> {cliente.PrimerA}</p>
          <p><strong>Segundo Apellido:</strong> {cliente.SegundoA}</p>
          <p><strong>DNI/NIF:</strong> {cliente.NIF}</p>
          </div>
          <div>
          <p><strong>Teléfono (+34): </strong> {cliente.Teléfono}</p>
          <p><strong>Dirección:</strong> {cliente.Dirección}</p>
          <p><strong>Número:</strong> {cliente.Número}</p>
          <p><strong>Ciudad:</strong> {cliente.Ciudad}</p>
          <p><strong>Provincia:</strong> {cliente.Provincia}</p>
          </div>
        </div>
        <div className="modificar">
        <button className="button-3" onClick={handleClick}>
          Modificar datos
        </button>
        {isShown && (
          <form onSubmit={register}>
            <div>
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
            </div>
            <button className="button-3" type="Submit">
                Aceptar
              </button>
          </form>
        )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Userboard;

