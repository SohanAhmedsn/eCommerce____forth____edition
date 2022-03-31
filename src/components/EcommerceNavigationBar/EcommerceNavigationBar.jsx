import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import  './EcommerceNavigationBar.css';
class EcommerceNavigationBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Product</Nav.Link>
        <NavDropdown title="Place" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#">Dhaka</NavDropdown.Item>
          <NavDropdown.Item href="#">Chittagong</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">
          Head Office
          </NavDropdown.Item>
        </NavDropdown>
         <Nav.Link href="#action1">About Us</Nav.Link>
         <Nav.Link href="#action1">Contact Us</Nav.Link>
       
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
            </div>
        );
    }
}

export default EcommerceNavigationBar;