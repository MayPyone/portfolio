import { Container, Row, Col } from "react-bootstrap";
import Girl from "../assets/img/programmer.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github-icon.svg';

export const Home = () => {
 
  return (
    <section className="banner" id="home">
      
      <Container>
      {/* <video autoPlay loop muted className="video-background">
        <source src={glitter} type="video/mp4" />
      </video> */}
        <Row className="aligh-items-center">
          <Col xs={12} md={7} xl={7}>
                <h1><span className="greeting">Hi! I'm </span><span className="name">May Pyone</span>,<br></br> <span className="txt-rotate occ" ><span className="wrap">a  passionate  software  developer.</span></span></h1>
                  <p>
                  I specialize in building products, features, and websites. Check out my portfolio and experience! If you're interested in my work and have a coding project in mind, don't hesitate to get in touch with me.
                   </p>
                
                  <div className="social-icon">
                    <p>Let's Connect</p>
                <a href="https://github.com/MayPyone" target="_blank"><img src={navIcon4} alt="github" /></a>
                <a href="https://www.linkedin.com/in/maypyone/" target="_blank"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://www.facebook.com/profile.php?id=100026679546837&mibextid=ZbWKwL" target="_blank"><img src={navIcon2} alt="facebook" /></a>
                <a href="https://www.instagram.com/maypyone2002/" target="_blank"><img src={navIcon3} alt="instagram" /></a>
              </div>
              
            
          </Col>
          <Col xs={12} md={5} xl={5}>
          
             
               
                  <img src={Girl} alt="Header Img"/>
                
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}
