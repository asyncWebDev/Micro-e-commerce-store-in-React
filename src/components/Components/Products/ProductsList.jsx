import ProductCard from "./ProductCard";
import classes from "./ProductsList.module.css";

export default function ProductsList(props) {
  return (
    <ul className={classes["products-area"]}>
      {props.products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        );
      })}
    </ul>
  );
}
