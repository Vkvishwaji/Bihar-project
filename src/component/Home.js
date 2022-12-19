import React, { useState } from "react";
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import './style.css'

const Home = () => {
  const[menuData,setMenuData] = useState( Menu )
  return (
    <>
      <MenuCard menuData={menuData}   />
    </>
  );
};

export default Home;
