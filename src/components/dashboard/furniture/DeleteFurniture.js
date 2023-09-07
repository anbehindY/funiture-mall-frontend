import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Delete.css'
// import { Link } from 'react-router-dom';

import { getFurnitures } from '../../../store/furnitureSlice';
import { deleteFurniture } from '../../../store/furnitureSlice';

import './furniture.css';
import '../dashboard.css';
import LeftSidebar from '../sidebar/leftsidebar';

const DeleteFurniture = () => {
  const { furnitures } = useSelector((store) => store.furniture);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFurnitures());
  }, [dispatch]);

  const handleDeleteFurniture = (id) => {
    dispatch(deleteFurniture(id));
  };

  return (
    <div className="carousel1">
      <LeftSidebar />
      <div className="tabledelete">
      <h2 className="titlefurniture"> ALL MODELS </h2>
    
      {furnitures[0]?.map((furniture) => (
        <table className="furnitureItem" key={furniture.id}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Warranty</th>
            <th></th>
          </tr>

          <tr>
            <th>{furniture.id}</th>
            <th>{furniture.name}</th>
            <th>{furniture.price}</th>
            <th>{furniture.warranty}</th>
            <th >
              <button className='bnt'
                onClick={() => {
                  handleDeleteFurniture(furniture.id);
                }}
              >
                Delete
              </button>
            </th>
          </tr>
        </table>
      ))}
        </div>
    </div>
  );
};

export default DeleteFurniture;
