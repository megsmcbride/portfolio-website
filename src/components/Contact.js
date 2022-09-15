import React, { useState, useRef } from "react";
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
      <h1>Contact Me</h1>
      <div className="contact-form">
      <form ref={form} onSubmit={(e) => sendEmail(e)}>
          <label>Name</label>
          <input type="text" name="name" />

          <label>Email</label>
          <input type="email" name="email" />

          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </>
  );
}

export default Contact;
