import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Info from "./pages/Info/Info";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Basket from "./components/Basket/Basket";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

function App() {
  const { drawer } = useSelector((state: RootState) => state.drawer);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info/:id" element={<Info />} />
        </Routes>
        {drawer && <Basket />}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
