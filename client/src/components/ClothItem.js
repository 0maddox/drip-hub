import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsHeartFill } from 'react-icons/bs';

export default function ClothItem({ cloth, handleFavourite }) {
  return (

    <Card style={{ width: '18rem' }} className="m-2">
      <Card.Img variant="top" src={cloth.image} />
      <Card.Body>
        <Card.Title className="font-weight-bold">
          <BsHeartFill size={20} color={cloth.fav === 'Yes' ? 'red' : 'gray'} title="Add to Favourite" onClick={handleFavourite} />
          {' '}
          { cloth.name }
        </Card.Title>
       
        <Link to={`clothes/${cloth.id}`} className="btn-oval p-2">Learn more</Link>
      </Card.Body>
    </Card>

  );
}

ClothItem.propTypes = {
  cloth: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fav: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
  }).isRequired,
  handleFavourite: PropTypes.func.isRequired,
};