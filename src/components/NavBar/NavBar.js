import React from 'react'; 
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'; 

const NavBar = () => {
    return (
       <Navbar bg="dark" expands="lg">
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
               <Nav>
                   <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/">Home</NavLink>
                   <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/department">Department</NavLink>
                   <NavLink className="d-inline p-2 bg-dark text-white"
                   to="/employee">Employee</NavLink>
               </Nav>
           </Navbar.Collapse>
       </Navbar>
    );
}

export default NavBar;