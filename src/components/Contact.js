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
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };


  return (
    <>
    <div>
      <h1>Contact Me</h1>
      <div >
      <form className="contact-form" ref={form} onSubmit={(e) => sendEmail(e)}>
        { emailSent ? (<p> Message sent </p>) : (<>
          <label>Name</label>
          <input type="text" name="name" placeholder="your name"/>

          <label>Email</label>
          <input type="email" name="email" placeholder="your email"/>

          <label>Message</label>
          <textarea name="message" placeholder="your message"/>
          <button  type="submit" value="Send" onClick={() => setEmailSent('true')}> Send </button>
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
