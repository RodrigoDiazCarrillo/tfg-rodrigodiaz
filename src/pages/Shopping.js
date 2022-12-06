import { useEffect, useState } from "react";
import "./Shopping.css";
import { Link,useNavigate } from "react-router-dom";
import { useCarritoContext } from "../context/carritoContext";
import { useUserAuth } from "../context/userAuthContext";
import img1 from "../img/logo-blanco.png";
import img2 from "../img/basura.png";

function Shopping() {
  const { user } = useUserAuth();
  const { carrito, setCarrito } = useCarritoContext();
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
    if (basket.length >1){
    let values = JSON.parse(localStorage.getItem('basket'))
    
    console.log(values[e.target.value]); 
    let newvalue = values.filter((value)=>value[0] != e.target.value)
    setBasket(newvalue)
    }
    else{
      e.preventDefault();
      localStorage.setItem('basket', JSON.stringify([]))
      navigate("/store");
    }
    }

    useEffect(() => {
      console.log(basket);
      localStorage.setItem('basket', JSON.stringify(basket))
      console.log("localStorage",JSON.parse(localStorage.getItem('basket')));
    }, [basket])

    useEffect(()=>{
      let total =0;
      for (let i=0; i<basket.length; i++){
        total = total+basket[i][2]*basket[i][1]
      }
      localStorage.setItem('total', JSON.stringify(total.toFixed(2)))
      console.log("total",JSON.parse(localStorage.getItem('total')));
    },[more,less])
   

  const continuar = (e) => {
      user ? navigate("/cart/address") : navigate("/login")
      
      }

  return (

    <section className="shopping">
      <header>
      <div className="logo">
        <img src={img1} alt="" className="pic" />
      </div>
      <div className="shopping-route">
        <div className="current"><p>1</p><h3>Cesta</h3></div>
        <div><p>2</p><h3>Dirección de envío</h3></div>
        <div><p>3</p><h3>Opciones de entrega</h3></div>
        <div><p>4</p><h3>Método de pago</h3></div>
      </div>
      
        
        <hr></hr>
      </header>
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
                  <p className="precio"> {d[2].toFixed(2)}€ </p>
                  </div>     
                  <div id="prod-buttons">  
                    <div id="moreless">
                        <button value={index} onClick={less} className="button-3">-</button>
                        <p className="ctd">{d[1]}</p>
                 
                        <button value={index} onClick={more} className="button-3">+</button>
                    </div>
                    <button value={index} onClick={deleteProduct} className="button-3">
                    <img src={img2} alt="" className="pic" />
                      </button>
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
            <h3>Resumen: {JSON.parse(localStorage.getItem('total'))}€</h3>
            <h4>Subtotal: {JSON.parse(localStorage.getItem('total'))}€</h4>
            <hr></hr>
            <h2>Total: {JSON.parse(localStorage.getItem('total'))}€</h2>
            <button className="button-3" id="save-cont" onClick={continuar}>Guardar y continuar</button>
        </div>
        </div>
        </section>
        
        <hr></hr>
        <h1>Footer</h1>
    </section>
  );
};

export default Shopping;


