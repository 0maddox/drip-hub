import React from 'react';
import { Row, Col } from 'react-bootstrap';
import jumpsuit from '../imgs/jumsuit.jpg';

export default function AboutSection() {
  return (
    <section className="about-section">
      <h4 className="about-section__sub">Quality and stylish outfits</h4>
      <h2 className="about-section__primary pb-4">
        Qulity products at an affordable price
      </h2>
      <Row className="mt-5">
        <Col sm={6}>
          <h4 className="about-section__left-title">
          Drip is 24/7
          </h4>
          <p className="about-section__desc">
            We offer delivery in time .We offer the best Quality in the market.We help you spend your money       </p>
          <p>
            <a href="#register" className="btn btn-oval">
              Learn more
            </a>
          </p>
        </Col>
        <Col sm={6}>
          <img src={cloth} className="img-fluid" alt="cloth" />
        </Col>
      </Row>
    </section>
  );
}