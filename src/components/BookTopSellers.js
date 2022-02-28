import React, { useEffect, useState } from "react";
var axios = require("axios").default;

export const BookTopSellers = () => {
  const [topbooks, setTopBooks] = useState([]);

  const fetchData = () => {
    var options = {
      method: "GET",
      url: "https://goodreads-books.p.rapidapi.com/lists",
      params: { page: "1" },
      headers: {
        "x-rapidapi-host": "goodreads-books.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPI_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        return response.data;
      })
      .then((data) => {
        setTopBooks(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {topbooks.map((book) => (
        <ul>
          <h3>
            {" "}
            <li key={book.id}>{book.name}</li>
          </h3>

          {book.preview.map((img) => (
            <img src={img.imageURL} alt="" />
          ))}
        </ul>
      ))}
    </div>
  );
};
