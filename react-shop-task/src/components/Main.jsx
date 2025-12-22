import "./main.css";
import { CiFilter } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import Products from "./Products";
import { useContext, useState } from "react";
import { CardContext } from "../Context/CardContext";

function Main() {
  const { card, totalPrice, increaseQuantity, decreaseQuantity, removeItem } =
    useContext(CardContext);
  const [filter, setFilter] = useState("Hamısı");

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-left">
          <CiFilter className="main-icon" />
          <p className="main-title">Kateqoriyalar</p>
        </div>

        <div className="main-right">
          <button onClick={() => setFilter("Hamısı")}>Hamısı</button>
          <button onClick={() => setFilter("Elektronika")}>Elektronika</button>
          <button onClick={() => setFilter("Tehsil")}>Təhsil</button>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="cart-panel">
          <div className="cart-header">
            <FiShoppingBag className="cart-icon" />
            <span className="cart-title">Səbət</span>
          </div>

          <div className="cart-body">
            {card.length === 0 ? (
              <>
                <div className="empty-icon">
                  <FiShoppingBag />
                </div>
                <p className="empty-title">Səbət boşdur</p>
                <p className="empty-text">Məhsul əlavə edin</p>
              </>
            ) : (
              <>
                {card.map((item) => (
                  <div key={item.id} className="cart-item-card">
                    <div className="cart-item-info">
                      <p className="cart-item-name">{item.name}</p>
                      <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                      <p>{item.price * item.quantity} ₼</p>
                    </div>
                    <button
                      className="remove-button"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </button>
                  </div>
                ))}
                <p className="total-price">
                  <b>Cəmi:</b> {totalPrice} ₼
                </p>
              </>
            )}
          </div>
        </div>

        <div className="card-right">
          <p className="section-title">Bütün Məhsullar</p>
          <Products filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default Main;
