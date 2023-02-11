
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MiContexto from './Contexts/MiContexto.jsx';
import Detalle from './Views/Detalle.jsx';
import Home from './Views/Home.jsx';
import Login from './Views/Login.jsx';
import Barra from './Components/Barra.jsx';

function App() {
  const [conectado, setConectado] = useState(false);
  const [fotos, setFotos] = useState([]);

  const estadoGlobal = {conectado, setConectado, 
                        fotos, setFotos}

  

  //Compartimos el contexto (estado global)
  return (
    <div className="App">
      <MiContexto.Provider value={estadoGlobal}>
        {(conectado) &&  <Barra></Barra>}
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            {(conectado) &&  <>
              <Route path="/home" element={<Home></Home>}></Route>
              <Route path="/detalle" element={<Detalle></Detalle>}></Route>
            </>}
            <Route path="*" element={<Login></Login>}></Route>
          </Routes>
        </BrowserRouter>
      </MiContexto.Provider>
    </div>
  );
}

export default App;
