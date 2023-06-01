import React, { useState } from "react";
import { Header } from "./Header";
import { Shop } from "../pages/Shop";
import { ShopList } from "../pages/ShopList";
import "../Styles/main.css"

export const PagesWrapper = () => {
  const [openPage, setOpenPage] = useState("Shop");
  const [shopList, setShopList] = useState([]);

  const changePage = (page) => {
    setOpenPage(page);
  };

  return (
    <div className="page-wrapper">
      <Header changePage={changePage} />
      <div className="content-wrapper">
        {openPage === "Shop" ? (
          <Shop shopList={shopList} setShopList={setShopList} />
        ) : (
          <ShopList shopList={shopList} setShopList={setShopList} />
        )}
      </div>
    </div>
  );
};