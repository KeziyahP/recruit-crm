import React from "react";
import style from "./Header.module.scss";
import Search from "../../utilities/search-field/SearchField";
import logo from "../../assets/Logo.svg";
import addButton from "../../assets/Quick-add-button.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <Search></Search>
      <img className={style.logo} src={logo} alt="Logo" />
      <div className={style.iconRight}>
        <img className={style.addCircle} src={addButton} alt="addButton" />
        <div className={style.notification}>
          <div className={style.headerImgCircleGift}></div>
          <div className={style.headerImgCircleMail}></div>
          <div className={style.headerImgCircleBell}></div>
          <div className={style.headerImgCircleUser}></div>
          <div className={style.userName}>
            <div>absdsd</div>
            <div>sdsda</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
