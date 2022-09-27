import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import tunesquad from "../images/tunesquad.gif";
import jungle from "../images/jungle.png";
import tweeter from "../images/tweeter.gif";
import scheduler from "../images/scheduler.gif";
import looseleaf from "../images/looseleaf.gif";
import portfolio from "../images/portfolio.gif";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p className="explore">Scroll to explore my work →</p>
      <div className="carousel-container">
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          useKeyboardArrows={true}

          emulateTouch={true}
          swipeable={true}
        
   
        >
          <div className="item">
            <div className="image-container">
              <img src={portfolio} alt="portfolio" />
            </div>
            <a
              href="https://github.com/megsmcbride/portfolio-website"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
            <p>Personal website to showcase my projects</p>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={tunesquad} alt="tunesquad" />
            </div>
            <a
              href="https://github.com/megsmcbride/TuneSquad"
              target="_blank"
              rel="noreferrer"
            >
              TuneSquad
            </a>
            <p>
            Voting-based playlist creation app built with Spotify's REST API
            </p>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={jungle} alt="jungle" />
            </div>

            <a
              href="https://github.com/megsmcbride/Jungle-Rails"
              target="_blank"
              rel="noreferrer"
            >
              Jungle
            </a>
            <p>
              A mini e-commerce application built with Rails 6.1
            </p>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={scheduler} alt="scheduler" />
            </div>

            <a
              href="https://github.com/megsmcbride/scheduler"
              target="_blank"
              rel="noreferrer"
            >
              Scheduler
            </a>
            <p>React SPA that allows users to book interview time slots</p>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={tweeter} alt="tweeter" />
            </div>

            <a
              href="https://github.com/megsmcbride/tweeter"
              target="_blank"
              rel="noreferrer"
            >
              Tweeter
            </a>
            <p>SPA Twitter clone</p>
          </div>
          <div className="item">
            <div className="image-container">
              <img src={looseleaf} alt="looseleaf" />
            </div>

            <a
              href="https://github.com/megsmcbride/LooseLeaf"
              target="_blank"
              rel="noreferrer"
            >
              LooseLeaf
            </a>
            <p>
              Resource app where users can create and store links to outside
              resources for later viewing
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
