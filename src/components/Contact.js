import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
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


  return (
    <>
    <div className="contact-container">
      <h4 className="lets-chat">Let's Chat!</h4>
      <p className="contact-intro">Feel free to reach out to me via the form below or on <a className="linkedin-link" href="https://www.linkedin.com/in/megsmcbride"> LinkedIn</a></p>
      <div >
      <form className="contact-form" ref={form} onSubmit={(e) => sendEmail(e)}>
        { emailSent ? (<p> Message sent </p>) : (<>
          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter your name"/>

          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email address"/>

          <label>Message:</label>
          <textarea name="message" placeholder="Enter your message"/>
          <button  type="submit" value="Send" > Send </button>
        </>
          )
        }
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
