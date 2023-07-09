import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import ClothDetails from '../components/ClothDetails';
import { fetchClothItem } from '../redux/actions';

function ClothItemContainer() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const clothItem = useSelector(state => state.clothItem);
  const loading = useSelector(state => state.clothItem.loading);
  useEffect(() => {
    dispatch(fetchClothItem(id));
  }, []);

  return loading ? (
    <h2 className="text-center pt-5">
      <ScaleLoader size={16} color="white" />
    </h2>
  ) : (
    <ClothDetails cloth={clothItem.cloth} />
  );
}

export default ClothItemContainer;