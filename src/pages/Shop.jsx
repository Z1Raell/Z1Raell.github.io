import React, { useState } from "react";
import { RestoranList } from "../component/restoranList";
import { Menu } from "../component/Menu";

const restaurants = [
  /* Тут указана заглушка в виде захардкодженова обекта,для его обработки, 
  такая структура будет ожилаться в виде ответа от запроса на сервер. 
  Для получения данных с сервера можно будет использовать такой код 
    useEffect( () => {
      fetch("URL-сервера на который мы будем посылать GET запрос для получения данных")
      .then((res) => res.json()) получаем ответ с сервера ввиде JSON файла и преобразовываем его в js масив
      .then( (restaurants) =>  addresturants(restaurants))


    },[]) Мы будем вызывать этот useEfect только при первом рендеринге что-бы установить масив который мы получим с серера

  */


  {
    name: "MCdonalds",
    adress: "",
    menu: [
      {
        name: "Chees burger",
        price: 130,
        img: "",
      },
      {
        name: "Mack chiken",
        price: 90,
        img: "",
      },
      {
        name: "big taste",
        price: 170,
        img: "",
      },
      {
        name: "naggets",
        price: 50,
        img: "",
      },
    ],
  },
  {
    name: "KFC",
    adress: "",
    menu: [],
  },
  {
    name: "Burger King",
    adress: "",
    menu: [],
  },
  {
    name: "Shawarma",
    adress: "",
    menu: [],
  },
  {
    name: "Duble&decker",
    adress: "",
    menu: [],
  },
];

export const Shop = ({ shopList, setShopList }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const selectRestaurant = (restaurant) => {
    if (shopList.length > 0) {
      setShowConfirmation(true);
    } else {
      setSelectedRestaurant(restaurant);
      setShopList([]);
    }
  };
  const confirmRestaurantChange = () => {
    setSelectedRestaurant(null);
    setShopList([]);
    setShowConfirmation(false);
  };

  const cancelRestaurantChange = () => {
    setShowConfirmation(false);
  };

  const addToShopList = (item) => {
    const existingItem = shopList.find(
      (shopItem) => shopItem.name === item.name
    );

    if (existingItem) {
      const updatedShopList = shopList.map((shopItem) => {
        if (shopItem.name === item.name) {
          return { ...shopItem, quantity: shopItem.quantity + 1 };
        }
        return shopItem;
      });
      setShopList(updatedShopList);
    } else {
      setShopList([...shopList, { ...item, quantity: 1 }]);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <RestoranList
        selectRestaurant={selectRestaurant}
        restaurants={restaurants}
      />
      {selectedRestaurant ? (
        <Menu
          restaurant={selectedRestaurant}
          addToShopList={addToShopList}
          shopList={shopList}
        />
      ) : (
        <div>Please select a restaurant</div>
      )}
      {showConfirmation && (
        <div className="confirmation-modal">
          <p>Changing the restaurant will clear your cart. Are you sure?</p>
          <button onClick={confirmRestaurantChange}>Yes</button>
          <button onClick={cancelRestaurantChange}>No</button>
        </div>
      )}
    </div>
  );
};
