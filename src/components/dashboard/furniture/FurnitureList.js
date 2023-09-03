import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftSidebar from '../sidebar/leftsidebar';
import { getFurnitures } from '../../../store/furnitureSlice';

import './furniture.css';
import '../dashboard.css';

const FurnitureList = ({ currUser, setCurrUser }) => {
  const { furnitures } = useSelector((store) => store.furniture);

  const dispatch = useDispatch();

  console.log(furnitures);

  useEffect(() => {
    dispatch(getFurnitures());
  }, [currUser, dispatch]);

  return (
    <div className="furniture-container">
      {furnitures[0]?.map((furniture) => (
        <Link to={`/furnitures/${furniture.id}`} key={furniture.id}>
          <div className="furniture-image">
            <img src={furniture.image} alt="Furniture" />
            <h1>{furniture.name}</h1>
            <p>{furniture.description}</p>
          </div>
        </Link>
      ))}
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
