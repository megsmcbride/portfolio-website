import React from 'react';
import './App.css';
import './css/Intro.css'
import $ from 'jquery';
import { Link } from 'react-scroll';
import Intro from './components/Intro'

window.$ = $;

function App() {
  $(document).ready(function() {

    $('.rectangle1')
      .stop(true)
      .animate({
        left: "97%",
      }, 1000);

    $('.rectangle2')
      .stop(true).delay(500)
      .animate({
        left: "94%",
      }, 1000);

    $('.rectangle3')
      .stop(true).delay(1000)
      .animate({
        left: "91%",
      }, 1000);

    $('.rectangle4')
      .stop(true).delay(1500)
      .animate({
        left: "88%",
      }, 1600);

    $('.rectangle5')
      .stop(true).delay(2000)
      .animate({
        left: "85%",
      }, 2000);

  });
  return (
    <div>
    <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
          <li>
              <Link activeClass="active" smooth spy to="home">
               HOME
              </Link>
            </li>
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
              <Link activeClass="active" smooth spy to="contact">
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">

      <section id="home"><Intro /></section>
      <section id="about">ABOUT</section>
      <section id="projects">PROJECTS</section>
      <section id="contact">CONTACT ME</section>
      <div className="rectangle5"></div>
      <div className="rectangle4"></div>
      <div className="rectangle3"></div>
      <div className="rectangle2"></div>
      <div className="rectangle1"></div>
      </div>
    </div>



    </div>
  );
};

export default App;
