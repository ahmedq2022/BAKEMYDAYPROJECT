import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import { Box } from "@mui/material";
import Product from "./Components/Products/Product";
import Profile from "./Components/Profile/Profile";
import { CartProvider } from "react-use-cart";
import Cartpage from "./Components/Cart/Cart";
import { Myorders } from "./Components/My Orders/Myorder";
import Productlist from "./Components/Admin/Products/Product";
import Updateproduct from "./Components/Admin/Products/Updateproduct";
import Addproduct from "./Components/Admin/Products/Addproduct";
import Userlist from "./Components/Admin/Users/Users";
import Adduser from "./Components/Admin/Users/Adduser";
import Updateuser from "./Components/Admin/Users/Updateuser";
import { Userorders } from "./Components/Admin/Orders/Userorders";
import Updateprofile from "./Components/Profile/updateprofile";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import Customorder from "./Components/Custom Order/Customorder";
import Customdetails from "./Components/Custom Order/Customdetails";

function App() {
  return (
    <Box>
      <CartProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/home-screen" element={<Product />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/cart-page" element={<Cartpage />} />
          <Route exact path="/my-orders" element={<Myorders />} />
          <Route exact path="/adminhome" element={<Productlist />} />
          <Route exact path="/updateproduct" element={<Updateproduct />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/viewusers" element={<Userlist />} />
          <Route exact path="/adduser" element={<Adduser />} />
          <Route exact path="/updateuser" element={<Updateuser />} />
          <Route exact path="/userorders" element={<Userorders />} />
          <Route exact path="/updateprofile" element={<Updateprofile />} />
          <Route exact path="/customorder" element={<Customorder />} />
          <Route exact path="/customdetail" element={<Customdetails />} />
        </Routes>
      </CartProvider>
    </Box>
  );
}

export default App;
