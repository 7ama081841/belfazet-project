import React, { useRef, useState } from "react";
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    Row,
} from "react-bootstrap";

import logo from "../images/258477623_4159576937480843_4758011533234558840_n.jpg"

const NavBar = ({ filterBySearsh }) => {

    const [ searsh , setSearsh ] = useState()


    const onSearsh = (e) => {
        e.preventDefault()
        filterBySearsh(searsh);
        setSearsh("")
    }

    return (
        <Row>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">
                        <img className="img-width" src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        ></Nav>
                        <Form className="d-flex">
                            <Form.Control
                                onChange={(e) => setSearsh(e.target.value)}
                                type="text"
                                placeholder="Search"
                                className="searsh-nav"
                                value={searsh}
                            />
                            <Button
                                onClick={onSearsh}
                                className="btn-nav"
                                variant="outline-success"
                            >
                                Search
                            </Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Row>
    );
};

export default NavBar;

// navLink
// <Nav.Link href="#action1">Home</Nav.Link>
//                             <Nav.Link href="#action2">Link</Nav.Link>
//                             <NavDropdown
//                                 title="Link"
//                                 id="navbarScrollingDropdown"
//                             >
//                                 <NavDropdown.Item href="#action3">
//                                     Action
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Item href="#action4">
//                                     Another action
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action5">
//                                     Something else here
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                             <Nav.Link href="#" disabled>
//                                 Link
//                             </Nav.Link>
