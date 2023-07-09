import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="header">
      <Navigation />

      <div className="header-content mt-5">
        <h1 className="header-content__title">Find perfect Design that fits your style and comfort!!! </h1>
        <p className="header-content__desc">
          The best offers for you at the reach of your Phone order with us today.
        </p>
        <p>
          <Link className="btn btn-oval" to="/register">Purchase Now</Link>
        </p>
      </div>
    </header>
  );
}