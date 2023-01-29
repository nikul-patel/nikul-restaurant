import React from "react";
// import "../styles/globals.css";

const MainCourseMenu = () => (
  <div className="menu-container">
    <h2 className="menu-header text-center font-bold text-3xl">Main Course</h2>
    <div className="menu-items">
      <div className="menu-item">
        <h3 className="item-name">Punjabi Thali</h3>
        <p className="item-description">
          Daal Makhani, Butter Chicken, Rice, Naan, Raita
        </p>
        <p className="item-price">₹129</p>
      </div>
      <div className="menu-item">
        <h3 className="item-name">Amritsari Fish</h3>
        <p className="item-description">
          Fried fish in a spicy batter served with onion and lemon slices
        </p>
        <p className="item-price">₹149</p>
      </div>
      <div className="menu-item">
        <h3 className="item-name">Sarson ka Saag</h3>
        <p className="item-description">
          Spiced mustard greens stew served with makki ki roti
        </p>
        <p className="item-price">₹109</p>
      </div>
      <div className="menu-item">
        <h3 className="item-name">Tandoori Chicken</h3>
        <p className="item-description">
          Marinated chicken roasted in a clay oven served with mint chutney and
          onion salad
        </p>
        <p className="item-price">₹169</p>
      </div>
      <div className="menu-item">
        <h3 className="item-name">Chole Bhature</h3>
        <p className="item-description">
          Spiced chickpeas and deep-fried bread served with pickle and yogurt
        </p>
        <p className="item-price">₹99</p>
      </div>
      <div className="menu-item">
        <h3 className="item-name">Paneer Tikka</h3>
        <p className="item-description">
          Grilled cottage cheese skewers served with mint chutney and onion
          salad
        </p>
        <p className="item-price">₹139</p>
      </div>
      <div className="menu-item">
        <h3 className="item-name">Lassi</h3>
        <p className="item-description">
          Sweet or salty yogurt drink served chilled
        </p>
        <p className="item-price">₹30</p>
      </div>
    </div>
  </div>
);

export default MainCourseMenu;




export const MenuCard = () => {
  return (
    <div className="menu-card-container">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-section">
        <h2 className="section-title">Starters</h2>
        <ul className="section-items">
          <li>
            Aloo Tikki - <span className="price">₹150</span>
          </li>
          <li>
            Samosa - <span className="price">₹80</span>
          </li>
          <li>
            Paneer Tikka - <span className="price">₹200</span>
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <h2 className="section-title">Main Course</h2>
        <ul className="section-items">
          <li>
            Butter Chicken - <span className="price">₹450</span>
          </li>
          <li>
            Chana Masala - <span className="price">₹400</span>
          </li>
          <li>
            Punjabi Kadhi - <span className="price">₹350</span>
          </li>
        </ul>
      </div>
      <div className="menu-section">
        <h2 className="section-title">Beverages</h2>
        <ul className="section-items">
          <li>
            Lassi - <span className="price">₹100</span>
          </li>
          <li>
            Masala Chai - <span className="price">₹80</span>
          </li>
          <li>
            Sweet Lassi - <span className="price">₹120</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
