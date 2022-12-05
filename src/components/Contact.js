import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { SocialIcon } from "react-social-icons";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [linkedInIconColor, setLinkedInIconColor] = useState("#de5499");
  const [githubIconColor, setGithubIconColor] = useState("#de5499");
  const [ emailSent, setEmailSent ] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        setEmailSent('true')
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
    <div className="contact-container" >
      <div className="contact-left-side" data-aos="fade-right">

      <h4 className="lets-chat">Let's Chat!</h4>
      <p className="contact-intro">Reach me via the form or my socials below

     </p>
     <br/>
     <p className="header-socials">FIND ME</p>
      <div className="website-links">
              <SocialIcon
                onMouseEnter={() => setGithubIconColor("#e99f4c")}
                onMouseLeave={() => setGithubIconColor("#de5499")}
                url="https://github.com/megsmcbride"
                target="_blank"
                bgColor={githubIconColor}
                fgColor="#f2ebe9"
                style={{
                  height: "2.4vw",
                  width: "2.4vw",
                  maxHeight: "40px",
                  maxWidth: "40px",
                }}
              />
              <SocialIcon
                onMouseEnter={() => setLinkedInIconColor("#e99f4c")}
                onMouseLeave={() => setLinkedInIconColor("#de5499")}
                url="https://www.linkedin.com/in/megsmcbride"
                target="_blank"
                bgColor={linkedInIconColor}
                fgColor="#f2ebe9"
                style={{
                  height: "2.4vw",
                  maxHeight: "40px",
                  maxWidth: "40px",
                  width: "2.4vw",
                  marginLeft: "1.5vw",
                }}
              />
            </div>
      </div>

      <form className="contact-form" ref={form} onSubmit={(e) => sendEmail(e)} data-aos="fade-left">
        { emailSent ? (<p> Message sent </p>) : (<>
          <input type="text" name="name" placeholder="Name"/>
          <input type="email" name="email" placeholder="Email address"/>
          <textarea name="message" placeholder="Message"/>
          <button  type="submit" value="Send" > Send </button>
        </>
          )
        }
        </form>


    </div>
    </>
  );
}

export default Contact;
