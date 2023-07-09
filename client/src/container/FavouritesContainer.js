import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import ClothItem from '../components/ClothItem';
import { fetchFavourites } from '../redux/actions';

function FavouritemsContainer({ clothData, getClothes }) {
  useEffect(() => {
    getClothes();
  }, []);
  const token = useSelector(state => state.user.token);

  const handleFavourite = id => {
    // eslint-disable-next-line no-unused-vars
    const clothInfo = {
      cloth_id: id,
    };
  };

  // eslint-disable-next-line no-nested-ternary
  return clothData.loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="orange" />
    </h2>
  ) : token === undefined || token === 'undefined' ? (
    <h2 className="text-center pt-5 white">
      { clothData.error }
      <Redirect to="/login" />
    </h2>
  ) : (
    <Container className="bg-dark">
      <div className="mt-5 d-flex flex-wrap justify-content-center">
        { clothData.clothes.map(clothInfo => (
          <ClothItem
            key={clothInfo.id}
            cloth={clothInfo}
            handleFavourite={() => handleFavourite(clothInfo.id)}
          />
        )) }
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  clothData: state.getFavs,
});

const mapDispatchToProps = dispatch => ({
  getClothes: () => dispatch(fetchFavourites()),
});

FavouritesContainer.propTypes = {
  clothData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    clothes: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
    token: PropTypes.string,
  }),
  getClothes: PropTypes.func.isRequired,
};

FavouritesContainer.defaultProps = {
  clothData: {
    clothes: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesContainer);