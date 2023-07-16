import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rotate from "react-reveal/Zoom";

const Cards = (props) => {
    const data = props.products;

    return (
        <Row>
            {data.length > 0 ? (
                data.map((items) => (
                    <Col key={items.id} sm="12" className="mb-2">
                        <Rotate top right>
                            <Card className="d-flex flex-row text-left">
                                <Card.Img
                                    className="img-item  "
                                    variant="top"
                                    src={items.img}
                                />
                                <Card.Body className="text-start">
                                    <Card.Title className="d-flex justify-content-between">
                                        <div> {items.name} </div>
                                        <div className="item-price">
                                            {items.price} dt
                                        </div>
                                    </Card.Title>
                                    <Card.Text className="mt-4">
                                        {items.descreption}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Rotate>
                    </Col>
                ))
            ) : (
                <h1>produit non-disponible</h1>
            )}
        </Row>
    );
};

export default Cards;
