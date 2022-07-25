import React from "react";
import Product from "./Product";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <img
        src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
        alt=""
        className="home__image"
      />
      {/* id , title , price , rating , image */}
      <div className="home__row">
        <Product
          id="12345"
          title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistan"
          image="https://images-na.ssl-images-amazon.com/images/I/51Rw7jmy1LL.jpg"
          rating={4}
          price={100}
        />
        <Product
          id="12345"
          title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistan"
          image="https://m.media-amazon.com/images/I/81AcdpoEufS._AC_UY218_.jpg"
          rating={5}
          price={1800}
        />
      </div>

      <div className="home__row">
        <Product
          id="12345"
          title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistan"
          image="https://images-na.ssl-images-amazon.com/images/I/41UW0nzowBS.jpg"
          rating={3}
          price={180}
        />
        <Product
          id="12345"
          title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistan"
          image="https://m.media-amazon.com/images/I/51JB7he3yZL._QL65_AC_UL640_.jpg"
          rating={5}
          price={100}
        />
        <Product
          id="12345"
          title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistan"
          image="https://images-na.ssl-images-amazon.com/images/I/51Rw7jmy1LL.jpg"
          rating={2}
          price={150}
        />
      </div>
      <div className="home__row">
        <Product
          id="12345"
          title="Matein Travel Laptop Backpack, Business Anti Theft Slim Durable Laptops Backpack with USB Charging Port, Water Resistan"
          image="https://m.media-amazon.com/images/I/61jZXu6Y1dL._AC_UY218_.jpg"
          rating={5}
          price={170}
        />
      </div>
    </div>
  );
};

export default Home;
