import me from "../images/me.jpeg";
function About() {
  return (
    <div>
      <h1> About </h1>
      <div className="about-container">
        <img className="photo-me" src={me} alt="megan" />
        <p style={{ margin: "0 0 0 0" }} className="details">
      

          <li>
            <strong>Full-Stack Web Developer</strong> transitioning from a
            background in <i>Neuroscience.</i>
          </li>
          <li>Passionate about creating <i>web designs </i>visually intriguing  and using my <i>problem-solving skills  </i>to come to unique solutions</li>
          <li>
            <strong>Avid Reader </strong>- Some of my favourites are
            Slaughterhouse-five by Kurt Vonnegut, A Monster Calls by Patrick
            Ness and In the Dream House by Carmen Maria Machado.
          </li>
          <li>
            Currently learning <strong>TypeScript</strong>
          </li>
        <br/>
       
          <strong className="reach-me">I'd love to chat, feel free to reach out to me by Linkedin, email or the contact form below!</strong>
    
        </p>
      </div>
    </div>
  );
}

export default About;
