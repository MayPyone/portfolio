import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Girl from "../assets/img/programmer.png";
// import glitter from "../assets/img/glitter.mp4";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/github-icon.svg';
import navIcon5 from '../assets/img/twitter.svg';

export const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "a passionate software developer."];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      
      <Container>
      {/* <video autoPlay loop muted className="video-background">
        <source src={glitter} type="video/mp4" />
      </video> */}
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
           
                <h1><span className="greeting">Hi! I'm </span><span className="name">May Pyone</span>,<br></br> <span className="txt-rotate occ" dataPeriod="40" data-rotate='[ "full-stack developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  IΓÇÖm a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, donΓÇÖt hesitate to contact me.
                   </p>
                
                  <div className="social-icon">
                    <p>Let's Connect</p>
                <a href="https://github.com/MayPyone"><img src={navIcon4} alt="github" /></a>
                <a href="https://www.linkedin.com/in/may-pyone-9439961a3/"><img src={navIcon1} alt="linkedin" /></a>
                <a href="https://www.facebook.com/profile.php?id=100026679546837&mibextid=ZbWKwL"><img src={navIcon2} alt="facebook" /></a>
                {/* <a href="https://twitter.com/maypyone015"><img src={navIcon5} alt="twitter" /></a> */}
                <a href="https://www.instagram.com/maypyone2002/"><img src={navIcon3} alt="instagram" /></a>
              </div>
              
            
          </Col>
          <Col xs={12} md={6} xl={5}>
          
             
               
                  <img src={Girl} alt="Header Img"/>
                
           
          </Col>
        </Row>
      </Container>
    </section>
  )
}
