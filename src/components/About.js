import me from "../images/me.jpeg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div className="about-container" >
        <h1 className="about-header" data-aos="slide-up" >About</h1>
        <div className="about-section" >
          <div className="details" data-aos="fade-right">
            <strong className="about-intro">Hello, Welcome <br /> I'm Megan McBride</strong>


            <p>
              I'm a
              <span className="details-accents"> Full-Stack Web Developer </span>
              with a passion for front-end development.
              I have my HBSc. degree in Neuroscience from <i>The University of Toronto </i>and completed
              <i> Lighthouse Labs</i>  Full-Stack Web Development Bootcamp.
              <br />
              <br />

              I am passionate about creating visually intriguing web designs, using my
              problem-solving skills to come to unique solutions and learning new languages and software.
              I'm currently working on refactoring and deploying a past project TuneSquad and learning
              Typescript.
              <br />
              <br />

              When I'm not programming you can find me reading. Some of my favourite books are Slaughterhouse-five by Kurt Vonnegut, A
              Monster Calls by Patrick Ness and In the Dream House by Carmen Maria Machado.
            </p>


            <br />
          </div>
          <div className="right-details" data-aos="fade-left">
            <img className="photo-me" src={me} alt="megan" />
            <div className="tech-stack">
              <p style={{ marginTop: 0 }}> Languages: </p>
              <p>
                <img
                  alt="javascript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                />
                <img
                  alt="typescript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
                />

                <img
                  alt="html5"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                />
                <img
                  alt="sass"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                />
                <img
                  alt="css3"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                />
                <img
                  alt="ruby"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg"
                />
              </p>

              <p> Frameworks & Libraries: </p>
              <p>
                <img
                  alt="jquery"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                />
                <img
                  alt="nodejs"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                />
                <img
                  alt="react"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                />
                <img
                  alt="rails"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg"
                />
                <img
                  alt="bootstrap"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg"
                />
                <img alt="material-UI" src="https://mui.com/static/logo.png" />
                <img
                  alt="chakra-UI"
                  src="https://www.coffeeclass.io/logos/chakra-ui.png"
                />
                <img
                  alt="express"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
