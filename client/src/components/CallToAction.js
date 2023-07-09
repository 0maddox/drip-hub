import React from 'react';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  return (

    <section className="call-action">
      <h4>Drip is eternal</h4>
      <p>
        <Link className="btn btn-oval" to="/register">Reserve this outfit</Link>
      </p>
    </section>

  );
}