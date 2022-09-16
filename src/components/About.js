import me from "../images/me.jpeg";
function About() {
  return (
    <div>
      <h1> About </h1>
      <div className="about-container">
        <img className="photo-me" src={me} alt="megan" />
        <p style={{ margin: "0 0 0 0" }} className="details">
          I'm a Full-Stack Web Developer transitioning from an educational
          background in Neuroscience. I received my Honours Bachelor of Science
          from UofT intending to further pursue a career in Nursing. Fascinated
          by Web development while attending the Toronto
          Metropolitan Universities Nursing program I decided to change fields
          completely, enrolling in Lighthouse Labs Full-Stack Web Development
          Bootcamp. After 3 months and 800+ hours of coding, I became
          proficient in Javascript, React, HTML, CSS/SCSS and more. I learned to
          adopt an end-to-end and test-driven development process, working with
          Jest, Storybook, Cypress, Mocha and Chai.
          <br />
          <br />
          Having now received my diploma I am eager and enthusiastic about
          learning new languages, frameworks and databases and confident in the
          continual and rapid growth in my development skills. Currently, I am
          in the process of learning TypeScript and Angular with plans to learn
          C# later on.
          <br />
          <br />
          Besides coding, I am an avid reader, having read 98 books last year. I
          love to explore every genre, jumping from one to the next. Some of my
          favourites are Slaughterhouse-five by Kurt Vonnegut, A Monster Calls
          by Patrick Ness and In the Dream House by Carmen Maria Machado.
          <br />
          <br />I am excited to showcase my creativity by creating visually
          intriguing web designs and applying my problem-solving skills to come
          up with unique solutions. Feel free to reach out to me on LinkedIn, by
          email or via the contact form below.
        </p>
      </div>
    </div>
  );
}

export default About;
