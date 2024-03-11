import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
export const Contact=()=>{
    return (
      <section className="contact" id="contact">
        <Container>
        <h2>Con<span className="underline">ta</span>ct</h2>
        <Row>
          <Col className='contact-first text-center' 	md={5} sm={12}>
          <p>I'm always interested in hearing about new projects, 
          so if you'd like to chat please get in touch.</p></Col>
          <Col className='contact-second' 	md={5} sm={12}>
          <Form action="https://formspree.io/f/xbjenlov" method="POST">
          <div class="mb-3">
        <input type="text" placeholder="Enter your name" className='input' name="name" required/>
        </div>
        <div class="mb-3">
        <input type="email" placeholder="Enter your email" className='input' name="email" required/>
      </div>
      <div class="mb-3">
  
  <textarea className='input' id="exampleFormControlTextarea1" rows="3" placeholder="Please write your message here" name="message" required></textarea>
  <div class="container form-button">
		<div class="btn"><button type="submit">SUBMIT</button></div> </div>
</div>
    </Form>
          </Col>
        </Row>
      </Container>
      </section>
    )
}
