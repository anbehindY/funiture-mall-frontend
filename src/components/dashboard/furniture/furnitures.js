import fimage from '../../../assets/sofa.jpg';
import './furniture.css';

const Furnitures = () => (
  <div className="furniture-container">
    <div className="furniture-header">
      <h1>Furnitures Lists </h1>
    </div>
    <div className="furniture-content">
      <div className="furniture-image">
        <img src={fimage} alt="Furniture" />
      </div>
      <div className="furniture-image">
        <img src={fimage} alt="Furniture" />
      </div>
      <div className="furniture-image">
        <img src={fimage} alt="Furniture" />
      </div>
    </div>
  </div>
);
export default Furnitures;
