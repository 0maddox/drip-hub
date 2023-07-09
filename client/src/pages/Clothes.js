import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import ClothContainer from '../container/ClothContainer';

export default function Clothes() {
  return (
    <Container className="bg-dark">
      <Navigation />
      <ClothContainer />
      <Footer />
    </Container>
  );
}