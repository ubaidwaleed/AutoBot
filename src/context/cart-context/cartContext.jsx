import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const clearCart = () => {
    setCartItems([]);
    setCartTotal(0);
    setCartSubTotal(0);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item, index) => index !== itemId);
    setCartItems(updatedCart);
  };

  const incrementQuantity = (itemId) => {
    const updatedCart = [...cartItems];
    updatedCart[itemId].quantity += 1;
    setCartItems(updatedCart);
  };

  const decrementQuantity = (itemId) => {
    const updatedCart = [...cartItems];
    if (updatedCart[itemId].quantity > 1) {
      updatedCart[itemId].quantity -= 1;
      setCartItems(updatedCart);
    } else {
      // If quantity is 1, remove the item from the cart
      updatedCart.splice(itemId, 1);
      setCartItems(updatedCart);
    }
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeItem,
    cartTotal,
    setCartTotal,
    cartSubTotal,
    setCartSubTotal,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartContext;
