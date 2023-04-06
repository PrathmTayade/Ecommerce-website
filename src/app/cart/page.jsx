"use client";
import React from "react";
import { useSelector } from "react-redux";
import Cart from "@/components/Cart";

function Page() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <div>
        <Cart />
      </div>
      <div>
        {cart.items.map((item, id) => (
          <div key={id}>
            <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
              <div className="w-1/4">{/* iamge */}</div>
              <div className="md:pl-3 md:w-3/4">
                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                  Company
                </p>
                <div className="flex items-center justify-between w-full pt-1">
                  <p className="text-base font-black leading-none text-gray-800">
                    {item.title}
                  </p>
                  {item.quantity}
                </div>

                <div className="flex items-center justify-between pt-5 pr-6">
                  <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                    Remove
                  </p>
                  <p className="text-base font-black leading-none text-gray-800">
                    Rs. {item.price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
          <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
            <div>
              <p className="text-4xl font-black leading-9 text-gray-800">
                Summary
              </p>
              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800">Subtotal</p>
                <p className="text-base leading-none text-gray-800">$9,000</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Shipping</p>
                <p className="text-base leading-none text-gray-800">$30</p>
              </div>
              <div className="flex items-center justify-between pt-5">
                <p className="text-base leading-none text-gray-800">Tax</p>
                <p className="text-base leading-none text-gray-800">$35</p>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                  {cart.total}
                </p>
              </div>
              <button
                onClick={() => setShow(!show)}
                className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
