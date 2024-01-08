import React, { useEffect } from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import tunesquad from "../images/tunesquad.gif";
import jungle from "../images/jungle.png";
import tweeter from "../images/tweeter.gif";
import scheduler from "../images/scheduler.gif";
import looseleaf from "../images/looseleaf.gif";
import portfolio from "../images/portfolio.gif";
import youandipaint from "../images/youandipaint"
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="projects-container">
      <h1>Projects</h1>

      <SimpleGrid minChildWidth="400px" spacing="20px">
      <Box className="item" data-aos="fade-up">
          <div>
            <div className="image-container">
              <img src={youandipaint} alt="youandipaint" />
            </div>
            <h1>You and I Paint</h1>
            <ul className="project-tech-stack">
              <li className="stack-item">
                Web Design
              </li>
              <li className="stack-item">Wordpress</li>
              <li className="stack-item">Elementor</li>
              <li className="stack-item">WooCommerce</li>
              <li className="stack-item">Event Tickets</li>

            </ul>
            <p>
              An E-commerce website created for a luxury sip and paint company using Elementor, The Events Calendar and WooCommerce. 
            </p>
            <a
              href="https://youandipaint.com"
              target="_blank"
              rel="noreferrer"
            >
              view website →
            </a>
          </div>
        </Box>
        <Box className="item" data-aos="fade-up">
          <div>
            <div className="image-container">
              <img src={portfolio} alt="portfolio" />
            </div>
            <h1>Portfolio</h1>
            <ul className="project-tech-stack">
              <li className="stack-item">Javascript</li>
              <li className="stack-item">HTML</li>
              <li className="stack-item">CSS</li>
              <li className="stack-item">React</li>
            </ul>
            <p>
              A portfolio website built using React to showcase my past
              projects. Illustrating my front-end development skills, this
              application is entirely client-sided.
            </p>
            <a
              href="https://github.com/megsmcbride/portfolio-website"
              target="_blank"
              rel="noreferrer"
            >
              view github →
            </a>
          </div>
        </Box>
        <Box className="item" data-aos="fade-up">
          <div>
            <div className="image-container">
              <img src={tunesquad} alt="tunesquad" />
            </div>
            <h1>TuneSquad</h1>
            <ul className="project-tech-stack">
              <li className="stack-item">Javascript</li>
              <li className="stack-item">Chakra</li>
              <li className="stack-item">Express</li>
              <li className="stack-item">React</li>
              <li className="stack-item">REST APIs</li>
            </ul>
            <p>
              TuneSquad is a playlist-creation app based on a voting system,
              built using React, Spotify APIs and Express. Users can add and
              rate songs on a voting playlist with other members. Once the
              voting period is finished, the song ratings are averaged based on
              the number of voters and a final playlist is generated of songs
              with three stars and up.
            </p>
            <a
              href="https://github.com/megsmcbride/TuneSquad"
              target="_blank"
              rel="noreferrer"
            >
              view github →
            </a>
          </div>
        </Box>
        <Box className="item" data-aos="fade-up">
          <div>
            <div className="image-container">
              <img src={jungle} alt="jungle" />
            </div>
            <h1>Jungle</h1>
            <ul className="project-tech-stack">
              <li className="stack-item">Ruby on Rails</li>
              <li className="stack-item">Bootstrap</li>
              <li className="stack-item">PostgreSQL</li>
              <li className="stack-item">Cypress</li>
            </ul>

            <p>
              A mini e-commerce application built with Rails 6.1. Jungle allows
              users to shop and buy plants by integrating Stripe Payment system.
              Sellers can manage their inventory and sales.
            </p>
            <a
              href="https://github.com/megsmcbride/Jungle-Rails"
              target="_blank"
              rel="noreferrer"
            >
              view github →
            </a>
          </div>
        </Box>

        <Box className="item" data-aos="fade-up">
          <div>
            <div className="image-container">
              <img src={scheduler} alt="scheduler" />
            </div>
            <h1>Interview Scheduler</h1>
            <ul className="project-tech-stack">
              <li className="stack-item">Javascript</li>
              <li className="stack-item">SASS</li>
              <li className="stack-item">Axios</li>
              <li className="stack-item">React</li>
              <li className="stack-item">Storybook</li>
              <li className="stack-item">Jest</li>
            </ul>
            <p>
              Interview Scheduler is a single-page application built with React.
              It allows users to book, edit and cancel interview time slots.
              This project was tested using Jest and Storybook throughout its
              development.
            </p>
            <a
              href="https://github.com/megsmcbride/scheduler"
              target="_blank"
              rel="noreferrer"
            >
              view github →
            </a>
          </div>
        </Box>
        <Box className="item" data-aos="fade-up">
          <div>
            <div className="image-container">
              <img src={tweeter} alt="tweeter" />
            </div>
            <h1>Tweeter</h1>
            <ul className="project-tech-stack">
              <li className="stack-item">HTML</li>
              <li className="stack-item">CSS</li>
              <li className="stack-item">Javascript</li>
              <li className="stack-item">JQuery</li>
              <li className="stack-item">AJAX</li>
              <li className="stack-item">NodeJS</li>
              <li className="stack-item">Express</li>
            </ul>
            <p>
              Tweeter is a simple, single-page Twitter clone built with NodeJS.
              Users can create posts and view previous postings in chronological
              order.
            </p>
            <a
              href="https://github.com/megsmcbride/tweeter"
              target="_blank"
              rel="noreferrer"
            >
              view github →
            </a>
          </div>
        </Box>
        <Box className="item" data-aos="fade-up">
          <div>
            <div className="image-container">
              <img src={looseleaf} alt="looseleaf" />
            </div>
            <h1>LooseLeaf</h1>
            <ul className="project-tech-stack">
              <li className="stack-item">HTML</li>
              <li className="stack-item">SCSS</li>
              <li className="stack-item">Javascript</li>
              <li className="stack-item">Bootstrap</li>
              <li className="stack-item">PostgreSQL</li>
            </ul>
            <p>
              Looseleaf is a resource app where users can create and store links
              to outside resources for later viewing. Built using NodeJS and
              EJS.
            </p>
            <a
              href="https://github.com/megsmcbride/LooseLeaf"
              target="_blank"
              rel="noreferrer"
            >
              view github →
            </a>
          </div>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Projects;
