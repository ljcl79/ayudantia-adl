import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MiContexto from '../Contexts/MiContexto';

const Galeria = () => {
    const { fotos } = useContext(MiContexto);
    
    return (
        fotos.photos?
        <Row>
            {fotos.photos.map((foto) => {
                return (
                    <Col key={foto.id}>
                        <Card style={{ marginTop: '20px', width: '18rem', height: '30vh', backgroundColor:'transparent', backgroundImage:`url(${foto.src.tiny})`, backgroundSize: 'cover'}}>
                             <Card.Body>
                                <Card.Title style={{fontSize: 'small', color: 'white'}}>{foto.alt}</Card.Title>
                                <Card.Text>
                                    {foto.photographer}
                                </Card.Text>
                                <Button variant="primary">Ver detalle</Button>
                            </Card.Body>
                        </Card>
                    </Col>)
            })}
        </Row>:
        <div>
            Cargando datos
        </div>
    )
}

export default Galeria
