import React, { createContext, useState, useEffect} from "react";
// import React, { createContext, useState, } from "react";




export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  const getItemId = (item) => String(item?._id || item?.id);

  const addToCart = (product) => {
  const productId = getItemId(product);
  const existingProduct = cart.find((item) => getItemId(item) === productId);

  if (existingProduct) {
    setCart(
      cart.map((item) =>
        getItemId(item) === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};
const removeFromCart = (id) => {
  const targetId = String(id);
  setCart(cart.filter((item) => getItemId(item) !== targetId));
};

const increaseQuantity = (id) => {
  const targetId = String(id);
  setCart(
    cart.map((item) =>
      getItemId(item) === targetId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  const targetId = String(id);
  setCart(
    cart.map((item) =>
      getItemId(item) === targetId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};

const clearCart = () => {
  setCart([]);
};

  return (
    <CartContext.Provider value={{ cart, addToCart,removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
