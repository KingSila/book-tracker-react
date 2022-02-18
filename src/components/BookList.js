import React from "react";

export const BookList = () => {
  return (
    <>
      <h3>Books Cataloque</h3>
      <ul className="list">
        <li>
          Book1 <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
};
