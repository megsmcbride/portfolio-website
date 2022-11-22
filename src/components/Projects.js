import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

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

      <SimpleGrid minChildWidth="350px" spacing="40px">
        <Box className="item">
          <div>
            <div className="image-container">
              <img src={portfolio} alt="portfolio" />
            </div>
            <h1>Portfolio</h1>

            <p>Personal website to showcase my projects</p>
            <a
              href="https://github.com/megsmcbride/portfolio-website"
              target="_blank"
              rel="noreferrer"
            >
              github{" "}
              <HiOutlineArrowNarrowRight style={{ alignItems: "center" }} />
            </a>
          </div>
        </Box>
        <Box className="item">
          <div>
            <div className="image-container">
              <img src={tunesquad} alt="tunesquad" />
            </div>
            <h1>TuneSquad</h1>

            <a
              href="https://github.com/megsmcbride/TuneSquad"
              target="_blank"
              rel="noreferrer"
            >
              github ->
            </a>
            <p>
              Voting-based playlist creation app built with Spotify's REST API
            </p>
          </div>
        </Box>
        <Box className="item">
          <div>
            <div className="image-container">
              <img src={jungle} alt="jungle" />
            </div>
            <h1>Jungle</h1>

            <a
              href="https://github.com/megsmcbride/Jungle-Rails"
              target="_blank"
              rel="noreferrer"
            >
              github ->
            </a>
            <p>A mini e-commerce application built with Rails 6.1</p>
          </div>
        </Box>

        <Box className="item">
          <div>
            <div className="image-container">
              <img src={scheduler} alt="scheduler" />
            </div>
            <h1>Scheduler</h1>

            <a
              href="https://github.com/megsmcbride/scheduler"
              target="_blank"
              rel="noreferrer"
            >
              github ->
            </a>
            <p>React SPA that allows users to book interview time slots</p>
          </div>
        </Box>
        <Box className="item">
          <div>
            <div className="image-container">
              <img src={tweeter} alt="tweeter" />
            </div>
            <h1>Tweeter</h1>
            <a
              href="https://github.com/megsmcbride/tweeter"
              target="_blank"
              rel="noreferrer"
            >
              github ->
            </a>
            <p>SPA Twitter clone</p>
          </div>
        </Box>
        <Box className="item">
          <div>
            <div className="image-container">
              <img src={looseleaf} alt="looseleaf" />
            </div>
            <h1>LooseLeaf</h1>

            <a
              href="https://github.com/megsmcbride/LooseLeaf"
              target="_blank"
              rel="noreferrer"
            >
              github ->
            </a>
            <p>
              Resource app where users can create and store links to outside
              resources for later viewing
            </p>
          </div>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default Projects;
