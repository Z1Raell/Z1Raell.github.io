  import React from "react";

  export const Header = ({ changePage }) => {
    return (
      <div className="header">
        <div
          className="header-item"
          onClick={() => {
            changePage("Shop");
          }}
        >
          Shop
        </div>
        <div
          className="header-item"
          onClick={() => {
            changePage("Shopping Cart");
          }}
        >
          Shopping Cart
        </div>
      </div>
    );
  };
  
