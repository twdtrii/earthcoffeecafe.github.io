import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from "react-bootstrap";

import {navLinks} from"../data/index";
import {NavLink} from "react-router-dom";


const NavbarComponent = () => {
  const [changeColor, setChangColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10){
      setChangColor(true);
    }else{
      setChangColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
  <div>
     <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src="public/Logo2.png" class="navbar-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""} end>
                    {link.text}</NavLink>
                </div>
              )
            })}
          </Nav>


            <div className="tombol text-center">
              <button className="btn btn-outline-danger rounded-1">
                Download App
              </button>
            </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};

export default NavbarComponent;
