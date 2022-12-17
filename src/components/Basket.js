import "./Basket.css";
import { BsFillBasket2Fill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/carritoContext";

export function Basket () {
  const { carrito, setCarrito } = useCarritoContext();
 
  // useEffect(() => {
  //   if (localStorage.getItem('carrito'))
  //   {
  //     setCarrito(JSON.parse(localStorage.getItem('carrito')))
  //     console.log("cesta", carrito);
  //   }
    
  // }, [localStorage.getItem('carrito')]);
 useEffect(() => {

    if (localStorage.getItem('carrito'))
    {
      setCarrito(JSON.parse(localStorage.getItem('carrito')))    
    }
    else{
      setCarrito([])
    }
    
  }, []);

  return (
    <section className="basket">  
    <div>
        <div className="button-3"id="dropdown">
        {carrito.length !== 0? 
         <BsFillBasket2Fill className="basketloaded-icon" />
         :
         <BsFillBasket2Fill className="basket-icon" /> 
         }

        <div className="dropdown-content">
        {carrito !=0?
        <div className="basket-card">
     
        {carrito.map((p) => (
        
              <div key={p.id}>
                <div className="card">
                  <img src={p.images[0]} alt={p.name}/>
                  <div className="text">
                    <h3 >{p.name}&nbsp;{p.stripe_metadata_modelo}</h3>
                  </div>
                </div>

              </div>
           
          ))
          }
        
        <Link className={"linkmenu"}to="/cart/shopping">
        <button className="button-3">Ver cesta</button>
        </Link>
        </div>
        :
        <p id="vacia">Su cesta está vacía</p>
        }
        </div>
        
        </div>

        </div>
    </section>
  );
};

