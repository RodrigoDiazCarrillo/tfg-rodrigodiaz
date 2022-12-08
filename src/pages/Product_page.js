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
    const [productInfo, setProductInfo] = useState(null);
    //const [ carrito, setCarrito ] = useState([]);
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

      // //Si el producto está anadido se incrementa la cantidad
      if(carrito !=0){
   
        if (carrito.find(e => e.price.product === productInfo.price.product)){
          //Encuentra el indice del producto dentro del carro
          var index = carrito.map(p => p.price.product).indexOf(productInfo.price.product)
          let cantidad = carrito[index].quantity
          carrito[index].quantity = cantidad +1;
          console.log("index",index,carrito);
          localStorage.setItem('carrito', JSON.stringify(carrito))
          alert(`${productInfo.name} ${productInfo?.stripe_metadata_modelo} - Cantidad: ${carrito[index].quantity}`)
        }
        else if(carrito == 0){
console.log("ok");
        }
      else {
       setCarrito([...carrito, productInfo]);
       //setCarrito(current => [...current,productInfo ])
       alert(`Se ha añadido a su cesta: ${productInfo.name}`)
      
      console.log("carro",carrito);

      }
    }
      else{
        console.log("no hay carrito");      
        setCarrito([productInfo]);
        localStorage.setItem('carrito', JSON.stringify(carrito))     
       alert(`Se ha añadido a su cesta: ${productInfo.name}`)   
      console.log("carro",carrito);   
      }
    }

    function handleBack() {
      localStorage.setItem('carrito', JSON.stringify(carrito))   
        navigate("/store");
 
    };
  console.log("roductinfo",productInfo);
    return (

      
      <section className="product">
        <div className="logo"><img src={img1} alt="" className="pic" /></div>
        
       <div className="product-card">
        
            <img src={productInfo?.images[0]} alt={productInfo?.name}/>
          <div>
            {/* <h1>{productInfo?.price.product}/cantidad: {productInfo?.quantity}</h1> */}
            <h1>{productInfo?.name}&nbsp;-&nbsp;{productInfo?.stripe_metadata_modelo}</h1>
            <h1 className="price" >Precio: {productInfo?.price.unit_amount / 100}€</h1>
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
  