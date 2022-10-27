import me from "../images/me.jpeg";
function About() {
  return (
    <div>
      <div className="about-container">
        <div className="left-details">
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
        <div className="details">
          <strong className="about-intro">Hello, Welcome</strong>

          <p>My name is Megan McBride. </p>
          <p>
            I'm a  <span className="details-accents"> Full-Stack Web Developer</span> transitioning from a
            background in <i>Neuroscience. </i>

            I'm passionate about creating visually intriguing <i>web designs </i>
            and using my <i>problem-solving skills </i>to come to unique
            solutions. 
            <br/>
            <br/>
            I'm also an
            <span className="details-accents"> Avid Reader. </span >
            Some of my favourites are
            Slaughterhouse-five by Kurt Vonnegut, A Monster Calls by Patrick
            Ness and In the Dream House by Carmen Maria Machado.
          </p>
          <p>
            Currently learning <span className="details-accents">TypeScript</span > and
            <span className="details-accents"> Angular.</span >
          </p>

          <br />

        </div>
      </div>

    </div>
  );
}

export default About;
