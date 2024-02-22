import "./Restaurant.css";

import React, { useState } from "react";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueCategory = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueCategory);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((currElem) => {
      return currElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={uniqueCategory}></Navbar>
      <MenuCard menuData={menuData}></MenuCard>
    </>
  );
};

export default Restaurant;
