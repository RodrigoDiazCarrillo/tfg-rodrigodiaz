import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { useEffect, useState } from "react";
import "./Store.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { auth } from "../firebase-config";
////////////////////
import { getFirestore,getDocs,collection,doc,getDoc} from "firebase/firestore";
import { get } from "firebase/database";





const Store = () => {
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
  const colRef = collection(db, "cuerdas");

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
      {/* {
      Object.entries(data).map(([key, val], i) => (
        <div className="product-card">
            <img src ={val}/>
            <h2>{key}</h2>
            
        </div> 
        ))
      } */}
      
     
      {/* {
      dat.map((d) =>  
         <li>{d}</li>   
        
      )
      } */}
      {
        console.log(dat)
      }
        
   
      {/* {data[1] != undefined? 
      
      Object.entries(data).map(([key, val], i) => (
        <div className="product-card">
            <p>{val}</p>
             <h2>{key}</h2>
             <p>{i}</p>
             
         </div> 
          ))
         :
         console.log(data[0])
      } */}
       
       {data != undefined ?
      dat.map((d) =>  
      <div className="product-card">
        <p>{d.tipo}</p>   
        <p>{d.marca}</p>   
        <img src ={d.imagen}/>
         <p>{d.modelo}</p>   
         <p>{d.descripcion}</p>   
         <p>{d.precio}</p>  
         </div>
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

