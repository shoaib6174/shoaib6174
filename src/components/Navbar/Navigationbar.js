import React from 'react';
import { Navbar,Nav,Button } from 'react-bootstrap';
const Navigationbar = () => {
    return (
        <div className="navibar">
            <Navbar  bg="dark" expand="lg">
           <Navbar.Brand href="/"> <Button variant="dark"><strong>Home</strong></Button></Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
            <Nav.Link href="#about"><Button variant="secondary">About Me</Button></Nav.Link>
            <Nav.Link href="#projects"> <Button variant="secondary">  Projects</Button></Nav.Link>
            <Nav.Link href="#blog"><Button variant="secondary">Blogs</Button></Nav.Link>
            <Nav.Link href="#contact"><Button variant="secondary">Contact Me</Button></Nav.Link>


            </Nav>
            </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Navigationbar;