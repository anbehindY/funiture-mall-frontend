import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFurniture } from '../../../store/furnitureSlice';
import LeftSidebar from '../sidebar/leftsidebar';

const FurnitureForm = () => {


  const [furnitureDetail, setFurnitureDetail] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    warranty: '',
    user_id: '',
  });

  const { user } = JSON.parse(localStorage.getItem('user'));
  const userId = user.id;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFurnitureDetail({
      ...furnitureDetail,
      [e.target.name]: e.target.value,
    });
  };

  const pricehandler = (e) => {
    setFurnitureDetail({
      ...furnitureDetail,
      [e.target.name]: Number(e.target.value),
    });
  };

  const warrantyhandler = (e) => {
    setFurnitureDetail({
      ...furnitureDetail,
      user_id: user.id,
      [e.target.name]: Number(e.target.value),
    });
  };

  const furnitureHandler = async (e) => {
    e.preventDefault();

    console.log(furnitureDetail);

    const response = await dispatch(addFurniture(furnitureDetail));

    if (response.type === 'add/furniture/fulfilled') {
      navigate('/dashboard');
    }
  };

  return (
    <div className="containerFur">
      <div className="container-formfu">
        <form className="form-loginFur" onSubmit={furnitureHandler}>
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
              onChange={pricehandler}
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
              onChange={warrantyhandler}
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