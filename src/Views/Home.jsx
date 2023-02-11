import React, { useEffect, useContext } from 'react';
import MiContexto from '../Contexts/MiContexto.jsx';
import Galeria from '../Components/Galeria.jsx';

const Home = () => {

    const { setFotos } = useContext(MiContexto);
    

    useEffect(() => {
        //Callback
        const cargarDatos = async () => {
            const resultado = await fetch('/fotos.json');
            const data = await resultado.json();
            setFotos(data);
        }

        cargarDatos();
    }, []);

  return (
    <>
      <Galeria></Galeria>
    </>
  )
}

export default Home
