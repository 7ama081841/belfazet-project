import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
    return (
        <Row className="d-flex justify-content-center">
            <Col>
                <h1 className="font">BelFazet</h1>
                <div className="under-line"></div>
            </Col>
        </Row>
    );
};

export default Header;
