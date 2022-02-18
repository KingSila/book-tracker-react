import React from "react";

export const BookWish = () => {
  return (
    <>
      <h3>Books WishList</h3>
      <ul className="list">
        <li>
          Book2 <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
