import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { useEffect, useState } from "react";
import "./Store.css";
////////////////////
import { app } from "../firebase-config";
import { getFirestore, doc, getDoc } from "firebase/firestore";
//import ItemDetail from "../ItemDetail";
import {useParams} from "react-router-dom";




const Store = () => {
  const { logOut, user } = useUserAuth();
  const [data,setData] = useState({})
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
///////////////////////
useEffect(() =>{
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos','maderas');
    getDoc(queryDoc)
    .then(res => setData(res.data()))
    
},[])
console.log(data);

  return (
    <>
       <div >
        Hello Welcome <br />
      </div>
      <div >
        <button onClick={handleLogout}>
          Log out
        </button>
      </div>
    <section className="products">
    {Object.entries(data).map(([key, val], i) => (
    <div className="product-card">
        <h2>{key}</h2>
        <img src ={val}/>
    </div>
    ))}
    </section>
    </>
  );
};

export default Store;

