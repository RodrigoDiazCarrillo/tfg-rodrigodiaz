import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { useEffect, useState } from "react";
import "./Store.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";

import { auth } from "../firebase-config";
////////////////////
import { getFirestore, getDocs, collection, doc, getDoc, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

function Store() {
  const [data, setData] = useState([])
  const [dat, setDat] = useState([])
  const [basket, setBasket] = useState([])

  // useEffect(() =>{
  //     const querydb = getFirestore();
  //     const queryDoc = doc(querydb, 'productos','maderas');
  //     getDoc(queryDoc)
  //     .then(res => setData(res.data()
  //     ,  console.log(JSON.stringify(data))
  //     ))
  //     // localStorage.setItem('productos', JSON.stringify(data))
  // },[]) 

  const prod = async (e) => {
    const db = getFirestore();
    const colRef = collection(db, "productos");
    try {
      const documents = await getDocs(colRef);

      if (data.length < documents.docs.length) {
        documents.forEach(doc => {
          setData(current => [...current, doc.id])
          setDat(current => [...current, doc.data()])
         
        })
      }
    } catch (error) {
      console.log("error");
    }
  };
  //Refresca el usestate basket al volver a la página
  useEffect(() => {
    prod();
    if (localStorage.getItem('basket') != null){
      setBasket(JSON.parse(localStorage.getItem('basket')))
    }
   
  }, [])


  useEffect(() => {
    console.log(basket);
    localStorage.setItem('basket', JSON.stringify(basket))
    console.log("localStorage",JSON.parse(localStorage.getItem('basket')));
  }, [basket])

  
  const addBasket = (e) => {

      for (var i = 0; i < basket.length; i++) {
        if (basket[i].find((element) => element === dat[e.target.value].id)) {
          return alert("El producto seleccionado ya está añadido");
        }
      }
    setBasket(current => [...current, [
      e.target.value, 1, dat[e.target.value].precio, dat[e.target.value].imagen, 
      dat[e.target.value].categoria, dat[e.target.value].marca, dat[e.target.value].modelo, dat[e.target.value].id]])

  }

  return (
    <section className="store">
      {<Menu /> }
   
      <section className="products">

        {data != undefined ?
          dat.map((d, index) =>
            <div className="product-card">
              <div className={index}>
                <Link className={"linkproduct"} to={d.url}>
                  <h2> {d.marca} &nbsp;{d.modelo} </h2>
                  <img src={d.imagen} />
                  <p>{d.precio.toFixed(2)}</p>
                </Link>

              </div>
              <button value={index} onClick={addBasket       
              }>Añadir a la cesta</button>
            </div>
          )

          :

          <p className="cargando">Cargando</p>
        }


      </section>
      <Footer />
    </section>
  );
};

export default Store;


