// React
import React from 'react';
// Styling
import { 
  Jumbotron,
  Nav,
  NavLink
} from 'reactstrap';


const Navbar = () => {
  return (
    <div className='nav-cont'>
      <Jumbotron inverse style={{color: "black", background: "rgba(0, 0, 0, 0.3)"}}>
        <h1 className="display-3">Lyndsi Kay Williams</h1>
        <hr className="my-2" />
        <p className="lead">Full Stack Web Developer</p>
        <Nav style={{justifyContent: "center", marginTop: "2%"}}>
          <NavLink href="/" active style={{color: "black", fontSize: "1.5rem", padding: ".5rem 5rem"}}>About</NavLink>
          <NavLink href="/projects" style={{color: "black", fontSize: "1.5rem", padding: ".5rem 5rem"}}>Projects</NavLink>
          <NavLink href="/contact" style={{color: "black", fontSize: "1.5rem", padding: ".5rem 5rem"}}>Contact</NavLink>
        </Nav>
      </Jumbotron>
    </div>
  );
};

export default Navbar;