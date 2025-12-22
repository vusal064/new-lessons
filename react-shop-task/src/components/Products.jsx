import React, { useContext } from 'react';
import "./products.css";
import { CardContext } from "../Context/CardContext";

const Products = ({ filter }) => {
  const { addToCard } = useContext(CardContext);

 const products = [
    {id:1 , name: "Laptop" , price:"1200" , catogery:"Elektronika" , image: "https://www.asus.com/media/Odin/Websites/global/Series/24.png"},
    {id:2 , name: "Kitab" , price:"25" , catogery:"Tehsil" , image: "https://files.azedu.az/articles/2023/07/07/13768.jpg"},
    {id:3 , name: "Telefon" , price:"800" , catogery:"Elektronika" , image: "https://cdn.cimri.io/image/1200x1200/apple-iphone-17-pro-256gb-kozmik-turuncu_993990142.jpg"}
  ]

  const filteredProducts = filter === "Hamısı" ? products : products.filter(p => p.category === filter);

  return (
    <div className="products-container">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price} ₼</p>
          <button className="add-button" onClick={() => addToCard(product)}>Səbətə əlavə et</button>
        </div>
      ))}
    </div>
  );
};

export default Products;

