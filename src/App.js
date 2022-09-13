import React from 'react';
import './App.css';
import $ from 'jquery';
import { Link } from 'react-scroll';

window.$ = $;

function App() {
  $(document).ready(function() {
    /* top-left logo animation */
    $('.logo-container')
      .stop(true)
      .animate({
        left: '30px'
      }, 8000);
    $('h2')
      .stop(true)
      .animate({
        opacity: "1"
      }, 1000);
    /* title animation */
    $('h1')
      .stop(true)
      .animate({
        opacity: "1"
      }, 1200);
    /* 1 */
    $('.rectangle1')
      .stop(true)
      .animate({
        left: "97%",
      }, 2200);
    /* 2 */
    $('.rectangle2')
      .stop(true).delay(500)
      .animate({
        left: "94%",
      }, 2200);
    /* 3 */
    $('.rectangle3')
      .stop(true).delay(1000)
      .animate({
        left: "91%",
      }, 2200);
    /* 4 */
    $('.rectangle4')
      .stop(true).delay(1500)
      .animate({
        left: "88%",
      }, 2200);
    /* 5 */
    $('.rectangle5')
      .stop(true).delay(2000)
      .animate({
        left: "85%",
      }, 2950);

  });
  return (
    <div>
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about">
                ABOUT
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                PROJECTS
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="blog">
                BLOG
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about">ABOUT</section>
      <section id="projects">PROJECTS</section>
      <section id="blog">BLOG</section>
      <section id="contact">CONTACT ME</section>
    </div>
      <div className="rectangle5"></div>
      <div className="rectangle4"></div>
      <div className="rectangle3"></div>
      <div className="rectangle2"></div>
      <div className="rectangle1"></div>

    </div>
  );
};

export default App;
