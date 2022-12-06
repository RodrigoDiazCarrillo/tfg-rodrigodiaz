import "./Logger.css";
import { useUserAuth } from "../context/userAuthContext";
import { useNavigate } from "react-router";
import { FaUserAlt, FaUserAltSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Logger () {
  const navigate = useNavigate();
  const { logOut, user } = useUserAuth();
  const handleLogin = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/store");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // Toggle shown state
    setIsShown(current => !current);


  };
  return (
    <section className="logger">
      {user ?
        <div className="logged-menu">
              <div className="usermenu">
            <button className="button-3" id="usermenubtn" onClick={handleClick}> 
            <FaUserAlt className="logged-icon" />
             </button>
            {isShown && (
              <div className="usermenu-content">
                <Link className={"linkuser"}to="/user">Perfil</Link>
                <button className={"linkuserbtn"} onClick={handleLogout}>Salir</button>
              </div>
            )}
            </div>
        </div>
        :
        <button className="button-3" onClick={handleLogin}>
          <FaUserAltSlash className="unlogged-icon" />Log in
        </button>




      }
    </section>
  );
};

