import "./Basket.css";
import { SlBasket,SlBasketLoaded } from "react-icons/sl";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Basket () {

  const [basket, setBasket] = useState(0)
  useEffect(() => {

      setBasket(JSON.parse(localStorage.getItem('basket')))
    

  }, [localStorage.getItem('basket')])

  return (
    <section className="basket">  
    <div>
        <div className="button-3"id="dropdown">
        {basket != 0? 
         <SlBasketLoaded className="basketloaded-icon" />
         :
         <SlBasket className="basket-icon" /> 
         }
        <div class="dropdown-content">
        {basket != 0?
          basket.map((d, index) =>       
          <>
              <div className="basket-product-prev">      
                  <img src={d[3]} />
                  <div>
                  <h3> {d[4]}&nbsp;{d[5]}</h3>
                  <h3> {d[6]} </h3>
                  <p className="ctd"> Cantidad: {d[1]} </p>
                  <p className="precio"> {d[2].toFixed(2)}€ </p>
                  </div>     
                         
              </div>
              <hr></hr>
              </>
          )
          
          :

          <p >Su cesta está vacía</p>
        }
        {basket != 0?
        <Link className={"linkmenu"}to="/cart/shopping">
        <button className="button-3">Ver cesta</button>
        </Link>
        :
        <></>
        }
        </div>
        
        </div>

        </div>
    </section>
  );
};

