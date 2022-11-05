import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { useEffect, useState } from "react";
import "./Store.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { auth } from "../firebase-config";
////////////////////
import { getFirestore,getDocs,collection,doc,getDoc} from "firebase/firestore";
import { Link } from "react-router-dom";





function Store () {
 const [data,setData] = useState([])
 const [dat,setDat] = useState([])


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

    if(data.length < documents.docs.length) { 
      documents.forEach(doc => {
          setData(current => [...current,doc.id]) 
          setDat(current => [...current,doc.data()]) 
       })     }     
} catch (error) {
    console.log("error");
}
};


useEffect(() => { 
 prod();
 
 }, [])

 
  return (
    <section className="store">
    <Menu/>
    <section className="products">
 
       {data != undefined ?
      dat.map((d) =>  
      <Link className={"linkproduct"}to={d.url}>
      <div className="product-card">
        <h2> {d.marca} &nbsp;{d.modelo} </h2>   
        <img src ={d.imagen}/>
         <p>{d.precio}</p>  
         
         </div>
         </Link>
      )
      
      :

      <p className="cargando">Cargando</p>
      } 
      

    </section>
    <Footer/>
    </section>
  );
};

export default Store;

