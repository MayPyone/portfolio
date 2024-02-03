import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/maypyone.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])


  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <div class="navlink">  <Nav.Link href="#home" className='navbar-link nav'>Home</Nav.Link>
            </div>
            <div class="navlink"><Nav.Link href="#projects" className=' navbar-link nav '>Projects</Nav.Link>
             </div>
             <div class="navlink"> <Nav.Link href="#about" className=' navbar-link nav '>About</Nav.Link>
             </div>
            </Nav>
            <span className="navbar-text">
            <HashLink to='#contact'>
                <button className="connect-button"><span>Contact</span></button>
              </HashLink>
            </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
