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
  const [productInfo, setProductInfo] = useState(null);
  const { carrito, setCarrito } = useCarritoContext();

  useEffect(() => {
    async function getProducts() {
      const products = await getActiveProducts();
      setProductos(products);
      //console.log("productosHome", products);
    }

    getProducts();
  }, []);

console.log("carrito:",carrito);
  return (
    <section className="store">
      {<Menu /> }
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
