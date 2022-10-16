import React from 'react';
import "./Home.css";
import { Carousel } from "../components/Carousel";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import img1 from "../img/418831.jpg";

const Home = () => {

  return (

    <section className="home">
      <Menu />
      <Carousel />
      <div className='carousel-margin'></div>
      
      <div className="button-container">
      <img src={img1} alt="" className="img1" />
      <div>
      <h2>Mapple Guitars</h2>
      <h2>Desde 2012 creando sonidos de forma sostenible</h2>
      <button>Más info</button>
      </div>
      </div>
      
      
      <p></p>
       <Footer/> 
    </section>
  );
};

export default Home;

