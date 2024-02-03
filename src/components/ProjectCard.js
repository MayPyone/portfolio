import { Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import React from 'react';

export const ProjectCard = ({ title, language, imgUrl,onSeeMoreClick }) => {

  return (
    <Col xs={12} sm={12} md={5} lg={4}>
      <div className="proj-imgbx d-flex align-items-center justify-content-center">
        <Card style={{ width: '18rem', height: '20rem' }} className="inner">
          <div className="img-container">
            <img src={imgUrl} alt={title} />
          </div>
          <div className="proj-txtx">
            <h4 className="p-title">{title}</h4>
            <ul>
              {language.map((l, index) => {
                return (<li key={index}>{l}</li>)
              })}
            </ul>
            <button className="fluffy-button" onClick={onSeeMoreClick}> See Project</button>
          </div>
        </Card>
      </div>
    </Col>
  )
}

export default ProjectCard;
