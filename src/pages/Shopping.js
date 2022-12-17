import { useEffect, useState } from "react";
import "./Shopping.css";
import { Link,useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import img1 from "../img/logo-blanco.png";
import { Footer } from "../components/Footer";


function Shopping() {
    const { user } = useUserAuth();
    let navigate = useNavigate();
    const [ carrito, setCarrito ] = useState([]);
    const [ total, setTotal ] = useState();
 
    useEffect(() => {
      if (localStorage.getItem('carrito'))
      {
        setCarrito(JSON.parse(localStorage.getItem('carrito')))
        console.log("cesta", carrito);
      }else{
        setCarrito(carrito)
      }
      
    }, []);
        //Contabilizar precio total
        useEffect(() => {
          if(carrito){
            let total = 0
            carrito.map((p) => (
             total=total + (p.price.unit_amount*p.quantity)/100
            ))
            setTotal(total);
            localStorage.setItem('total', JSON.stringify(total))
          }
         }, [<button></button>]);

   const del = (e) => {
    localStorage.removeItem("carrito");
    setCarrito(carrito);
    navigate("/store");
  }
  
  const more = (e) => {
    window.location.reload(true);
    let value = e.target.value;
    var index = carrito.map(p => p.price.product).indexOf(value)
    let cantidad = carrito[index].quantity
    carrito[index].quantity = cantidad +1;
    console.log(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }
  const less = (e) => {
    
    let value = e.target.value;
    var index = carrito.map(p => p.price.product).indexOf(value)
    if (carrito[index].quantity >1){
    let cantidad = carrito[index].quantity
    
      carrito[index].quantity = cantidad -1;
    console.log(carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    window.location.reload(true);
    }
    else if(carrito.length>1){
      window.location.reload(true);
      let value = e.target.value;
      var index = carrito.map(p => p.price.product).indexOf(value)
      let values = carrito;
       values.splice(index, 1)
      
      setCarrito(values)
      console.log(carrito);
      localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    else if(carrito.length==1){
      localStorage.removeItem("carrito");
    navigate("/store");
    }
    
  }
  const deleteProduct = (e) => {
    if(carrito.length>1){
    window.location.reload(true);
    let value = e.target.value;
    var index = carrito.map(p => p.price.product).indexOf(value)
    let values = carrito;
     values.splice(index, 1)
    
    setCarrito(values)
    console.log("delete",carrito);
    localStorage.setItem('carrito', JSON.stringify(carrito))
    }
    else if(carrito.length==1){
      setCarrito(0)
      localStorage.removeItem("carrito");
    navigate("/store");
    }
    }
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
        <h3>artículos</h3>
        <div>

          <div className="product-containter">
            {carrito.map((p) => (
              <div className="shopping-product-prev">
                <img src={p.images[0]} alt={p.name} />
                <div>
                <h1>{p.name}&nbsp;-&nbsp;{p.stripe_metadata_modelo}</h1>
                <p className="ctd"> Cantidad: {p.quantity} </p>
                <p className="precio">{p.price.unit_amount / 100}€</p>
                </div>
                <div id="prod-buttons">  
                    <div id="moreless">
                       {/* Botón - */}
                        <button className="button-3" value={p.price.product} onClick={less}>-</button>
                        <p className="ctd">{p.quantity}</p>
                         {/* Botón + */}
                        <button className="button-3" value={p.price.product} onClick={more}>+</button>
                    </div>
                    {/* Botón borrar */}
                    <button  className="button-3" value={p.price.product} onClick={deleteProduct}>
                   X
                      </button>
                  </div>
               
              </div>
            ))}

        <div className="buttons">
          {/* Botón vaciar */}
        <button className="button-3" onClick={del}>Vaciar cesta</button>
        <Link className={"linkmenu"}to="/store">
        <button className="button-3">Seguir comprando</button>
        </Link>
        </div>
        </div>
        <div className="detail">
            {carrito.map((p) => (
              <>
              <p><strong>Subtotal:</strong>&nbsp;{p.price.unit_amount/100*p.quantity}€({p.price.unit_amount/100}€&nbsp;x&nbsp;{p.quantity}ud.)</p>
              <p><strong>IVA:</strong>&nbsp;{(p.price.unit_amount/100*0.21).toFixed(2)}€</p>
              </>
            ))}
        
            <hr></hr>
            <h2>Total: {(JSON.parse(localStorage.getItem('total'))*1.21).toFixed(2)}€</h2>
            <button className="button-3" id="save-cont" onClick={continuar}>Guardar y continuar</button>
        </div>
        </div>
        </section>
        
        <hr></hr>
        <Footer/>
    </section>
  );
};

export default Shopping;


