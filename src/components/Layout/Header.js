import React from "react";
import mealsImage from "../../assets/meals.jpg";

// Importing styles
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delecious food" />
      </div>
    </>
  );
};

export default Header;
