import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { useEffect, useState } from "react";
import "./Store.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { auth } from "../firebase-config";
////////////////////
import { getFirestore, doc, getDoc } from "firebase/firestore";





const Store = () => {
  const [data,setData] = useState({})

useEffect(() =>{
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos','maderas');
    getDoc(queryDoc)
    .then(res => setData(res.data(),  console.log(JSON.stringify(data))))
    localStorage.setItem('productos', JSON.stringify(data))

    
},[])

  return (
    <section className="store">
    <Menu/>
    <section className="products">
      {
      Object.entries(data).map(([key, val], i) => (
        <div className="product-card">
            <h2>{key}</h2>
            <img src ={val}/>
        </div> 
        ))
    
      }
   
    </section>
    <Footer/>
    </section>
  );
};

export default Store;

