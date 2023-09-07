import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFurniture } from '../../../store/furnitureSlice';
import LeftSidebar from '../sidebar/leftsidebar';

const FurnitureForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [warranty, setWarranty] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const furnitureHandler = async (e) => {
    e.preventDefault();

    const response = await dispatch(
      addFurniture({
        name, description, image, price, warranty,
      }),
    );

    if (response.type === 'add/furniture/fulfilled') {
      navigate('/dashboard');
    }
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
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
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
              onChange={(e) => {
                setImage(e.target.value);
              }}
              value={image}
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
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              value={price}
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
              onChange={(e) => {
                setWarranty(e.target.value);
              }}
              value={warranty}
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
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={description}
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
