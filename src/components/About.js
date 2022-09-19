import me from "../images/me.jpeg";
function About() {
  return (
    <div>
      <h1> About </h1>
      <div className="about-container">
        <div>
          <img className="photo-me" src={me} alt="megan" />
          <div className="tech-stack">
            <p> Languages: </p>
            <p>
              <img
                alt="javascript"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
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

            <p> Systems & Databases: </p>
            <p>
              <img
                alt="postgresql"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
              />
              <img
                alt="git"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
            </p>

            <p> Testing & More: </p>

            <p>
              <img
                alt="mocha"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"
              />
              <img
                alt="chai"
                src="https://avatars.githubusercontent.com/u/1515293?s=280&v=4"
              />
              <img
                alt="jest"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              />
              <img
                alt="cypress"
                src="https://icons-for-free.com/download-icon-cypress-1324440144114984250_512.png"
              />
              <img
                alt="storybook"
                src="https://avatars.githubusercontent.com/u/22632046?s=200&v=4"
              />
              <img
                alt="eslint"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original-wordmark.svg"
              />
            </p>
          </div>
        </div>
        <div style={{ margin: "0 0 0 0" }} className="details">
          <li>
            <strong>Full-Stack Web Developer</strong> transitioning from a
            background in <i>Neuroscience.</i>
          </li>
          <li>
            Passionate about creating visually intriguing <i>web designs </i> and
            using my <i>problem-solving skills </i>to come to unique solutions
          </li>
          <li>
            <strong>Avid Reader </strong>- Some of my favourites are
            Slaughterhouse-five by Kurt Vonnegut, A Monster Calls by Patrick
            Ness and In the Dream House by Carmen Maria Machado.
          </li>
          <li>
            Currently learning <strong>TypeScript</strong> and  <strong>Angular</strong> 
          </li>
          <br />

          <strong className="reach-me">
            I'd love to chat, feel free to reach out to me by Linkedin, email or
            the contact form below!
          </strong>
        </div>
      </div>
    </div>
  );
}

export default About;
