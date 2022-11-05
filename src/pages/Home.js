import React from 'react';
import "./Home.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import { Link} from "react-router-dom";
import img1 from "../img/418831.jpg";
import img2 from "../img/5022456.jpg";

function Home (){

  return (

    <section className="home">
      <Menu />
      <div className="button-container">
      <img src={img1} alt="" className="img1" />
      <div className='div-1'>
      <h3>Mapple Guitars</h3>
      <h2>Creamos sonidos de forma sostenible desde 2012</h2>
      <div className='btn-box'>
      <Link to="/store">
      <button className='button-1'>+ Info</button>
      </Link>
      </div>
      </div>
      </div>
      <div className='div-2'>
      <h3>Diseñamos y creamos instrumentos innovadores y de calidad</h3>
      <h2>10 años de experiencia en el sector</h2>
         <div className='btn-box2'>
      <Link to="/about">
      <button className='button-2'>Sobre nosotros</button>
      </Link>
      </div>
      </div>
      <div className='div-3'>
      <img src={img2} alt="" className="img2" />
      <div className='div-3_text'>
      <h3>Fomentamos la cultura sostenible con maderas <strong>alternativas</strong></h3>
         <div >
         <div className='btn-box3'>
      <Link to="/woods">
      <button className='button-1'>Maderas</button>
      </Link>
      </div>
      </div>
      </div>
      
      </div>

      <p></p>
       <Footer/> 
    </section>
  );
};

export default Home;

