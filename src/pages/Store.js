import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";
import { useEffect, useState } from "react";
import "./Store.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';

import { auth, db } from "../firebase-config";
////////////////////
import { getFirestore, getDocs, collection, addDoc, setDoc, query, where, DocumentReference } from "firebase/firestore";
import { Link } from "react-router-dom";
import { loadStripe} from "@stripe/stripe-js";


function Store() {
  const [data, setData] = useState([])
  const [dat, setDat] = useState([])
  const [basket, setBasket] = useState([])
  const { user } = useUserAuth();

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
    //prods();///////////
    if (localStorage.getItem('basket') != null){
      setBasket(JSON.parse(localStorage.getItem('basket')))
    }
   
  }, [])


  useEffect(() => {
    console.log(basket);
    localStorage.setItem('basket', JSON.stringify(basket))
    console.log("localStorage",JSON.parse(localStorage.getItem('basket')));
  }, [basket])
  useEffect(()=>{
    let total =0;
    for (let i=0; i<basket.length; i++){
      total = total+basket[i][2]*basket[i][1]
    }
    localStorage.setItem('total', JSON.stringify(total.toFixed(2)))
    console.log("total",JSON.parse(localStorage.getItem('total')));
  })
  
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
  ///////////////////Prueba/////////////////////////
  const [products, setProducts] = useState([])
  const [produ, setProdu] = useState([])
  // useEffect(()=>{
  //     db.collection('products').where('active','==', true).get().then(snapshot => {
  //       console.log("snapshot",snapshot);
  //     })

  // },[])
  useEffect(() => {

 //console.log("productslength", products.length);
 console.log("productsl", products);

    const db = getFirestore();
    const colRef = collection(db, "products")
  
    if (products.length ===0) {
    const documents = getDocs(colRef)
    
    .then(function (querySnapshot) {
     
      querySnapshot.forEach(async function (doc) {    

       // if (doc.data() !== products.find((element) => element === doc.data())){}
        //if(products.length < documents.length)
        setProducts(current => [...current,doc.data() ])
        //console.log("products",products);
        
      })
      
    })
    
    
    }

  })
const prods = async (e) => {
  const db = getFirestore();
  const colRef = collection(db, "products");
  try {
    const documents = await getDocs(colRef);

    if (products.length < documents.docs.length) {
      documents.forEach(doc => {
        
        setProducts(doc.id)
        setProdu(doc.data())
       console.log("produ", products,produ);
      })
    }
  } catch (error) {
    console.log("error");
  }
};
/////////////////////////////////////
async function subscribe(event) {
  event.preventDefault();
  console.log(user.uid,window.location.origin);
// const colRef = collection(db, "customers")

// await addDoc(colRef, {
//   price: "123",
//       success_url: window.location.origin,
//       cancel_url: window.location.origin
// });
//   const docRef = await db
//     .collection("customers")
//     .doc(user.id)
//     .collection("checkout_sessions")
//     .add({
//       price: "120",
    
//       success_url: window.location.origin,
//       cancel_url: window.location.origin
//     });

//   //Wait for the CheckoutSession to get attached by the extension
//   docRef.onSnapshot((snap) => {
//     const { sessionId } = snap.data();
//     if (sessionId) {
//       // We have a session, let's redirect to Checkout
//       const stripe = loadStripe("pk_test_51MAWJ3FFJcsNwwzTE0DmY1vlsAAlBRiJwCCrYIFt3lRv202PrpfJkzJBXMIFrCzHgbIqbiHvBibC7xYv6jpnWzyH00LngtgdLl");
//       stripe.redirectToCheckout({ sessionId });
//     }
//   });
 }
///////////Checkout///////////////
// let stripePromise;

// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe("pk_test_51MAWJ3FFJcsNwwzTE0DmY1vlsAAlBRiJwCCrYIFt3lRv202PrpfJkzJBXMIFrCzHgbIqbiHvBibC7xYv6jpnWzyH00LngtgdLl");
//   }

//   return stripePromise;
// };
// const [stripeError, setStripeError] = useState(null);
//   const [isLoading, setLoading] = useState(false);
  
//   const item = {

//     price: "price_1MAy9sFFJcsNwwzTtCUKonHz",
//     quantity: 3
//   };
//   const item2 = {

//     price: "price_1MBG0hFFJcsNwwzTSwGSxTGs",
//     quantity: 2
//   };
//   const checkoutOptions = {
    
//     sessionId: "j0erxlCAIly5xvTenLvo",
//     mode: "payment",
//     successUrl: `${window.location.origin}/payment_success`,
//     cancelUrl: `${window.location.origin}/payment_cancel`
//   };

//   const redirectToCheckout = async () => {
//     setLoading(true);
//     console.log("redirectToCheckout");

//     const stripe = await getStripe();
//      const { error } = await stripe.redirectToCheckout(checkoutOptions);
//     console.log("Stripe checkout error", error);
//     if (error) setStripeError(error.message);
//     setLoading(false);
//   };

//   if (stripeError) alert(stripeError);
  //////////////////////////////////////////////////

  return (
    <section className="store">
      {<Menu /> }
   
      <section className="products">

        {/* {data != undefined ?
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
        } */}
 
         {products != undefined ?
          products.map((d, index) =>
            <div className="product-card">
              <div className={index}>
                <Link className={"linkproduct"} to={d.stripe_metadata_url}>
                  <h2> {d.stripe_metadata_marca} &nbsp;{d.stripe_metadata_modelo} </h2>
                  <img src={d.images} />
                  <p>{d.stripe_metadata_precio}</p>
                </Link>

              </div>
              <button value={index} onClick={addBasket       
              }>Añadir a la cesta</button>
              <button onClick={subscribe}>Subscribe</button>
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
