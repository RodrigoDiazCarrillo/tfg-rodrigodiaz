import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  createCheckoutSession  from "../functions/createCheckoutSession";
import  getProductById  from "../functions/getProductById";
import { useCarritoContext } from "../context/carritoContext";
import { useUserAuth } from "../context/userAuthContext";
import "./Product_page.css";
import { Footer } from "../components/Footer";
import img1 from "../img/logo-blanco.png";
import { useNavigate } from "react-router";

function Product_page() {
  const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
    const [productInfo, setProductInfo] = useState(null);
    const { carrito, setCarrito } = useCarritoContext();
    const { user } = useUserAuth();
    useEffect(() => {
      async function getProductInfo() {
        const product = await getProductById(id);
        console.log("producto", product);
        if (!product) {
          window.location = "/notfound";
        }
        setProductInfo(product);
      }
      getProductInfo();
    }, [id]);
  
    function addToCart() {
      setCarrito([...carrito, productInfo]);
      console.log(carrito);
    }
    function handleBack() {

        navigate("/store");
 
    };
  
    return (

      
      <section className="product">
        <div className="logo"><img src={img1} alt="" className="pic" /></div>
       <div className="product-card">
            <img src={productInfo?.images[0]} alt={productInfo?.name}/>
          <div>
            <h1>{productInfo?.name}</h1>
            <p >{productInfo?.description}</p>
            <div className="buttons" >
              <button className="button-3" onClick={addToCart}>
                AÑADIR A LA CESTA
              </button>
              <button className="button-3" id="buy-product-button"
                onClick={() => {
                  addToCart();
                  createCheckoutSession(user.uid, [{ ...productInfo }]);
                  const btn = document.getElementById("buy-product-button");
                  btn.isDisabled = true;
                  btn.classList.add("cursor-not-allowed");
                  btn.innerText = "Comprando...";
                }}>
                  COMPRAR AHORA
              </button>
            </div>
          </div>
        </div> 
        <button id="back" className="button-3" onClick={handleBack}>Volver</button>
      <Footer/>
      
      </section>
    
 
    );
  }
  
  export default Product_page;
  