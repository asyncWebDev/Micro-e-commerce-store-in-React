import { useEffect, useState } from "react";
import Cart from "./Cart";
import ProductsList from "../Products/ProductsList";
import classes from "./StoreContent.module.css";
import Sidebar from "../Sidebar/Sidebar";

export default function StoreContent(props) {
  const [assortment, setAssortment] = useState([]);
  const [category, setCategory] = useState();

  const categoryHandler = (category) => {
    setCategory(category);
    const test = assortment.filter((product) => product.category === category);
    setAssortment(test);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(category);
        setAssortment(response);
      });
  }, []);

  const renderSwitch = (content) => {
    switch (content) {
      case "cart":
        return <Cart />;
      case "main":
        return <ProductsList products={assortment} />;
      case "sidebar":
        return <Sidebar selectCategory={categoryHandler} />;
    }
  };

  return <main className={classes.main}>{renderSwitch(props.content)}</main>;
}
