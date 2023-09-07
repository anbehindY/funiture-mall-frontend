import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getFurnitures } from '../../../store/furnitureSlice';
import LeftSidebar from '../sidebar/leftsidebar';

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
      {' '}
      <LeftSidebar />
      <div className="furniture_select">
        {filteredItem && (
          <div className="furniture-image">
            <img
              src={`${filteredItem[0].image}`}
              className="imgfurniture_select"
              alt="Furniture"
            />
            <h1 className="name_furniture_select">{filteredItem[0].name}</h1>
            <p className="description_furniture_select">
              {filteredItem[0].description}
            </p>
            <p className="price_furniture_select">
              <span>Price:</span>
              <span>{filteredItem[0].price}</span>
            </p>
            <p className="warranty_furniture_select">
              <span>Waranty:</span>
              <span>
                {filteredItem[0].warranty}
                years
              </span>
            </p>
            <p className="production_furniture_select">
              <span>Production date:</span>
              <span>{filteredItem[0].created_at}</span>
            </p>
            <button type="submit" className="reserver_furniture">
              Reserve
              <i className="fa fa-arrow-circle-o-right" />
            </button>
            <button type="submit" className="back_furniture">
              {' '}
              <i className="fa fa-arrow-left" />
              {' '}
            </button>
          </div>
        )}
      </div>
  );
};
export default Furniture;
