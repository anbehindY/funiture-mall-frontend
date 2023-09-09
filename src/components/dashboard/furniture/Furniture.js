import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleFurniture } from '../../../store/singleFurnitureSlice';
import LeftSidebar from '../sidebar/leftsidebar';

const Furniture = () => {
  const { singleFurniture } = useSelector((state) => state.singleFurniture);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleFurniture(id));
  }, [dispatch, id]);

  const filteredItem = singleFurniture?.find((fur) => fur.id === Number(id));

  return (
    <div className="main_furniture_select">
      <LeftSidebar />
      {filteredItem && (
        <div className="furniture_select">
          <div className="furniture-image">
            <img
              src={`${filteredItem.image}`}
              className="imgfurniture_select"
              alt="Furniture"
            />
            <h1 className="name_furniture_select">{filteredItem.name}</h1>
            <p className="description_furniture_select">
              {filteredItem[0]?.description}
            </p>
            <p className="price_furniture_select">
              <span>Price:</span>
              <span>{filteredItem.price}</span>
            </p>
            <p className="warranty_furniture_select">
              <span>Waranty:</span>
              <span>
                {filteredItem.warranty}
                years
              </span>
            </p>
            <p className="production_furniture_select">
              <span>Production date:</span>
              <span>{filteredItem.created_at}</span>
            </p>
            <Link to="/new-appointment" state={{ furniture: filteredItem }}>
              <button type="submit" className="reserver_furniture">
                {' '}
                Book appointment
                <i className="fa fa-arrow-circle-o-right" />
              </button>
            </Link>

            <Link to="/dashboard">
              <button type="submit" className="back_furniture">
                <i className="fa fa-arrow-left" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default Furniture;
