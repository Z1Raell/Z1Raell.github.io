import React, { useState } from "react";
import { OrderForm } from "../component/Orderform";

export const ShopList = ({ shopList, setShopList }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number should be 10 digits";
    }

    if (!formData.address) {
      errors.address = "Address is required";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setIsSubmitting(true);
      // Имитация отправки данных на сервер
      setTimeout(() => {
        console.log("Form data:", formData);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          address: "",
        });
        setFormErrors({});
        setIsSubmitting(false);
        setShopList([]);
      }, 2000);
    }
  };

  const increaseQuantity = (item) => {
    const updatedShopList = shopList.map((shopItem) => {
      if (shopItem.name === item.name) {
        return { ...shopItem, quantity: shopItem.quantity + 1 };
      }
      return shopItem;
    });
    setShopList(updatedShopList);
  };

  const decreaseQuantity = (item) => {
    const updatedShopList = shopList.map((shopItem) => {
      if (shopItem.name === item.name && shopItem.quantity > 0) {
        return { ...shopItem, quantity: shopItem.quantity - 1 };
      }
      return shopItem;
    });

    const updatedShopListWithoutZeroQuantity = updatedShopList.filter(
      (shopItem) => shopItem.quantity !== 0
    );
    setShopList(updatedShopListWithoutZeroQuantity);
  };
  return (
    <div className="shop-list-wrapper">
      <h2 className="cart-heading">Shopping Cart</h2>
      {shopList.length === 0 ? (
        <p className="cart-empty">Cart is empty</p>
      ) : (
        <ul>
          {shopList.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="item-info">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">${item.price}</p>
              </div>
              <div>
                Quantity: {item.quantity}
                <button
                  className="quantity-button"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
                <button
                  className="quantity-button"
                  onClick={() => decreaseQuantity(item)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
          <div>
            {shopList.reduce((accumulator, currentItem) => {
              return accumulator + currentItem.price * currentItem.quantity;
            }, 0)}{" "}
            $
          </div>
        </ul>
      )}
      <OrderForm
        formData={formData}
        formErrors={formErrors}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
