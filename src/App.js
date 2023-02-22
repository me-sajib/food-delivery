import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Auth/PrivateRoute";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { ThemeContext } from "./contexts/UseThemeContext";
import AllFood from "./pages/AllFood/AllFood";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import BecameADeliveryMan from "./pages/BecameADeliveryMan/BecameADeliveryMan";
import AddProducts from "./pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Orders from "./pages/Dashboard/Orders/Orders";
import PendingOrder from "./pages/Dashboard/PendingOrder/PendingOrder";
import Products from "./pages/Dashboard/Products/Products";
import SuccessfulOrder from "./pages/Dashboard/SuccessfulOrder/SuccessfulOrder";
import FoodById from "./pages/Services/FoodById";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="app" id={theme} style={{ width: "100%" }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<PrivateRoute><FoodById /></PrivateRoute>} />
        <Route path="all-food" element={<AllFood />} />
        <Route path="became-a-delivery-man" element={<BecameADeliveryMan />} />
        {/* dashboard routes */}
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="orders" element={<Orders />} />
          <Route path="successfulOrder" element={<SuccessfulOrder />} />
          <Route path="pendingOrder" element={<PendingOrder />} />
          <Route path="products" element={<Products />} />
          <Route path="addProduct" element={<AddProducts />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
