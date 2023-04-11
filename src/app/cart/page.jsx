"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { calculateTotal, cartSelector } from "@/reducers/cartSlice";
import CartItem from "@/components/CartItem";

function Page() {
  const cart = useSelector(cartSelector);
  const cartItems = cart.items;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  });

  const caltotal = () => {
    console.log(cart.total);
    dispatch(calculateTotal());
  };

  return (
    <div className="mx-auto w-full py-4 max-w-[1280px] px-5 md:px-10">
      {cartItems.length > 0 && (
        <>
          {/* HEADING AND PARAGRAPH START */}
          <div className="mx-auto mt-8 max-w-[800px] text-center md:mt-0">
            <div className="mb-5 text-[28px] font-semibold leading-tight md:text-[34px]">
              Shopping Cart
            </div>
          </div>
          {/* HEADING AND PARAGRAPH END */}

          {/* CART CONTENT START */}
          <div className="flex flex-col gap-12 py-10 lg:flex-row">
            {/* CART ITEMS START */}
            <div className="flex-[2]">
              <div className="text-lg font-bold">Cart Items</div>
              {cartItems.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </div>
            {/* CART ITEMS END */}

            {/* SUMMARY START */}
            <div className="flex-[1]">
              <div className="text-lg font-bold">Summary</div>

              <div className="my-5 rounded-xl bg-black/[0.05] p-5">
                <div className="flex items-center justify-between">
                  <div className=" text-base font-medium uppercase text-black md:text-lg">
                    Subtotal
                  </div>
                  <div className=" text-3xl  font-medium text-black">
                    &#8377;{cart.total}
                  </div>
                </div>
                <div className="md:text-md mt-5 border-t py-5 text-sm">
                  The subtotal reflects the total price of your order, including
                  duties and taxes, before any applicable discounts. It does not
                  include delivery costs and international transaction fees.
                </div>
              </div>

              {/* BUTTON START */}
              <button
                onClick={caltotal}
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-full bg-black py-4 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95"
                // onClick={handlePayment}
              >
                Checkout
                {/* {loading && <img src="/spinner.svg" />} */}
              </button>
              {/* BUTTON END */}
            </div>
            {/* SUMMARY END */}
          </div>
          {/* CART CONTENT END */}
        </>
      )}

      {/* This is empty screen */}
      {cartItems.length < 1 && (
        <div className="flex flex-[2] flex-col items-center pt-20 pb-[50px] md:-mt-14">
          <div className="h-auto w-56">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </div>
          {/* <Image
              src="/empty-cart.jpg"
              width={300}
              height={300}
              className="w-[300px] md:w-[400px]"
            /> */}
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="mt-4 text-center">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/shop"
            className="mb-3 mt-8 rounded-full bg-black py-4 px-8 text-lg font-medium text-white transition-transform hover:opacity-75 active:scale-95"
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
}

export default Page;
