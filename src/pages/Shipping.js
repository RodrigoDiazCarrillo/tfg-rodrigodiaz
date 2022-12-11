import { useEffect, useState } from "react";
import "./Shopping.css";
import { Link,useNavigate } from "react-router-dom";
import img1 from "../img/logo-blanco.png";
import { useCarritoContext } from "../context/carritoContext";
import  createCheckoutSession  from "../functions/createCheckoutSession";
import { useUserAuth } from "../context/userAuthContext";

function Address() {
//Bloquear retroceso de página
// window.location.hash="no-back-button";
// window.location.hash="Again-No-back-button";
// window.onhashchange=function(){window.location.hash="no-back-button";}
    const { user } = useUserAuth();
    const { carrito, setCarrito } = useCarritoContext();
    let navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem('carrito'))
      {
        setCarrito(JSON.parse(localStorage.getItem('carrito')))
        console.log("cesta", carrito);
      }
      
    }, []);

    const continuar = (e) => {
      createCheckoutSession(user.uid, carrito );
      }
  
  return (
    <section className="shopping">
       <header>
       <div className="logo">
        <img src={img1} alt="" className="pic" />
        </div>
        <div className="shopping-route">
        <div className="current"><p>1</p><h3>Cesta</h3></div>
        <div className="current"><p>2</p><h3>Dirección de envío</h3></div>
        <div className="current"><p>3</p><h3>Opciones de entrega</h3></div>
        <div><p>4</p><h3>Método de pago</h3></div>
      
      </div>
        
        <hr></hr>
      </header>
        <section className="content">
        <h2>Método de envío</h2>
        <div>
        <div className="shipping-container">
        <div>
        <input type="radio" value="tienda" name="gender" /> 
        <p>Recogida en tienda</p>
        </div>
        <div>
        <input type="radio" value="gratis" name="gender" /> 
        <p>Gratis</p>
        </div>
        <div>
        <input type="radio" value="seur" name="gender" /> 
        <p>Seur</p>
        </div>
        <div>
        <input type="radio" value="correos" name="gender" /> 
        <p>Correos</p>
        </div>
      
        </div>
        <div className="detail">
            <h3>Resumen: {JSON.parse(localStorage.getItem('total'))}€</h3>
            <h4>Subtotal: {JSON.parse(localStorage.getItem('total'))}€</h4>
            <h4>Envío:</h4>
            <hr></hr>
            <h2>Total: {JSON.parse(localStorage.getItem('total'))}€</h2>
            <button className="button-3" id="save-cont" onClick={continuar}>Guardar y continuar</button>
        </div>
        </div>
        </section>
        
        <hr></hr>
        <h1>Footer</h1>
    </section>
  );
};

export default Address;

