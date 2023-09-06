import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Carousel from "react-elastic-carousel";
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';

import { getFurnitures } from '../../../store/furnitureSlice';

import './furniture.css';
import '../dashboard.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
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
  ],
};
const FurnitureList = () => {
  const { furnitures } = useSelector((store) => store.furniture);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFurnitures());
  }, [dispatch]);

  return (
    <div className="carousel">
      <h2 className="titlefurniture"> LATEST MODELS </h2>
      <h2 className="titlefurniture1">Please Select a models </h2>

      <Slider {...settings}>

        {furnitures[0]?.map((furniture) => (
          <div className="furnitureItem">
            <Link to={`/furnitures/${furniture.id}`} key={furniture.id} className="furniture-link ">
              <div className="furnitureimage">
                <img src={furniture.image} className="imgfurniure" alt="Furniture" />
                <h1 className="furniture_name center">{furniture.name}</h1>
                <div className="Divtiret-pointille">
                  {' '}
                  <span className="tiret-pointille" />
                  {' '}
                </div>
                <h6 className="furniture_description ">{furniture.description}</h6>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default FurnitureList;