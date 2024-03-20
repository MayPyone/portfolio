import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/maypyone.png';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

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

  const handleNavCollapse = () => {
    if (expanded) {
      setExpanded(false);
    }
  }  

  return (
    <Router>
      <Navbar expand="md sm lg" expanded={expanded} className={scrolled ? "scrolled" : ""}>
        <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div class="navlink">  <Nav.Link href="#home" className='navbar-link nav' onClick={handleNavCollapse}>Home</Nav.Link>
            </div>
            <div class="navlink"><Nav.Link href="#projects" className=' navbar-link nav' onClick={handleNavCollapse}>Projects</Nav.Link>
             </div>
             <div class="navlink"> <Nav.Link href="#about" className=' navbar-link nav' onClick={handleNavCollapse}>About</Nav.Link>
             </div>
            </Nav>
            <span className="navbar-text">
            <HashLink to='#contact'>
                <button className="connect-button navbar-link" onClick={handleNavCollapse}><span>Contact</span></button>
              </HashLink>
            </span>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
