import  React from "react";
import { Navbar,Nav, Container, Form, Button, FormControl } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";

const NavBari = () => {
    return (
        <Navbar collapseOnselect fixed="Top" expand='xl' bg="#fff">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                         
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Here" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                        
                    </Form>
                    <Nav className="justify-content-end">
                        <Button variant="outline-info">Sign In</Button>&nbsp;
                        <Button variant="info">Sign Up</Button>
                    </Nav> 
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBari;