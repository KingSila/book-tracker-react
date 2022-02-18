import React from "react";

export const Bookstats = () => {
  const currentyear = new Date().getFullYear();
  return (
    <>
      <h4>Reading Stats</h4>
      <h1>{currentyear}</h1>
      <h1>1/10 Books</h1>
    </>
  );
};
