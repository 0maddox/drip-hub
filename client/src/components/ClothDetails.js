import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function ClothDetails({ Cloth }) {
  const Clothwrap = styled.div`
    width: 100%;
    height: 400px;
    background: url(${Cloth.image}) bottom center no-repeat;
    padding: 30px;
    `;

  return (
    <>
      <Clothwrap>
        <Navigation />
      </Clothwrap>
      <section className="about-section">
        <h2 className="about-section__primary pb-4">
          { Cloth.name }
        </h2>
        <h4 className="about-section__sub">
          {' '}
          <span className="badge badge-info">{ Cloth.date_added }</span>
        </h4>
        <hr />
        <Link className="nav-link text-danger text-center" to="/Cloths">
          &larr; Back to Cloths
        </Link>
      </section>
    </>
  );
}

ClothDetails.propTypes = {
  Cloth: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  transmission: PropTypes.string.isRequired,
  ac: PropTypes.string.isRequired,
  date_added: PropTypes.string.isRequired,
};