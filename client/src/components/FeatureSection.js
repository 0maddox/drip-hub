import React from 'react';
import { Row, Col } from 'react-bootstrap';
import cloth from '../imgs/cloth.png';

export default function FeatureSection() {
  return (
    <section className="about-section feature-section">
      <Row className="mt-2">
        <Col sm={6}>
          <img src={car} className="img-fluid" alt="ride" />
        </Col>
        <Col sm={6} className="pt-5">
          <h4 className="about-section__left-title pt-5">
            Best outfits for you
          </h4>
          <p className="about-section__desc">
            More than a million stores at your disposal but we offer quality and our services are quick and reliable.we offer delivery and pickups
          </p>
          <p>
            <a href="#register" className="btn btn-oval">
              Learn more
            </a>
          </p>
        </Col>
      </Row>
    </section>
  );
}