import "./Menu.css";
import img1 from "../img/logo-blanco.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import { useState, useEffect } from "react";
import { Basket } from "./Basket";
import { Logger } from "./Logger";
import { useNavigate } from "react-router";

//Los parámetros de entrada de esta función son props, se lo envía la página store
export function Menu ({carrito}) {
  
  const navigate = useNavigate();
  function goToCart() {
    navigate("/cart/shopping");

};


  return (
    <section className="menu">

    
   
      <div>
      <div className="logo"><img src={img1} alt="" className="pic" /></div>
      <Logger className="logger"/>
     
      <div className="basket_button">
      {window.location.pathname != "/" 
      && window.location.pathname != "/woods"
      && window.location.pathname != "/about"?
      <button className="button-3" >
        {carrito? <Basket className="lleno"/>:<Basket/>}
        </button>
      : <></>
      }
      </div>
      </div>
      <nav>
        
        <Link className={"linkmenu"}to="/"><AiFillHome /></Link>
        <p>|</p>
        <Link className={"linkmenu"} to="/woods">Nuestras maderas</Link>
        <p>|</p>
        <Link className={"linkmenu"} to="/about">Sobre nosotros</Link>
        <p>|</p>
        <Link className={"linkmenu"}  to="/store">Tienda</Link>
        <p>|</p>
      </nav>
    

    </section>
  );
};