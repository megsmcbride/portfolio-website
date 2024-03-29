import React from "react";
import "./css/App.css";
import "./css/Intro.css";
import "./css/Contact.css";
import "./css/About.css";
import "./css/Projects.css";
import $ from "jquery";
import { Link } from "react-scroll";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import logo from "./images/logo.png";


window.$ = $;

function App() {


  window.history.pushState({}, null, "/");
  $(document).ready(function() {
    $(".rectangle1").stop(true).animate(
      {
        left: "97%",
      },
      600
    );

    $(".rectangle2").stop(true).delay(200).animate(
      {
        left: "94%",
      },
      600
    );

    $(".rectangle3").stop(true).delay(500).animate(
      {
        left: "91%",
      },
      600
    );

    $(".rectangle4").stop(true).delay(600).animate(
      {
        left: "88%",
      },
      1200
    );

    $(".rectangle5").stop(true).delay(800).animate(
      {
        left: "85%",
      },
      1400
    );
  });

  return (
    <div>
      <div className="App">
        <header className="nav">
          <img src={logo} alt="logo" />
          <nav className="nav__container__actions">
            <div className="actions-links">
              <ul>


                <li>
                  <Link smooth spy to="home" duration={500}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link smooth spy to="about" duration={500}>
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link smooth spy to="projects" duration={500}>
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link smooth spy to="contact" duration={500}>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <div className="content">
          <section id="home">
            <Intro />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
      <p className="copyright"> Ⓒ 2022 Megan McBride All Rights Reserved</p>
          <div className="rectangle5"></div>
          <div className="rectangle4"></div>
          <div className="rectangle3"></div>
          <div className="rectangle2"></div>
          <div className="rectangle1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
