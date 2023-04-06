import { Navbar } from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto.js/Contact";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./components/context/CartContext";
import Cart from "./components/Cart/Cart";



function App() {

  return (
    <CartProvider>

      <BrowserRouter>

        < Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:categoria.Id" element={< ItemListContainer />} />
          <Route path="/detail/:itemId" element={< ItemDetailContainer />} />
          <Route path="/cart" element={< Cart />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Checkout" element={< Chekout />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <div className="container">
          {/*<button className="btn-btn primary">Click here</button>*/}
          <Button variant="info">Click here</Button>
        </div>


      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
