import React, { useContext } from "react";
import { Context } from "./Context";

const Products = () => {
  const ctx = useContext(Context);
  const items = ctx.items.map((item) => (
    <li>{`Medicine Name : ${item.name} , Description : ${item.description} , Price : ${item.price} , Available Quantity : ${item.quantity}`} <button>Add to Cart</button></li>
  ));
  return <ul>
    {items}
  </ul>;
};

export default Products;
