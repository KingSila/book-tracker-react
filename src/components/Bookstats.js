import React from "react";
import { BookstatsStyled } from "./styles/Bookstats.styled";

export const Bookstats = () => {
  const currentyear = new Date().getFullYear();
  return (
    <BookstatsStyled>
      <div>
        <img src="./images/graph.svg" alt="" />
      </div>

      <div>
        <h2>{currentyear} &nbsp; Stats</h2>
        <p>U read 2 Books this year from target of 10</p>
      </div>
    </BookstatsStyled>
  );
};
