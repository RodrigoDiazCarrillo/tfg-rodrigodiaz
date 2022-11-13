import "./Basket.css";
import { SlBasket } from "react-icons/sl";
import { useEffect, useState } from "react";

export function Basket () {

  const [basket, setBasket] = useState(0)
  useEffect(() => {

      setBasket(JSON.parse(localStorage.getItem('basket')).length)
    

  }, [localStorage.getItem('basket')])


  return (
    <section className="basket">  
    <div>
        <button className="button-3" id="cesta">
          <SlBasket className="basket-icon" />
          <p>{localStorage.getItem('basket') ? 
         basket : "0"}</p>
        </button>
        </div>
    </section>
  );
};

