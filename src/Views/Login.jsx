import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MiContexto from '../Contexts/MiContexto';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [correo, setCorreo] = useState("");
    const [clave, setClave] = useState("");
    const navigate = useNavigate();
    
    //Consumimos el contexto
    //De este lado va lo que necesito  ------- De este lado va el contexto que lo tiene
    const { setConectado } = useContext(MiContexto);

    function validarPassword(e) {
        e.preventDefault();
        if (clave === '123456') {
            setConectado(true);
            navigate("/home");
        }
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" name="correo" placeholder="" onChange={(e) => setCorreo(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="clave" placeholder="Password" onChange={(e) => setClave(e.target.value)} />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={(e) => validarPassword(e)}>
        Conectar
      </Button>
    </Form>
  );
}


export default Login
