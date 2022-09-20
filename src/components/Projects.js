import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import tunesquad from "../images/tunesquad.png";
import jungle from "../images/jungle.png";
import tweeter from "../images/tweeter.png";
import scheduler from "../images/scheduler.png";
import looseleaf from "../images/looseleaf.png";
import portfolio from "../images/portfolio.png";

function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="carousel-container">
        <Carousel
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          useKeyboardArrows={true}
          autoPlay={true}
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
              Collaberative Spotify creation React SPA where users can generate
              custome playlists based on a voting system
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
              A mini e-commerce application built with Rails 6.1 for purposes of
              teaching Rails by example
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
