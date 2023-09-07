import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFurnitures } from '../../../store/furnitureSlice';
import LeftSidebar from '../sidebar/leftsidebar';
import FurnitureItem from './fitem';

const Furniture = () => {
  const { furnitures } = useSelector((state) => state.furniture);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFurnitures());
  }, [id, dispatch]);

  const filteredItem = furnitures[0]?.filter((fur) => fur.id === Number(id));

  return (
    <div className="main_furniture_select">
      <LeftSidebar />
      <div className="furniture_select">
        {filteredItem ? (<FurnitureItem filteredItem={filteredItem} />) : (<div>No Data</div>)}
      </div>
    </div>
  );
};

export default Furniture;
