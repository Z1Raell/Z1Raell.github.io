import React from "react";

export const Menu = ({ restaurant, addToShopList }) => {
  return (
    <div className="menu-wrapper">
      <div className="restaurant-name">{restaurant.name}</div>
      <div className="menu-items">
        {restaurant.menu.map((item, index) => (
          <div className="menu-item" key={index}>
            <div className="item-image">{item.img}</div>
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}</div>
            <button
              className="add-button"
              onClick={() => {
                addToShopList({ ...item, quantity: 1 });
              }}
            >
              Add to Shop List
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

