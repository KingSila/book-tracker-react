import React from "react";
import { BookTopSellersStyled } from "./styles/BookTopSellers.styled";

export const BookTopSellers = () => {
  return (
    <BookTopSellersStyled>
      <h3>Top 10 BestSellers</h3>
      <ul className="list">
        <li>
          Book2 <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </BookTopSellersStyled>
  );
};
