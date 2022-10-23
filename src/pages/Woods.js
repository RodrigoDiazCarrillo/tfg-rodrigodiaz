import React from 'react';
import "./Woods.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import img1 from "../img/1093184.jpg";
import img2 from "../img/3657423.jpg";
import img3 from "../img/5089153.jpg";
import img4 from "../img/12278576.jpg";

const Woods = () => {

  return (

    <section className="woods">
      <Menu />
      <div className='content'>
        <div>
          <img src={img1} alt="" className="img1" />
          <p>Llevamos una década preparando las mejores maderas y cuidando los bosques.
             En <i>Mapple Guitars</i> utilizamos maderas procedentes únicamente de Europa y Canadá, ya que
             somos especialistas en maderas de crecimiento medio y rápido como el Arce canadiense, 
             el Abeto europero y Engelmann así como maderas procedentes de tala de cultivo como el nogal, 
             el peral, el olivo o el cerezo.
             Las maderas procedentes de bosques, están certificadas por el <i>Forest Stewardship Council® (FSC®)</i>, 
              que garantiza la sostenibilidad de los bosques plantando como mínimo un árbol por cada otro que se corta.
              De cada pieza de madera que usted compra, se extrae una pequeña tasa de su precio total, destinada a este fin.</p>
        </div>
        <div>
        <img src={img2} alt="" className="img2" />
          <p>Todas nuestras maderas siguen un cuidadoso proceso de secado natural.
            Son almacenadas en exterior pero protegidas y su secado durará como mínimo 3 años.
            Disponemos de maderas procedentes de otros secaderos, algunas de ella con
            hasta 40 años de secado.
            El proceso de corte tiene lugar en el propio bosque, tras el que el tronco descansa intacto durante tres meses.
            Pasado este período, se realiza el despiece y almacenaje para varios años de secado.</p>
        </div>
        <div>
          <img src={img3} alt="" className="img3" />
          <p>El proceso de selección y corte, tiene lugar en nuestra fábrica. Se realizan despieces evitando nudos e 
            imperfecciones para obtener las mejores piezas.Esta tarea es realizada por grandes profesionales mediante un exahustivo
            análisis de la orientación de la veta y las densidades. Posteriormente son clasificadas procedentes
            por calidades y almacenadas hasta su uso en una nueva guitarra.
          
          </p>
        </div>
        <div>
        <img src={img4} alt="" className="img4" />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Woods;
