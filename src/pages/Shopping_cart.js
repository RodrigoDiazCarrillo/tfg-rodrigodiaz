import React, { useState } from "react";
import { useCarritoContext } from "../context/carritoContext";
import { useUserAuth } from "../context/userAuthContext";
import { Link } from "react-router-dom";
import createCheckoutSession from "../functions/createCheckoutSession";

function Shopping_cart() {
  const { carrito } = useCarritoContext();

  const { user } = useUserAuth();
  const [isModal, setIsModal] = useState(false);

  async function login(e) {
    e.preventDefault();
    const correo = e.target.email.value;
    const password = e.target.password.value;
    //const cuenta = await loginEmail(correo, password);
    //console.log(cuenta);
    setIsModal(false);
    //funcion de compra
    createCheckoutSession(user.uid, carrito);
    const btn = document.getElementById("buy-button");
    btn.isDisabled = true;
    btn.classList.add("bg-gray-500");
    btn.classList.add("cursor-not-allowed");
    btn.innerText = "Comprando...";
  }

  function LoginForm() {
    return (
      <form
        onSubmit={(e) => login(e)}

      >
        <input

          type="text"
          name="email"
          placeholder="test@test.com"
        />
        <input

          type="password"
          name="password"
          placeholder="123456"
        />
        <button>
          Iniciar Sesión
        </button>
      </form>
    );
  }

  function isAuthenticated() {
    if (user) {
      // funcion de comprar
      createCheckoutSession(user.uid, carrito);
      const btn = document.getElementById("buy-button");
      btn.isDisabled = true;
      btn.classList.add("bg-gray-500");
      btn.classList.add("cursor-not-allowed");
      btn.innerText = "Comprando...";
    }
    if (!user) {
      // mostrar modal
      setIsModal(true);
    }
  }

  const Modal = () => (
    <div
      id="modal-comprar"
      className={isModal ? "block" : "hidden"}
    >
      <div >
        {" "}
        <span onClick={() => setIsModal(false)}>

        </span>
        <h3>Inicia Sesión para comprar:</h3>
        <LoginForm onSubmit={login} />
      </div>
    </div>
  );

  return (
    <>
      {user? <></> :<Modal /> }

      <h1>Tu carrito:</h1>

      {carrito.length === 0 ? (
        <>
          <p >No hay productos en tu carrito</p>
          <Link to="/store" >
            Volver al inicio
          </Link>
        </>
      ) : (
        carrito?.map((producto) =>
          <div>
            <div>
              <img src={producto.images[0]} alt={producto.name}/>
            </div>
            <div>
              <h3>{producto.name}</h3>
            </div>
            <div>
              <p>${producto.price.unit_amount / 100}</p>
            </div>
          </div>)
      )}
      {carrito?.length > 0 && (
        <>
          <Link to="/store" >
            Volver al inicio
          </Link>
          <button
            id="buy-button"
            onClick={isAuthenticated}>COMPRAR
          </button>
        </>

      )}
    </>
  );
}

export default Shopping_cart;
