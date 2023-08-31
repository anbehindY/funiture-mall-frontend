import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Furniture = () => {
  const { furnitures } = useSelector((store) => store.furniture);

  console.log(furnitures[0]);

  const { id } = useParams();

  // console.log(id);

  // const filteredItem = furnitures[0].map((fur) => fur.id);

  // console.log(filteredItem);

  return (
    <div className="furniture-image">
      <img src={filteredItem.image} alt="Furniture" />
      <h1>{filteredItem.name}</h1>
      <p>{filteredItem.description}</p>
    </div>
  );
};
export default Furniture;
