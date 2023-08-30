import logo from './logo.png';

const LeftSidebar = () => (
  <div className="leftsidebar-container">
    <div className="upper-part">
      <div className="app-logo">
        <div className="logo-image">
          <img src={logo} alt="Application Logo" />
          <h3>Dashboard</h3>
        </div>
      </div>
    </div>
    <div className="left-content">
      <ul className="action-list">
        <li className="item">
          <span>Furniture</span>
        </li>
        <li className="item">
          <span>Appointment</span>
        </li>
        <li className="item">
          <span>Sold History</span>
        </li>
        <li className="item">
          <span>Discount</span>
        </li>
        <li className="item">
          <span>Meetings</span>
        </li>
        <li className="item">
          <span>Trash</span>
        </li>
      </ul>
      <ul className="category-list">
        <li className="item">
          <span>Customer</span>
        </li>
        <li className="item">
          <span>Address</span>
        </li>
        <li className="item">
          <span>Help</span>
        </li>
        <li className="item">
          <span>Logout</span>
        </li>
      </ul>
    </div>
  </div>
);

export default LeftSidebar;
