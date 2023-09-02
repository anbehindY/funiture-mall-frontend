import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFurnitures } from '../../../store/furnitureSlice';

const FurnitureList = ({ curUser }) => {
  const { furnitures } = useSelector((store) => store.furniture);

  const dispatch = useDispatch();

  // console.log(furnitures);

  useEffect(() => {
    if (curUser) {
      dispatch(getFurnitures());
    }
  }, [dispatch, furnitures]);

  return (
    <div className="furniture-container">
      {furnitures[0]?.map((furniture) => (
        <Link to={`/furnitures/${furniture.id}`} key={furniture.id}>
          <div className="furniture-image">
            <img src={furniture.image} alt="Furniture" />
            <h1>{furniture.name}</h1>
            <p>{furniture.description}</p>
          </div>
        </Link>

        // <div className="furniture-image" key={furniture.id}>
        //   <img src={furniture.image} alt="Furniture" />
        //   <h1>{furniture.name}</h1>
        //   <p>{furniture.description}</p>
        // </div>
      ))}
    </div>
  );
};
export default FurnitureList;
