import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DetallesPokemon from "./views/DetallesPokemon.jsx";
import Pokemones from "./views/Pokemones.jsx";
import Home from "./views/Home.jsx";
import Barra from "./components/Barra.jsx";
import imagen from "./assets/img/mala.png";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Barra></Barra>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Pokemones" element={<Pokemones></Pokemones>}></Route>
        <Route path="/Pokemones/:id" element={<DetallesPokemon></DetallesPokemon>}></Route>
        <Route path="*" element={<div className="rutaMala">
        <img src={imagen} alt='crash'/>
          <h1>¡Lo siento, La ruta no existe!</h1>
          </div>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
