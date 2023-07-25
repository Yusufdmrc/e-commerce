import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Container from "./containers/Container";
import Basket from "./components/Basket/Basket";
import { useSelector } from "react-redux";

function App() {
  const { drawer } = useSelector((state) => state.drawer);
  console.log("drawer", drawer);

  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info:id" element={<Info />} />
          </Routes>
          {drawer && <Basket />}
          <Footer />
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
