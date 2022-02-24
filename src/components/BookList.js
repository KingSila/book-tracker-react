import React from "react";
import { BookListSyled } from "./styles/BookList.styled";
import MaterialTable from "material-table";

export const BookList = () => {
  const data = [
    { book: "Atomic Habits", author: "James Clear" },
    { book: "7 Habits ", author: "David Charles" },
    { book: "Dinoneng", author: "Modibe Manepe" },
    { book: "Bakgala ba tswang", author: "Janury Charles" },
  ];

  const columns = [
    {
      title: "Book",
      field: "book",
    },
    {
      title: "Author",
      field: "author",
    },
  ];
  return (
    <MaterialTable title="Books Cataloque" data={data} columns={columns} />
  );
};
