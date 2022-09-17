import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
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
      <h1>Connect with me</h1>
      <div >
      <form className="contact-form" ref={form} onSubmit={(e) => sendEmail(e)}>
          <div>
            
          </div>
     
          <input type="text" name="name" placeholder="Name"/>
          <input type="email" name="email" placeholder="Email"/>
          <textarea name="message" placeholder="Message"/>
          <button  type="submit" value="Send" > Submit </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;
