import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFurnitures } from '../../../store/furnitureSlice';
import LeftSidebar from '../sidebar/leftsidebar';

const Furniture = () => {
  const { furnitures } = useSelector((state) => state.furniture);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFurnitures());
  }, [dispatch, id]);

  const filteredItem = furnitures[0]?.filter((fur) => fur.id === Number(id));

  return (
    <div className="main_furniture_select">
      {' '}
      <LeftSidebar />
      {filteredItem && (
        <div className="furniture-image">
          <img src={`${filteredItem[0].image}`} alt="Furniture" />
          <h1>{filteredItem[0].name}</h1>
          <p>{filteredItem[0].description}</p>
          <p>
            <span>Price:</span>
            <span>${filteredItem[0].price}</span>
          </p>
          <p>
            <span>Waranty:</span>
            <span>
              {filteredItem[0].warranty}
              years
            </span>
          </p>
          <p>
            <span>Production date:</span>
            <span>{filteredItem[0].created_at}</span>
          </p>
          <Link to="/new-appointment" state={{ furniture: filteredItem[0] }}>
            Book appointment
          </Link>
        </div>
      )}
    </div>
  );
};
export default Furniture;
