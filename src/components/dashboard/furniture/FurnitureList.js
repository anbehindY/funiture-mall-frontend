import React, { useState,useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getFurnitures } from '../../../store/furnitureSlice';

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
    if (currUser) getFurnitures();
  }, [currUser]);

  // console.log(fur);

  return (
    <div className="furniture-container">
      {fur?.map((furniture) => (
        <Link to={`/furnitures/${furniture.id}`} key={furniture.id}>
          <div className="furniture-image">
            <img src={furniture.image} alt="Furniture" />
            <h1>{furniture.name}</h1>
            <p>{furniture.description}</p>
          </div>
        </Link>
      ))}
      {/* <p>furnitures list</p> */}
    </div>
  );
};
export default FurnitureList;
