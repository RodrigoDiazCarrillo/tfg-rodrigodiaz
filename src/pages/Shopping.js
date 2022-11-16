import { useEffect, useState } from "react";
import "./Shopping.css";
import { Link } from "react-router-dom";

function Shopping() {
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')))

 
  return (
    <section className="shopping">
        <h1>LOGO ------1------2------3-------4-------5</h1>
        <hr></hr>
        <section className="content">
        <h2>Mi cesta</h2>
        <h3>{basket.length} artículos</h3>
        <div>
        <div className="product-containter">
      {
          basket.map((d, index) =>       

              <div className="shopping-product-prev">      
                  <img src={d[3]} />
                  <div>
                  <p> {d[4]}&nbsp;{d[5]} &nbsp;{d[6]}</p>
                  <p>  </p>
                  <p className="ctd"> Cantidad: {d[1]} </p>
                  <p className="precio"> {d[2]}€ </p>
                  </div>     
                  <div id="prod-buttons">
                    
                    <div id="moreless">
                        <button className="button-3">-</button>
                        <input></input>
                        <button className="button-3">+</button>
                    </div>
                    <button className="button-3">del</button>
                  </div>
                         
              </div>

  
          )
       
        }
        <div className="buttons">
        <button>Vaciar cesta</button>
        <Link className={"linkmenu"}to="/store">
        <button>Seguir comprando</button>
        </Link>
        </div>
        </div>
        <div className="detail">
            <h3>Resumen</h3>
            <h4>Subtotal</h4>
            <hr></hr>
            <h2>Total</h2>
            <button className="button-3" id="save-cont">Guardar y continuar</button>
        </div>
        </div>
        </section>
        
        <hr></hr>
        <h1>Footer</h1>
    </section>
  );
};

export default Shopping;


