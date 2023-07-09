import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import ClothItemContainer from '../container/ClothItemContainer';

export default function ClothItemDetail() {
  return (
    <Container>
      <ClothItemContainer />
      <Footer />
    </Container>
  );
}