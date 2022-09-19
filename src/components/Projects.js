import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tunesquad from "../images/tunesquad.png";
import jungle from "../images/jungle.png";
import tweeter from "../images/tweeter.png";
import scheduler from "../images/scheduler.png";
import looseleaf from "../images/looseleaf.png";
import portfolio from "../images/portfolio.png";
import Link from "react-scroll/modules/components/Link";

function Projects() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200},
      items: 2
    },
    tablet: {
      breakpoint: { max: 1200, min: 0 },
      items: 1
    }
  };
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="carousel-container">
        <div >
          <Carousel responsive={responsive} arrows={false} draggable={true} swipeable={true} autoPlay={true}>
          <div className="item">
              <img src={portfolio} alt="portfolio" />
                <a href="https://github.com/megsmcbride/TuneSquad" target="_blank">Portfolio</a>
            </div>
            <div className="item">
              <img src={tunesquad} alt="tunesquad" />
                <a href="https://github.com/megsmcbride/TuneSquad" target="_blank">TuneSquad</a>
            </div>
            <div className="item">
              <img src={jungle} alt="tunesquad" />
              <h5>Jungle</h5>
            </div>
            <div className="item">
              <img src={tweeter} alt="tweeter" />
              <h5>Tweeter</h5>
            </div>
            <div className="item">
              <img src={scheduler} alt="scheduler" />
              <h5>Scheduler</h5>
            </div>
            <div className="item">
              <img src={looseleaf} alt="looseleaf" />
              <h5>LooseLeaf</h5>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
