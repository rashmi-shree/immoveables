import React from 'react'; 
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup} from 'react-bootstrap'; 
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="hii">
        <Navbar.Brand href="/home">Immovables</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Buy" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/anotheraction">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/something">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/seperatedlink">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rent" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/anotheraction">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/something">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/seperatedlink">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sell" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/anotheraction">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/something">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/seperatedlink">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tools&Advices" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/anotheraction">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/something">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/seperatedlink">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action">Action</NavDropdown.Item>
              <NavDropdown.Item href="/anotheraction">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/something">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/seperatedlink">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">SignIn</Button>
        </ButtonGroup>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavBar;