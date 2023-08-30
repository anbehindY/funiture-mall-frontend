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
        <div>
          <h2>Furniture 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec mattis tellus. Ut semper dui eget efficitur sollicitudin.
          </p>
        </div>
      </div>
      <div className="furniture-image">
        <img src={fimage} alt="Furniture" />
        <div>
          <h2>Furniture 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec mattis tellus. Ut semper dui eget efficitur sollicitudin.
          </p>
        </div>
      </div>
      <div className="furniture-image">
        <img src={fimage} alt="Furniture" />
        <div>
          <h2>Furniture 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            nec mattis tellus. Ut semper dui eget efficitur sollicitudin.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default Furnitures;
