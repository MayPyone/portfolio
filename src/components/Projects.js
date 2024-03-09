import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import Popup from './Popup';
import born from '../assets/img/born.png';
import expense from '../assets/img/budget.png';
import calculator from '../assets/img/calculator.png';
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      title: "Born Your Appetite!",
      language: ["React","Redux", "JavaScript", "REST API"],
      imgUrl: born,
      description: "The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.",
    },
    {
      title: "Record your expense",
      language: ["Ruby","Ruby on Rails", "Postgresql"],
      imgUrl: expense,
      description: "The Budget App is about building a mobile web application where users can manage their budget: They have a list of transactions associated with a category, so that users can see how much money they spent and on what.",
  
    },
    {
      title: "Recipe",
      language: ["Ruby","Ruby on Rails", "Postgresql"],
      imgUrl: born,
      description: "The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.",
  
    },
    {
      title: "Blog",
      language: ["Ruby","Ruby on Rails", "Postgresql"],
      imgUrl: born,
      description: "The Recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.",
  
    },
    {
      title: "Math Magician",
      language: ["React","Redux", "JavaScript", "REST API"],
      imgUrl: calculator,
      description: "Math-Magician is a wonderful project for calculation. Plus, users can see inspirational random quotes.",
  
    },
    {
      title: "Leader Board",
      language: ["HTML","CSS", "JavaScript"],
      imgUrl: born,
      description: "The Leader app enables users to input player names and scores, providing a visual representation of player scores alongside their names on the board for comparison.",
  
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