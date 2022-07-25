import React from "react";
import "./Product.css";
import { useStateValue } from "../context/StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispacth] = useStateValue();
  const addToBasket = () => {
    dispacth({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button className="product__addBtn" onClick={addToBasket}>
        Add to Backet
      </button>
    </div>
  );
};

export default Product;
