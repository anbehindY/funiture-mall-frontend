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
  }, [dispatch, id]);

  console.log(furnitures);

  // console.log(id);

  const filteredItem = furnitures?.map((fur) => {
    if (fur.id === id) {
      return fur;
    } else {
       console.log('Not seen');
    }
  });

  console.log(filteredItem);

  return (
    <div className="furniture-image">
      {/* <img src={filteredItem.image} alt="Furniture" />
      <h1>{filteredItem.name}</h1>
      <p>{filteredItem.description}</p> */}
      <p>{`Hello ${id}`}</p>
    </div>
  );
};
export default Furniture;
