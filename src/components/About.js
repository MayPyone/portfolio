import { Container } from "react-bootstrap";

export const About=() =>{
    return (
        <section className="Aboutme" id="about">
        <Container>
        <h2>Abou<span className="underline">t M</span>e</h2>
        <div className="d-flex flex-column align-items-center">
         <div class="wrapper">
                <div className="box">
         <p >I'm May Pyone, a passionate full-stack developer with a flair for collaborating 
            on both soft-skill and technical projects with remote developers worldwide.
             My journey in development has been marked by successful group projects, 
             and I'm eager to continue this journey, 
            collaborating on more exciting projects in the future.</p>
            </div>
            </div>
            </div>
            
            <div className="skill">
                <div className="language"><h3>language</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>Ruby</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                </div>
                <div className="frameworks"><h3>Frameworks</h3>
                <ul>
                    <li>React.js</li>
                    <li>Redux.js</li>
                    <li>Ruby on Rails</li>
                    <li>RSpec</li>
                    <li>Capybara</li>
                    <li>Selenium</li>
                </ul></div>
                <div className="skills"><h3>Skills</h3>
                <ul>
                    <li>Postgresql</li>
                    <li>API Design</li>
                    <li>Version Control</li>
                </ul></div>
            </div>
        </Container>
        
	


        </section>
    )
}