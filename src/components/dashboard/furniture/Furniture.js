import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFurnitures } from '../../../store/furnitureSlice';

const Furniture = () => {
  const { furnitures } = useSelector((store) => store.furniture);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // if (furnitures.length === 0) {
    dispatch(getFurnitures());
    // }
  }, [dispatch]);

  // console.log(furnitures);

  console.log(id);

  const filteredItem = furnitures[0]?.filter((fur) => fur.id === Number(id));

  filteredItem && console.log(`${filteredItem[0].image}`);

  return (
    <div className="furniture-image">
      {filteredItem && (
        <div className="furniture-image">
          <img src={`${filteredItem[0].image}`} alt="Furniture" />
          <h1>{filteredItem[0].name}</h1>
          <p>{filteredItem[0].description}</p>
        </div>
      )}
    </div>
  );
};
export default Furniture;
