import "./Logger.css";
import { useUserAuth } from "../context/userAuthContext";
import { useNavigate } from "react-router";
import { FaUserAlt,FaUserAltSlash } from "react-icons/fa";


export const Logger = () => {
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
         
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <section className="logger">
      {user ? 
        <button className="button-3" onClick={handleLogout}>
        <FaUserAlt className="logged-icon" />Log out
      </button>
      :
      <button className="button-3" onClick={handleLogin}>
        <FaUserAltSlash className="unlogged-icon" />Log in
      </button>

        

      
      }
    </section>
  );
};

