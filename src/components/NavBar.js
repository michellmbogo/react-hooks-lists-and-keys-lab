import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (<nav>
    
    <a href="#home" key="home-link">home</a>

    <a href="#about" key="about-link">about</a>
    
    <a href="#projects" key="project-link">projects</a>
  </nav>);
}

export default NavBar;
