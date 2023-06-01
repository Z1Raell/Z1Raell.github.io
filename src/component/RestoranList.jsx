import React from "react";

export const RestoranList = ({ selectRestaurant, restaurants }) => {
  return (
    <div className="restaurant-list-wrapper">
      {restaurants.map((restaurant, index) => (
        <div
          key={index}
          className="restaurant-item"
          onClick={() => {
            selectRestaurant(restaurant);
          }}
        >
          {restaurant.name}
        </div>
      ))}
    </div>
  );
};

