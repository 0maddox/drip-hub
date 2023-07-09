import React, { useEffect, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { ScaleLoader } from 'react-spinners';
import { Redirect } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import ClothItem from '../components/ClothItem';
import { fetchClothes, addFavourites, removeFavourites } from '../redux/actions';

function ClothContainer({ clothData, getClothes }) {
  const [visible, setVisible] = useState(false);
  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getClothess();
    closeModal();
  }, []);

  const token = useSelector(state => state.user.token);
  const favState = useSelector(state => state.favourites);

  const handleFavourite = (id, favourit) => {
    const clothInfo = {
      cloth_id: id,
    };

    if (favourit === 'Yes') {
      dispatch(removeFavourites(id));
      openModal();
    } else {
      dispatch(addFavourites(carInfo));
      openModal();
    }
    getClothes();
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
        { clothData.clothess.map(clothInfo => (
          <ClothItem
            key={clothInfo.id}
            cloth={clothInfo}
            handleFavourite={() => handleFavourite(clothInfo.id, clothInfo.fav)}
          />
        )) }
        <Modal visible={visible} width="300" height="100" effect="fadeInUp" onClickAway={() => closeModal()}>
          <div className="modal-popup">
            <p className="text-center">{favState.message || favState.error}</p>
            <button type="button" className="btn-oval" onClick={() => closeModal()}>Close</button>
          </div>
        </Modal>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  clothData: state.clothes,
});

const mapDispatchToProps = dispatch => ({
  getClothess: () => dispatch(fetchClothes()),
});

CarContainer.propTypes = {
  clothData: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    clothes: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
    token: PropTypes.string,
  }),
  getclothess: PropTypes.func.isRequired,
};

ClothContainer.defaultProps = {
  clothData: {
    clothes: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(CarContainer);