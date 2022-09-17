import React from "react";
import "./css/App.css";
import "./css/Intro.css";
import "./css/Contact.css"
import "./css/About.css"
import $ from "jquery";
import { Link } from "react-scroll";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { SocialIcon } from "react-social-icons";
import { FaLinkedin, FaGithubSquare} from "react-icons/fa";


window.$ = $;

function App() {

  window.history.pushState({}, null, "/");
  $(document).ready(function () {
    $(".rectangle1").stop(true).animate(
      {
        left: "97%",
      },
      1000
    );

    $(".rectangle2").stop(true).delay(500).animate(
      {
        left: "94%",
      },
      1000
    );

    $(".rectangle3").stop(true).delay(1000).animate(
      {
        left: "91%",
      },
      1000
    );

    $(".rectangle4").stop(true).delay(1500).animate(
      {
        left: "88%",
      },
      1600
    );

    $(".rectangle5").stop(true).delay(2000).animate(
      {
        left: "85%",
      },
      2000
    );
  });
  return (
    <div>
      <div className="App">
        <header className="nav">
          <nav className="nav__container__actions">
            <ul>
              <li>
                <Link smooth spy to="home">
                  HOME
                </Link>
              </li>
              <li>
                <Link smooth spy to="about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link smooth spy to="projects">
                  PROJECTS
                </Link>
              </li>
              <li>
                <Link smooth spy to="contact">
                  CONTACT ME
                </Link>
              </li>
            </ul>

            <div className="website-links">
              <SocialIcon
                url="https://github.com/megsmcbride"
                target="_blank"
                bgColor="#de5499"
                fgColor="#f2ebe9"
                style={{ height: "2.4vw", width: "2.4vw" }}
              />
              <SocialIcon
                url="https://www.linkedin.com/in/megsmcbride"
                target="_blank"
                bgColor="#de5499"
                fgColor="#f2ebe9"
                style={{
                  height: "2.4vw", 
                  width: "2.4vw",
                  marginLeft: 15,
                  marginRight: 15,
                }}
              />
    
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
          <section id="contact"><Contact/></section>
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
