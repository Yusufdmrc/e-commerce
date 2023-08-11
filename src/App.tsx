import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import "./i18n.js";
import Auth from "./pages/Auth/Auth.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.js";
import Products from "./pages/Products/Products.js";
import ProductDetails from "./pages/ProductDetails/ProductDetails.js";
function App() {
  const { drawer } = useSelector((state: RootState) => state.drawer);
  const [users, setUsers] = useState<string | null>(null);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       setUsers(users);
  //     } else {
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} users={users} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
        {drawer && <Basket />}
        <Footer />
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={5000} theme="light" />
    </div>
  );
}

export default App;
