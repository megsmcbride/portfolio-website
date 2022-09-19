import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tunesquad from "../images/tunesquad.png";
import jungle from "../images/jungle.png";
import tweeter from "../images/tweeter.png";
import scheduler from "../images/scheduler.png";
import looseleaf from "../images/looseleaf.png";
import portfolio from "../images/portfolio.png";

function Projects() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1200, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="carousel-container">
        <div>
          <Carousel
            responsive={responsive}
            rewind={true}
            arrows={false}
            draggable={true}
            swipeable={true}
            autoPlay={false}
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
            </div>
            <div className="item">
              <div className="image-container">
                <img src={jungle} alt="jungle" />
              </div>

                <a href="https://github.com/megsmcbride/Jungle-Rails"
                  target="_blank"
                  rel="noreferrer">Jungle</a>
            </div>
            <div className="item">
              <div className="image-container">
                <img src={scheduler} alt="scheduler" />
              </div>

                <a href="https://github.com/megsmcbride/scheduler"
                  target="_blank"
                  rel="noreferrer">Scheduler</a>
            </div>
            <div className="item">
              <div className="image-container">
                <img src={tweeter} alt="tweeter" />
              </div>

                <a href="https://github.com/megsmcbride/tweeter"
                  target="_blank"
                  rel="noreferrer">Tweeter</a>
            </div>
            <div className="item">
              <div className="image-container">
                <img src={looseleaf} alt="looseleaf" />
              </div>

                <a href="https://github.com/megsmcbride/LooseLeaf"
                  target="_blank"
                  rel="noreferrer">LooseLeaf</a>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
