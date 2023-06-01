import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ filterByCategory, allCat }) => {

    const onFilter = (cat) => filterByCategory(cat);

    return (
        <Row className="my-2">
            <Col sm="12" className="d-flex justify-content-center ">
                {allCat.length ? (
                    allCat.map((cat , key) => (
                        <div key={key} >
                            <button
                                onClick={() => onFilter( cat )}
                                className="btn mx-2"
                            >
                                { cat }
                            </button>
                        </div>
                    ))
                ) : (
                    <h4>catégorie non disponible</h4>
                )}
            </Col>
        </Row>
    );
};

export default Category;
