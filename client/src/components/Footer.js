import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imgs/logo_dark.png';

export default function Footer() {
  return (

    <section className="about-section footer">
      <h2 className="about-section__primary">
        <Link className="nav-link white" to="/">
          <img className="logo" src={logo} alt="Car Rentals" />
        </Link>
      </h2>
      <p>
        Plot 2 Unit F, Dell Riverside
        {' '}
        <br />
        +2547376744
      </p>
      <p>
        Drip Hub
        { ' ' }
        {new Date().getFullYear()}
        . All rights reserved
      </p>
    </section>

  );
}