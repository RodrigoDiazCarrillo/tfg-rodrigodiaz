import "./Basket.css";
import { SlBasket } from "react-icons/sl";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Basket () {
  const [basket, setBasket] = useState([])

 
  useEffect(() => {
 
    setBasket(JSON.parse(localStorage.getItem('basket')))
  }, [localStorage.getItem('basket')])
  return (
    <section className="basket">  
    <div>
        <button className="button-3">
          <SlBasket className="basket-icon" />
          <p>{basket ? basket.length : "0"}</p>
        </button>
        </div>
    </section>
  );
};

