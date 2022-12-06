import "./Menu.css";
import img1 from "../img/logo-blanco.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useState } from "react";
import { Basket } from "./Basket";
import { Logger } from "./Logger";
import { useNavigate } from "react-router";

export function Menu () {
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
      <button className="button-3" onClick={goToCart}><BsFillBasket2Fill/></button>
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