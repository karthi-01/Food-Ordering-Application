import Button from "./elements/Button";
import React, { useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../stores/cart/cartSlice";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 100) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const ProductDetailCard = ({ product, onAddProduct }) => {
    const dispatch = useDispatch();
    const add = (product)=>{dispatch(addToCart(product))}
  return (
    <div className="p-4 m-4 rounded-lg bg-slate-50" style={{ width: "300px" }}>
      <div className="card-container">
        <div className="flex flex-col">
          <h2 className="text-xl card-title">{product.name}</h2>
          <p className="text-gray-500 card-desc">
            <ReadMore>{product.desciption}</ReadMore>
          </p>
          <div className="flex items-center justify-center">
            <div className="text-xl text-black">{"Rs: " + product.price}</div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center card-img">
          <img
            src={product.imageUrl}
            className="w-40 h-40 rounded-xl object-cover"
            alt={product.name}
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button onClick={()=>onAddProduct(product)}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
