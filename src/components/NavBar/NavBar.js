import React from 'react'; 
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'; 
import './NavBar.css';

const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" className="nb">
      <Navbar.Brand id='logo' href="/home">Immovables</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <NavDropdown title={<span className="check">Buy</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/flats">Flats</NavDropdown.Item>
              <NavDropdown.Item href="/land">Land</NavDropdown.Item>
              <NavDropdown.Item href="/bungalows">Bungalows</NavDropdown.Item>
              <NavDropdown.Item href="/apartments">Apartments</NavDropdown.Item>
              <NavDropdown.Item href="/independent_house">Independent House</NavDropdown.Item>
              <NavDropdown.Item href="/out_house">Out House</NavDropdown.Item>
              <NavDropdown.Item href="/pent_house">Pent House</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/seperatedlink">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title={<span className="check">Rent</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/flats">Flats</NavDropdown.Item>
              <NavDropdown.Item href="/land">Land</NavDropdown.Item>
              <NavDropdown.Item href="/bungalows">Bungalows</NavDropdown.Item>
              <NavDropdown.Item href="/apartments">Apartments</NavDropdown.Item>
              <NavDropdown.Item href="/independent_house">Independent House</NavDropdown.Item>
              <NavDropdown.Item href="/out_house">Out House</NavDropdown.Item>
              <NavDropdown.Item href="/pent_house">Pent House</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className="check">Sell</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/land">Land</NavDropdown.Item>
              <NavDropdown.Item href="/bungalows">Bungalows</NavDropdown.Item>
              <NavDropdown.Item href="/apartments">Apartments</NavDropdown.Item>
              <NavDropdown.Item href="/independent_house">Independent House</NavDropdown.Item>
              <NavDropdown.Item href="/out_house">Out House</NavDropdown.Item>
              <NavDropdown.Item href="/pent_house">Pent House</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className="check">Lease</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="/land">Land</NavDropdown.Item>
              <NavDropdown.Item href="/bungalows">Bungalows</NavDropdown.Item>
              <NavDropdown.Item href="/apartments">Apartments</NavDropdown.Item>
              <NavDropdown.Item href="/independent_house">Independent House</NavDropdown.Item>
              <NavDropdown.Item href="/out_house">Out House</NavDropdown.Item>
              <NavDropdown.Item href="/pent_house">Pent House</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span className="check">Help</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="/helpcenter">Help Center</NavDropdown.Item>
              <NavDropdown.Item href="/salesenquiry">Sales Enquiry</NavDropdown.Item>
            </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/signup" id="su">Sign Up</Nav.Link>
          <Nav.Link href="/login" className="l">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
}

export default NavBar;