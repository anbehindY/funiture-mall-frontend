import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftSidebar from '../sidebar/leftsidebar';
// // import { getFurnitures } from '../../../store/furnitureSlice';

const FurnitureList = ({ currUser }) => {
  // const { furnitures } = useSelector((store) => store.furniture);
  const [fur, setFur] = useState(null);

  // const dispatch = useDispatch();

  // console.log(furnitures);

  // useEffect(() => {
  //   if (curUser) {
  //     dispatch(getFurnitures());
  //   }
  // }, [dispatch, furnitures]);

  const getFurnitures = async () => {
    try {
      const response = await fetch('http://[::1]:3001/api/v1/furnitures', {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          authorization: localStorage.getItem('token'),
        },
      });
      if (!response.ok) throw Error;
      const data = await response.json();
      console.log(data);
      setFur(data);
    } catch (error) {
      console.log('error', error);
      setFur(null);
    }
  };

  useEffect(() => {
    getFurnitures();
  }, [currUser]);

  return (
    <div className="furniture-container">
      <LeftSidebar />
      {fur?.map((furniture) => (
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
