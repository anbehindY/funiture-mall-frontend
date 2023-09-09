import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { getFurnitures } from '../../../store/furnitureSlice';

import './furniture.css';
import '../dashboard.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, cursor: 'pointer' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <span className="sr-only">.</span>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, cursor: 'pointer' }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <span className="sr-only">.</span>
    </div>
  );
}

const FurnitureList = () => {
  const { furnitures, isLoading, loadingError } = useSelector(
    (store) => store.furnitures,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFurnitures());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="carousel">
        <h3>
          <em>loading...</em>
        </h3>
      </div>
    );
  }

  if (loadingError) {
    return (
      <div className="carousel">
        <h3>
          <em>Error loading furnitures</em>
        </h3>
      </div>
    );
  }

  return (
    <div className="carousel">
      <h2 className="titlefurniture"> LATEST MODELS </h2>
      <h2 className="titlefurniture1">Please Select a model </h2>

      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
        initialSlide={0}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        {furnitures?.map((furniture) => (
          <div className="furnitureItem" key={furniture.id}>
            <Link
              to={`/furnitures/${furniture.id}`}
              className="furniture-link "
            >
              <div className="furnitureimage">
                <img
                  src={furniture.image}
                  className="imgfurniure"
                  alt="Furniture"
                />
                <h1 className="furniture_name center">{furniture.name}</h1>
                <div className="Divtiret-pointille">
                  {' '}
                  <span className="tiret-pointille" />
                  {' '}
                </div>
                <h6 className="furniture_description ">
                  {furniture.description}
                </h6>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default FurnitureList;

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.shape.isRequired,
  onClick: PropTypes.func.isRequired,
};

SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.shape.isRequired,
  onClick: PropTypes.func.isRequired,
};
