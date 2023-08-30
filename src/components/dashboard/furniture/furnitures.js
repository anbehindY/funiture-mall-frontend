import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFurnitures } from '../../../store/furnitureSlice';
import fimage from '../../../assets/sofa.jpg';

import './furniture.css';

const Furnitures = () => {
  const { furnitures } = useSelector((store) => store.furniture);

  const dispatch = useDispatch();

  console.log(furnitures);

  useEffect(() => {
    if (furnitures.length === 0) {
      dispatch(getFurnitures());
    }
  }, [dispatch, furnitures]);

  return (
    <div className="furniture-container">
      <div className="furniture-header">
        <h1>Furnitures Lists </h1>
      </div>

      {furnitures[0]?.map((furniture) => (
        <div className="furniture-image" key={furniture.id}>
          <img src={fimage} alt="Furniture" />
          <h1>{furniture.name}</h1>
          <p>{furniture.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Furnitures;
