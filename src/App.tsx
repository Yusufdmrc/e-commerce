import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Info from "./pages/Info/Info";
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import "./i18n.js";

function App() {
  const { drawer } = useSelector((state: RootState) => state.drawer);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/auth" />
        </Routes>
        {drawer && <Basket />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
