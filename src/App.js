import { Routes, Route, Router } from "react-router-dom";
import { UserAuthContextProvider } from "./context/userAuthContext";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Store from "./pages/Store";
import Woods from "./pages/Woods";
import About from "./pages/About";

function App() {
  return (

          <UserAuthContextProvider>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/tfg-rodrigodiaz.git" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/woods" element={<Woods />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </UserAuthContextProvider>

  );
}

export default App;

