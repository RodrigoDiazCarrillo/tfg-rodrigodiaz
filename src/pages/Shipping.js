import { useEffect, useState } from "react";
import "./Shopping.css";
import { Link,useNavigate } from "react-router-dom";
import { RiDeleteBin6Line} from "react-icons/ri";
import img1 from "../img/logo-blanco.png";

function Address() {
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')))
    let navigate = useNavigate();
  const del = (e) => {
    e.preventDefault();
    localStorage.setItem('basket', JSON.stringify([]))
    navigate("/store");
  }
  const more = (e) => {
    let modify = basket
    let value = basket[e.target.value][1]
    modify[e.target.value][1]=value+1
    setBasket(modify)
    localStorage.setItem('basket', JSON.stringify(basket))
    console.log(modify,JSON.parse(localStorage.getItem('basket')));
    window.location.href = window.location.href
  }
  const less = (e) => {
    let modify = basket
    let value = basket[e.target.value][1]
    if (modify[e.target.value][1]>1){
      modify[e.target.value][1]=value-1
      setBasket(modify)
    localStorage.setItem('basket', JSON.stringify(basket))
    console.log(modify,JSON.parse(localStorage.getItem('basket')));
    window.location.href = window.location.href
    }
  }
  const deleteProduct = (e) => {
    let values = JSON.parse(localStorage.getItem('basket'))
    let newvalue = values.filter((value)=>value[0] == e.target.value)
    setBasket(newvalue)
    console.log(basket);
    }
    const continuar = (e) => {
      navigate("/cart/payment");
      }
  
  return (
    <section className="shopping">
       <header>
       <div className="logo">
        <img src={img1} alt="" className="pic" />
        <div className="shopping-route">
        <div className="current"><h3>1</h3><h3>Cesta</h3></div>
        <div className="current"><h3>2</h3><h3>Dirección de envío</h3></div>
        <div className="current"><h3>3</h3><h3>Opciones de entrega</h3></div>
        <div><h3>4</h3><h3>Método de pago</h3></div>
      </div>
      </div>
        
        <hr></hr>
      </header>
        <section className="content">
        <h2>Dirección de envío</h2>
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
                        <button value={index} onClick={less} className="button-3">-</button>
                        <p className="ctd">{d[1]}</p>
                 
                        <button value={index} onClick={more} className="button-3">+</button>
                    </div>
                    <button value={index} onClick={deleteProduct} className="button-3">
                      <RiDeleteBin6Line /></button>
                  </div>
              </div>
          )
        }
        <div className="buttons">
        <button className="button-3" onClick={del}
        >Vaciar cesta</button>
        <Link className={"linkmenu"}to="/store">
        <button className="button-3">Seguir comprando</button>
        </Link>
        </div>
        </div>
        <div className="detail">
            <h3>Resumen</h3>
            <h4>Subtotal</h4>
            <hr></hr>
            <h2>Total</h2>
            <button className="button-3" id="save-cont" onClick={continuar}>Guardar y continuar</button>
        </div>
        </div>
        </section>
        
        <hr></hr>
        <h1>Footer</h1>
    </section>
  );
};

export default Address;

