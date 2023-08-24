import {useContext, createContext, useState } from "react";
import data from './data.json'

const cartContext = createContext();

function CartProvider({children}){
  const [price, setPrice] = useState(0);
  const [cart, setCart] = useState(data);
  const [quantity, setQuantity] = useState(cart.quantity);

  return (
    <cartContext.Provider value={{price, setPrice,cart, setCart, quantity,setQuantity}}>
      {children}
    </cartContext.Provider>
  )
}

export {cartContext, CartProvider}