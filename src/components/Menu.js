import "./Menu.css";
import img1 from "../img/logo-blanco.png";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import { Logger } from "./Logger";
export const Menu = () => {

  return (
    <section className="menu">
      <div>
      <div className="logo"><img src={img1} alt="" className="pic" /></div>
      <Logger className="logger"/>
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