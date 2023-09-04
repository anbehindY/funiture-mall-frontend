import { useState } from 'react';
// import { Link, redirect, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// // import { postUserLogin } from '../../store/userSllice';

const FurnitureForm = ({ currUser, setCurrUser }) => {
  const [furnitureData, setFurnitureData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    warranty: '',
  });

  const handleChange = (e) => {
    setFurnitureData({
      ...furnitureData,
      [e.target.name]: e.target.value,
    });
  };

  const furnitureHandler = async (e) => {
    e.preventDefault();

    const furnitureInfo = {
      furniture: { ...furnitureData },
    };
    console.log(furnitureInfo);
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
              value={furnitureData.name}
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
              value={furnitureData.image}
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
              onChange={handleChange}
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
              onChange={handleChange}
              value={furnitureData.warranty}
            />
          </div>
          <div className="form-row-last">
            <textarea
              type="textarea"
              name="description"
              id="description"
              className="input-text"
              placeholder="Enter the furniture description"
              rows={10}
              cols={30}
              required
              onChange={handleChange}
              value={furnitureData.description}
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
