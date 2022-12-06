import { Routes, Route} from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import { CarritoContextProvider } from "./context/carritoContext";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Store from "./pages/Store";
import Woods from "./pages/Woods";
import About from "./pages/About";
import Shopping from "./pages/Shopping";
import Shipping from "./pages/Shipping";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import Userboard from "./pages/Userboard";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Product_page from "./pages/Product_page";


function App() {
  return (

          <UserAuthContextProvider>
            <CarritoContextProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/woods" element={<Woods />} />
              <Route path="/about" element={<About />} />
              <Route path="/user" element={<Userboard/>} />
              <Route path="producto/:id" element={<Product_page />} />
              <Route path="/cart/shopping" element={<Shopping/>} />
              <Route path="/cart/address" element={<Address/>} />
              <Route path="/cart/shipping" element={<Shipping/>} />
              <Route path="/cart/payment" element={<Payment/>} />
              <Route path="/payment_cancel" element={<Cancel/>} />
              <Route path="/payment_success" element={<Success/>} />

            </Routes>
            </CarritoContextProvider>
          </UserAuthContextProvider>

  );
}

export default App;
