import me from "../images/me.jpeg";
function About() {
  return (
    <div>
      <h1> About </h1>
      <div className="about-container">
        <img className="photo-me" src={me} alt="megan" />
        <p style={{ margin: "0 0 0 0" }} className="details">
          {" "}
          I'm a Full-Stack Web Developer transitioning from an educational
          background in Neuroscience. I enjoy creating products that have a
          solid back-end ensuring smooth and efficient user experience coupled
          with a clean and engaging UI. I am eager and enthusiastic about
          learning new languages, frameworks and databases and confident in the
          continual and rapid growth in my development skills.
          <br />
          <br />
          Currently I am working on learning Typescript and Angular, as well as
          improving my Javascript, React, HTML and CSS skills.
          <br />
          <br />
          I'm an avid reader, and try to read at least 50 books a year. Last
          year I was able to readd 98, which was my largest amount. I love cats,
          having two of my own Alfie and Miles.
        </p>
      </div>
    </div>
  );
}

export default About;
