import React, { useEffect, useState } from "react";
import "./Employ.scss";
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/input/button/Button";
import { empolyAction } from "../store/employSlice";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "number",
    headerName: "Number",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 160,
  },
  {
    field: "date",
    headerName: "Date",
    type: "dateTime",
    width: 210,
    editable: true,
    valueGetter: (params) => {
      return new Date(params);
    },
    renderCell: (params) => {
      return <div style={{ color: "green" }}>{params.value.toLocaleDateString()}</div>;
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    sortable: false,
    renderCell: (params, row) => (
      <div>
        <button onClick={() => {}} style={{ marginRight: 8 }}>
          Edit
        </button>
        <button onClick={() => {}}>Delete</button>
      </div>
    ),
  },
];
const EmployListPage = () => {
  const employs = useSelector((state) => state.employ.employs);
  const dispatch = useDispatch();
  const [currentEmploys, setCurrentEmploys] = useState(
    employs.map((el) => {
      return { ...el };
    })
  );
  const navigate = useNavigate();

  function handleDelete(id) {
    dispatch(empolyAction.deleteEmploy(id));
  }
  function handleEdit(id) {
    navigate(`/employs/${id}`);
  }
  useEffect(() => {
    setCurrentEmploys(employs);
  }, [employs]);

  return (
    <div>
      <ul>
        {currentEmploys?.map((employ) => (
          <div key={employ.id}>
            <li>{employ.name}</li>
            <li>{employ.email}</li>
            <li>{employ.number}</li>
            <li>{employ.status}</li>
            {/* <li>{employ.date}</li> */}
            <Button text="edit" onClick={() => handleEdit(employ.id)} />
            <Button text="Delete" onClick={() => handleDelete(employ.id)} />
          </div>
        ))}
      </ul>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={currentEmploys}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
        />
      </Box>
    </div>
  );
};

export default EmployListPage;
