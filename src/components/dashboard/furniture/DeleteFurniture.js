import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Delete.css';
// import { Link } from 'react-router-dom';

import { getFurnitures, deleteFurniture } from '../../../store/furnitureSlice';

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
    <div>
      <LeftSidebar />
      <div className="tabledelete">
        <h2 className="titlefurniture">ALL MODELS</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Warranty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {furnitures[0]?.map((furniture) => (
              <tr key={furniture.id}>
                <td>{furniture.id}</td>
                <td>{furniture.name}</td>
                <td>{furniture.price}</td>
                <td>{furniture.warranty}</td>
                <td>
                  <button type="button" onClick={() => handleDeleteFurniture(furniture.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteFurniture;
