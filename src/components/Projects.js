import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import Popup from './Popup';
import born from '../assets/img/born.png';
import expense from '../assets/img/budget.png';
import space from '../assets/img/space.png'
import calculator from '../assets/img/calculator.png';
import leader from '../assets/img/leader.png';
import motorcycle from '../assets/img/motorcycle.png';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "Born Your Appetite!",
      language: ["React","Redux", "JavaScript", "REST API"],
      imgUrl: born,
      description: "The app can showcase various types of cuisine from around the world. Users have the option to view the details of each recipe.",
      live: "https://bornyourappetite.netlify.app/",
      source: "https://github.com/MayPyone/React_Capstone_Project",
    },
    {
      title: "Record your expense",
      language: ["Ruby","Ruby on Rails", "Postgresql"],
      imgUrl: expense,
      description: "The Budget App is about building a mobile web application where users can manage their budget: They have a list of transactions associated with a category, so that users can see how much money they spent and on what.",
      live: "https://budget-tracker-for-you.onrender.com",
      source: "https://github.com/MayPyone/Budget",
    },
    {
      title: "Space Traveller's Hub",
      language: ["Javascript","React", "REST API"],
      imgUrl: space,
      description: "Space Travelers' Hub is a website that will be working with the real live data from the SpaceX API for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
      live: "https://spacetravellerteam.netlify.app",
      source: "https://github.com/MayPyone/space-travelers-hub",
    },
    {
      title: " SwiftBike Reserves",
      language: ["Javascript","React","Redux","Ruby","Ruby on Rails", "Postgresql"],
      imgUrl: motorcycle,
      description: "SwiftBike Reserves is an app for booking motorcycles. You can sign up and add your own motorcycles to the app. Once you're signed up, you can reserve motorcycles for specific dates and cities. This app is made using React and Rails, making it easy to use. It's a handy tool for people who want to book motorcycles.",
      live: "https://github.com/MayPyone/motorcycle-backend-final-capstone",
      source: "https://github.com/MayPyone/motorcycle-backend-final-capstone",
    },
    {
      title: "Math Magician",
      language: ["React","Redux", "JavaScript", "REST API"],
      imgUrl: calculator,
      description: "Math-Magician is a wonderful project for calculation. Plus, users can see inspirational random quotes.",
      live: "https://math-magicians-cylp.onrender.com/",
      source: "https://github.com/MayPyone/Math-Magicians",
    },
    {
      title: "Leader Board",
      language: ["HTML","CSS", "JavaScript", "RESTful API"],
      imgUrl: leader,
      description: "The Leaderboard app enables users to input player names and scores, providing a visual representation of player scores alongside their names on the board for comparison.",
      live: "https://leaderboard-er7v.onrender.com/",
      source: "https://github.com/MayPyone/Leaderboard",
    },
  ];

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }, [showPopup]);

  const handlePopupToggle = (project) => {
    setShowPopup(!showPopup);
    setSelectedProject(project); // Set the selected project
    const navBar = document.querySelector('nav.navbar');
    const aboutMe = document.querySelector('.Aboutme')
    const contact = document.querySelector('.contact')
    if (navBar) {
      navBar.style.display = showPopup ? 'block' : 'none'; // Show/hide the navbar based on the showPopup state
    }
    
      aboutMe.style.display = showPopup ? 'block' : 'none'; // Show/hide the about section based on the showPopup state
      contact.style.display = showPopup ? 'block' : 'none'; // Show/hide the about section based on the showPopup state
    
  };

  return (
    <section className="project" id="projects">
      <Container>
        <TrackVisibility>
          <div className="placed-card">
            <h2>Pro<span className="underline">jec</span>ts</h2>
            <Row className="justify-content-center text-center d-flex containerimg">
              {projects.map((project) => (
              
                  <ProjectCard
                    title={project.title}
                    language={project.language}
                    imgUrl={project.imgUrl}
                    onSeeMoreClick={() => handlePopupToggle(project)} // Pass the click handler as a prop
                  />
                
              ))}
              {showPopup && selectedProject && (
                <Popup
                  title={selectedProject.title}
                  languages={selectedProject.language}
                  imgUrl={selectedProject.imgUrl}
                  des = {selectedProject.description}
                  live= {selectedProject.live}
                  source= {selectedProject.source}
                  onClose={() => handlePopupToggle()}
                />
              )}
            </Row>
          </div>
        </TrackVisibility>
      </Container>
    </section>
  );
              }