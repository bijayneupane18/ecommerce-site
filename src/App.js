import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart" element={<CardsDetails />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
