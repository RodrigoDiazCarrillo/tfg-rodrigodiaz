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
  useEffect(() => {
    prod();

  }, [])
  useEffect(() => {
    console.log(basket);
  }, [basket])


  return (
    <section className="store">
      <Menu />
      <section className="products">

        {data != undefined ?
          dat.map((d, index) =>
            <div className="product-card">
              <div className={index}>
                <Link className={"linkproduct"} to={d.url}>
                  <h2> {d.marca} &nbsp;{d.modelo} </h2>
                  <img src={d.imagen} />
                  <p>{d.precio}</p>
                </Link>

              </div>
              <button value={index} onClick={(e) =>
                setBasket(current => [...current, [e.target.value, dat[e.target.value].precio, dat[e.target.value].marca]])

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

