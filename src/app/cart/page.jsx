"use client";
import React from "react";
import CartLayout from "./layout";
import { useSelector } from "react-redux";

function Page() {
  const item = useSelector((state) => state.cart.items);

  return (
    <div>
      {item.map((item, id) => (
        <div key={id}>
          <div>{item.title}</div>
          <div>{item.quantity}</div>
          <div>{item.price}</div>
          <div> total price {item.price * item.quantity}</div>
        </div>
      ))}
    </div>
  );
}

export default Page;
