import { useState } from 'react';
// import { Link, redirect, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFurniture } from '../../../store/furnitureSlice';

const FurnitureForm = () => {
  const { user } = JSON.parse(localStorage.getItem('user'));

  const [furnitureData, setFurnitureData] = useState({
    user_id: '',
    name: '',
    description: '',
    image: '',
    price: '',
    warranty: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFurnitureData({
      ...furnitureData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePrice = (e) => {
    setFurnitureData({
      ...furnitureData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleWarranty = (e) => {
    setFurnitureData({
      ...furnitureData,
      user_id: user.id,
      [e.target.name]: Number(e.target.value),
    });
  };

  const furnitureHandler = (e) => {
    e.preventDefault();

    dispatch(addFurniture(furnitureData));
  };

  return (
    <div className="container-login">
      <div className="container-form">
        <form className="form-login" onSubmit={furnitureHandler}>
          <h2>Login Furniture Mall</h2>
          <div className="form-row">
            <input
              type="text"
              name="name"
              id="name"
              className="input-text"
              placeholder="Furniture name"
              required
              onChange={handleChange}
              // value={furnitureDataname}
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="image"
              id="image"
              className="input-text"
              placeholder="Enter image url"
              required
              onChange={handleChange}
              // value={image}
            />
          </div>

          <div className="form-row-last">
            <input
              type="number"
              name="price"
              id="price"
              className="input-text"
              placeholder="Furniture price"
              required
              onChange={handlePrice}
              value={furnitureData.price}
            />
          </div>
          <div className="form-row-last">
            <input
              type="number"
              name="warranty"
              id="warranty"
              className="input-text"
              placeholder="Warranty"
              required
              onChange={handleWarranty}
              value={furnitureData.warranty}
            />
          </div>
          <div className="form-row-last">
            <input
              type="text"
              name="description"
              id="description"
              className="input-text"
              placeholder="Enter the furniture description"
              rows={10}
              cols={30}
              required
              onChange={handleChange}
              // value={description}
            />
          </div>
          <div className="form-row-last">
            <input type="submit" className="register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FurnitureForm;
