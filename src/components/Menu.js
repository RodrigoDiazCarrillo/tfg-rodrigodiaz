import "./Menu.css";
import img1 from "../img/logo-blanco.png";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <section className="menu">
      <div className="logo"><img src={img1} alt="" className="pic" /></div>
    
        <nav>
          <p>|</p>
          <Link className="linkmenu" to="/woods">Nuestras maderas</Link>
          <p>|</p>
          <Link className="linkmenu" to="/about">Sobre nosotros</Link>
          <p>|</p>
          <Link className="linkmenu" to="/store">Tienda</Link>
          <p>|</p>
        </nav>
   
    </section>
  );
};