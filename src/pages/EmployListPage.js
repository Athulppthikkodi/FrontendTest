import React, { useEffect, useState } from "react";
import "./Employ.scss";
import { useDispatch, useSelector } from "react-redux";
import { empolyAction } from "../store/employSlice";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LeagueCell from "../components/LeagueCell";
const EmployListPage = () => {
  const employs = useSelector((state) => state.employ.employs);
  const dispatch = useDispatch();
  const [currentEmploys, setCurrentEmploys] = useState(
    employs.map((el) => {
      return { ...el };
    })
  );

  const [expandedRows, setExpandedRows] = useState({});

  const toggleRowExpansion = (rowId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };
  const navigate = useNavigate();

  //-----
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element for the Popover
  const [selectedRow, setSelectedRow] = useState(null); // Selected row for actions

  const handleOpen = (event, row) => {
    setAnchorEl(event.currentTarget); // Set the clicked element as the anchor
    setSelectedRow(row); // Set the selected row
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the Popover
    setSelectedRow(null);
  };

  //--------

  function handleDelete(id) {
    dispatch(empolyAction.deleteEmploy(id));
    handleClose();
  }
  function handleEdit(id) {
    navigate(`/employs/${id}`);
    handleClose();
  }

  function handleNavigate() {
    navigate("/employs");
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "User",
      width: 220,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      width: 100,
      editable: true,
    },
    {
      field: "leagues",
      headerName: "Leagues Played",
      type: "number",
      width: 300,
      editable: true,
      headerClassName: 'super-app-theme--header',
      renderCell: (params) => (
        <LeagueCell
          value={params.value || []}
          expanded={!!expandedRows[params.id]}
          onToggle={() => toggleRowExpansion(params.id)}
        />
      ),
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      width: 160,
      renderCell: (params) => (
        <span
          style={{ color: "#fff" }}
          className={`status ${params.value === "Active" && "active"}`}
        >
          {params.value}
        </span>
      ),
    },

    {
      field: "height",
      headerName: "Height",
      sortable: false,
      width: 100,
      renderCell: (params) => (
        <div>
          {params.value} m {/* Display the height followed by "m" */}
        </div>
      ),
    },
    {
      field: "position",
      headerName: "Position",
      sortable: false,
      width: 120,
    },

    {
      field: "actions",
      headerName: "",
      width: 100,
      sortable: false,
      filterable: false, // Exclude this column from column search
      hideable: false,
      renderCell: (params) => {
        return (
          <div className="action" style={{ position: "relative" }}>
            <div
              className="action-btn"
              onClick={(e) => handleOpen(e, params.row)}
            >
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </div>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    setCurrentEmploys(employs);
  }, [employs]);

  return (
    <div className="employ-list-outer">
      <h2>User management</h2>
      <Box sx={{ height: "auto", width: "100%", position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "-40px", // Adjust based on spacing
            right: "0",
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleNavigate()}
            sx={{
              backgroundColor: "#fff",
              color: "#1976D2",
              border: "1px solid #1976D2",
              boxShadow: "none",
              fontSize: "13px",
              padding: "3px 30px",
              transition: "all 0.5s ease-in-out",
              "&:hover": {
                backgroundColor: "#1976D2",
                color: "#fff",
                boxShadow: "none",
              },
            }}
          >
            New
          </Button>
        </Box>
        <DataGrid
          rows={currentEmploys}
          columns={columns}
          getRowHeight={(params) => {
            const leagues = params?.model?.leagues || [];
            const isExpanded = expandedRows[params.id] || false;
            const baseHeight = 60; // Default row height
            const expandedHeight = 40 + leagues.length * 20; // Calculate based on items

            return isExpanded ? expandedHeight : baseHeight;
          }}
          sx={{
            "& .MuiDataGrid-columnHeader": {
              fontWeight: "900",
              backgroundColor: "#f0f0f0",
            },
          }}
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
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          aria-hidden={false}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              minWidth: "137px",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              onClick={() => handleEdit(selectedRow?.id)}
              className="btn"
              sx={{
                backgroundColor: "#fff",
                color: "#000000DE",
                textTransform: "capitalize",
                fontSize: "15px",
                boxShadow: "none",
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="btn"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(selectedRow?.id)}
              sx={{
                backgroundColor: "#fff",
                color: "#000000DE",
                textTransform: "capitalize",
                fontSize: "15px",
                boxShadow: "none",
              }}
            >
              Delete
            </Button>
          </div>
        </Popover>
      </Box>
    </div>
  );
};

export default EmployListPage;
