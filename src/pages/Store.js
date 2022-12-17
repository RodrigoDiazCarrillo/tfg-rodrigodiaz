import { useEffect, useState } from "react";
import "./Store.css";
import { Menu } from "../components/Menu";
import { Footer } from "../components/Footer";
import getActiveProducts from "../functions/getActiveProducts";
import { useUserAuth } from "../context/userAuthContext";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../context/carritoContext";

function Store() {
  const [productos, setProductos] = useState(null);
  const { user } = useUserAuth();
  const { carrito, setCarrito } = useCarritoContext();
  const [ total, setTotal ] = useState();

  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProductos(products);
      console.log("productosHome", products);
    }

    getProducts();
    if (localStorage.getItem('carrito'))
    {
      setCarrito(JSON.parse(localStorage.getItem('carrito')))    
    }
    
  }, []);
       //Contabilizar precio total
       useEffect(() => {
        if(carrito){
          let subtotal = 0
          carrito.map((p) => (
           subtotal=subtotal + (p.price.unit_amount*p.quantity)/100
          ))
          let total = subtotal *1.21;
          setTotal(total);
          localStorage.setItem('total', JSON.stringify(total))
        }
       }, [<Link/>]);

  console.log("carritostore",carrito)
console.log("user",user);
  return (
    <section className="store">
      <Menu carrito={carrito}/> 
     
      <section className="products">
        {productos
          ? productos.map((p) => (
            <Link to={`/producto/${p.id}`}>
              <div key={p.id}>
                <div className="card">
                  <img src={p.images[0]} alt={p.name}/>
                  
                  <div className="text">
                    <h3 >{p.name}&nbsp;{p.stripe_metadata_modelo}</h3>
                    <p >{p.price.unit_amount / 100}€</p>
                  </div>
                </div>

              </div>
            </Link>
          ))
          : null}
      </section>
      <Footer />
    </section>
  );
};

export default Store;
