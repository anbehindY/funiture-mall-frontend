import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-elastic-carousel";
// import 'bootstrap/dist/css/bootstrap.css';
// import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";

import { getFurnitures } from '../../../store/furnitureSlice';
import './furniture.css';
import '../dashboard.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

var settings = {
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
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const FurnitureList = () => {
  const { furnitures } = useSelector((state) => state.furniture);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFurnitures());
  }, [dispatch]);

  return (
    <div className="furniture-container">
      {furnitures[0].map((furniture) => (
        <Link to={`/furnitures/${furniture.id}`} key={furniture.id}>
          <div className="furniture-image">
            <img src={furniture.image} alt="Furniture" />
            <h1>{furniture.name}</h1>
            <p>{furniture.description}</p>
          </div>
        </Link>
        </div>
      ))}
    </Slider>
  </div>
  );
};
export default FurnitureList;

// i worked on project setup this
// my attention

// create furniture from front end = Prince
// list fetch furnitue from appoint = Prince
// distails details of furnitue = Prince
// list appointment = Esther
// display details of appointment = Esther
// create appointment this may easy = Esther
//  can remove appointment =Esther
//  can remove furniture = Prince

// the customer should login into system (authorization greate job)
// list fetch furnitue from appoint
// distails details of furnitue
// list their appointment
// display details of his/her appointment
// create appointment this may easy

//  can remove appointment

//  responsiveness big work next time
//  required

//  crucial job is on authentication and authorization

// return (
//   <div className="furniture-container">
//     {furnitures[0]?.map((furniture) => (
//       <Link to={`/furnitures/${furniture.id}`} key={furniture.id}>
//         <div className="furniture-image">
//           <img src={furniture.image} alt="Furniture" />
//           <h1>{furniture.name}</h1>
//           <p>{furniture.description}</p>
//         </div>
//       </Link>
//     ))}
//   </div>
// );


