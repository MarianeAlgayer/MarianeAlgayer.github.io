import React from "react";

import { Container, Introduction, Projects } from "./styles";

const Home = () => (
  <Container>
    <Introduction>
      <h1>Hi, there! 👋 I'm Mariane,</h1>
      <h2>
        a <img src="https://readme-typing-svg.herokuapp.com/?font=Montserrat&size=24&color=0000B5&background=C1ECA8&center=true&vCenter=true&width=240&height=34&lines=software+developer;former+architect;dog+person" alt="About me"/> based in Brazil.
      </h2>
      <p>I'm currently a software development student at <a href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</a> taking the module about Back-End Development. I'm focused on learning technologies related to JavaScript, as ReactJS and NodeJS, but this is just the beginning 🚀.</p>
    </Introduction>

    <Projects>
      <h3>PROJECTS</h3>
      <span />
    </Projects>
  </Container>
);

export default Home;
