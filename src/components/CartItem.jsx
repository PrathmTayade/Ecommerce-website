import { removeFromDB } from "@/firebase/cartFunctions";
import { decrease, increase, removeFromCart } from "@/reducers/cartSlice";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromCart(data.id));
    removeFromDB(data.id);
  };
  const decrement = () => {
    dispatch(decrease(data.id));
  };
  const increment = () => {
    dispatch(increase(data.id));
  };

  return (
    <div className="flex gap-3 border-b  py-5 text-gray-800 dark:text-gray-100 md:gap-5">
      {/* IMAGE START */}
      <div className="w-15 aspect-square shrink-0 overflow-hidden rounded-lg md:w-32 ">
        <Image
          src={data.image}
          alt={data.title}
          width={120}
          height={120}
          placeholder="empty"
          className="rounded-lg object-contain "
        />
      </div>
      {/* IMAGE END */}

      <div className="flex w-full flex-col text-gray-800 dark:text-gray-100 ">
        <div className="flex flex-col justify-between md:flex-row">
          {/* PRODUCT TITLE */}
          <div className="text-lg font-semibold   md:text-2xl">
            {data.title}
          </div>

          {/* PRODUCT SUBTITLE */}
          <div className="md:text-md block text-sm font-medium  md:hidden">
            subtitle
          </div>

          {/* PRODUCT PRICE */}
          <div className="md:text-md mt-2 text-sm font-bold ">
            MRP : &#8377;{data.price * data.quantity}
          </div>
        </div>

        {/* PRODUCT SUBTITLE */}
        <div className="text-md hidden font-medium  md:block">subtitle</div>

        <div className="mt-4 flex items-center justify-between">
          <div className="md:text-md flex items-center gap-2 text-sm md:gap-10">
            <div className="flex items-center gap-1">
              <div className="flex h-10 w-full items-center justify-between  gap-6  rounded-lg border px-3 text-sm font-bold shadow-sm  ">
                <button
                  type="button"
                  id="minus"
                  className=""
                  onClick={decrement}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
                <span id="amount" className="select-none">
                  {data.quantity}
                </span>
                <button
                  type="button"
                  id="plus"
                  className=""
                  onClick={increment}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button type="button " onClick={removeItem}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
