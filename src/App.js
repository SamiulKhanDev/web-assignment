import "./App.css";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStateValue } from "./State/StateProvider";
import useFetchAndLoading from "./Hooks/useFetchAndLoading";
import { useEffect } from "react";
import LoadingAnimation from "./Components/LoadingAnimation";
import { logDOM } from "@testing-library/react";
import BottomBanner from "./Components/BottomBanner";

function App() {
  const [loading] = useFetchAndLoading();

  return (
    <div className="h-screen w-screen">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={loading ? <LoadingAnimation /> : <Home />} />
          <Route path="/:category" element={<Product />} />
          <Route path="/:category/:identifyer" element={<Product />} />
        </Routes>
        <BottomBanner />
      </BrowserRouter>

      {/* <Product category={"data"} /> */}
    </div>
  );
}

export default App;
