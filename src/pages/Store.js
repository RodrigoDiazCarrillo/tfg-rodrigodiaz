import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";

const Store = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div >
        Hello Welcome <br />
      </div>
      <div >
        <button onClick={handleLogout}>
          Log out
        </button>
      </div>
    </>
  );
};

export default Store;

