import "./Footer.css";
import img1 from "../img/logo-blanco.png";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";


export const Footer = () => {
  return (
    <section className="footer">
      <div className="logo-footer"><img src={img1} alt="" className="pic" /></div>
      <div className="content-footer">
        <div className="social">
          <a href="https://www.facebook.com/" target="_blank"><AiFillFacebook /></a>
          <a href="https://twitter.com/?lang=es" target="_blank"><AiFillTwitterCircle /></a>
          <a href="https://www.instagram.com/" target="_blank"><AiFillInstagram /></a>
        </div>
        <div className="links">
          <Link className="linkmenu" to="/woods">Nuestras maderas</Link>
          <Link className="linkmenu" to="/about">Sobre nosotros</Link>
          <Link className="linkmenu" to="/store">Tienda</Link>
        </div>
        <div className="links">
          <Link className="linkmenu" to="/woods">Nuestras maderas</Link>
          <Link className="linkmenu" to="/about">Sobre nosotros</Link>
          <Link className="linkmenu" to="/store">Tienda</Link>
        </div>
      </div>
    </section>
  );
};