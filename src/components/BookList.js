import React, { forwardRef, useState } from "react";

//import { BookListSyled } from "./styles/BookList.styled";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const fixedList = [
  { id: 1, book: "Atomic Habits", author: "James Clear" },
  { id: 2, book: "7 Habits ", author: "David Charles" },
  { id: 3, book: "Dinoneng", author: "Modibe Manepe" },
  { id: 4, book: "Bakgala ba tswang", author: "Janury Charles" },
];

export const BookList = () => {
  const [data, setData] = useState(fixedList);
  const columns = [
    {
      title: "ID",
      field: "id",
      editable: false,
    },
    {
      title: "Book",
      field: "book",
    },
    {
      title: "Author",
      field: "author",
    },
  ];

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <MaterialTable
      icons={tableIcons}
      title="Books Cataloque"
      data={data}
      columns={columns}
      editable={{
        onRowAdd: (newRow) =>
          new Promise((resolve, reject) => {
            const updatedRows = [
              ...data,
              { id: Math.floor(Math.random() * 100), ...newRow },
            ];
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
        onRowDelete: (selectedRow) =>
          new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data];
            updatedRows.splice(index, 1);
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
        onRowUpdate: (updatedRow, oldRow) =>
          new Promise((resolve, reject) => {
            const index = oldRow.tableData.id;
            const updatedRows = [...data];
            updatedRows[index] = updatedRow;
            setTimeout(() => {
              setData(updatedRows);
              resolve();
            }, 2000);
          }),
      }}
      options={{
        actionsColumnIndex: -1,
        addRowPosition: "first",
      }}
    />
  );
};
