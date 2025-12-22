import React, { createContext, useState } from 'react';
export const CardContext = createContext();

function CardProvider({ children }) {
  const [card, setCard] = useState([]);

  const addToCard = (product) => {
    setCard(prev => {
      const item = prev.find(p => p.id === product.id);
      if (item) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCard(prev => prev.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decreaseQuantity = (id) => {
    setCard(prev => prev.map(p => p.id === id ? { ...p, quantity: Math.max(p.quantity - 1, 1) } : p));
  };

  const removeItem = (id) => {
    setCard(prev => prev.filter(p => p.id !== id));
  };

  const totalPrice = card.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CardContext.Provider value={{ card, addToCard, totalPrice, increaseQuantity, decreaseQuantity, removeItem }}>
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;
