import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Auth/PrivateRoute";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { ThemeContext } from "./contexts/UseThemeContext";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import FoodById from "./pages/Services/FoodById";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="app" id={theme} style={{ width: "100%" }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:id"
          element={
            <PrivateRoute>
              <FoodById />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
