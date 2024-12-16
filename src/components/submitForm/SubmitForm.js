import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Chip } from "@mui/material";
import "./SubmitForm.scss";
const leagues = [
  "Laliga",
  "League1",
  "League2",
  "League3",
  "League4",
  "League5",
  "League6",
];
const status = ["Active", "Retired"];
const position = ["Forward", "Backward", "Midfielder"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const SubmitForm = ({
  currentEmploys,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const [leagueNames, setLeagueNames] = useState(
    currentEmploys?.leagues ? currentEmploys.leagues : []
  );
  function handleInputChange(e) {
    let { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  const handleLeagueChange = (event) => {
    const {
      target: { value },
    } = event;
    setLeagueNames(typeof value === "string" ? value.split(",") : value);
  };

  useEffect(() => {
    setFormData((prevData) => {
      return {
        ...prevData,
        leagues: leagueNames,
      };
    });
  }, [leagueNames,setFormData]);

  const handleDeleteLeague = (valueToRemove) => {
    setLeagueNames((prev) => prev.filter((name) => name !== valueToRemove));
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  useEffect(() => {
    if (formData.date !== "" || formData.date) {
      const age = calculateAge(formData.date);
      setFormData((prevData) => {
        return { ...prevData, age: age };
      });
    }
  }, [formData?.date, setFormData]);

  // function handleNavigate() {
  //   navigate(`/employs/${formData.id}`);
  // }

  return (
    <div>
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit} className="submit-form">
        <div className="block">
          <TextField
            id="outlined-helperText"
            label="name"
            name="name"
            input={<OutlinedInput label="Leagues" />}
            type="text"
            onChange={handleInputChange}
            required
            value={formData.name}
            sx={{
              width: "calc(50% - 10px)",
              maxWidth: "548px",
              margin: "20px 0",
            }}
          />
          <TextField
            id="outlined-helperText"
            label="Date of Birth"
            name="date"
            type="date"
            onChange={handleInputChange}
            required
            value={formData.date}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              max: new Date().toISOString().split("T")[0],
            }}
            sx={{
              width: "calc(50% - 10px)",
              maxWidth: "548px",
              margin: "20px 0",
            }}
          />
        </div>
        <div className="block">
          <FormControl
            sx={{
              width: "calc(50% - 10px)",
              maxWidth: "548px",
              margin: "20px 0",
            }}
          >
            <InputLabel id="demo-multiple-checkbox-label">Leagues</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={leagueNames}
              onChange={handleLeagueChange}
              input={<OutlinedInput label="Leagues" />}
              renderValue={(selected) => (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={() => handleDeleteLeague(value)}
                      sx={{ zIndex: 9999 }}
                    />
                  ))}
                </div>
              )}
              MenuProps={MenuProps}
              required
            >
              {leagues?.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={leagueNames.includes(name)} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            sx={{
              width: "calc(50% - 10px)",
              maxWidth: "548px",
              margin: "20px 0",
            }}
          >
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.status}
              label="Status"
              input={<OutlinedInput label="Status" />}
              onChange={handleInputChange}
              name="status"
              sx={{color: '#fff'}}
              renderValue={(selected) => (
                <div
                  style={{
                    backgroundColor:
                      selected === "Active" ? "#72CD2C" : "#EF6C00",
                    maxWidth: "fit-content",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    fontSize: "14px",
                  }}
                >
                  {selected}
                </div>
              )}
              required
            >
              {status.map((status) => (
                <MenuItem key={status} value={status}>
                  <Checkbox checked={formData?.status?.includes(status)} />
                  <ListItemText primary={status}  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="block">
          <TextField
            id="outlined-helperText"
            label="height"
            name="height"
            type="number"
            value={formData.height}
            sx={{
              width: "calc(50% - 10px)",
              maxWidth: "548px",
              margin: "20px 0",
            }}
            inputProps={{
              step: "0.1",
              min: "0",
              max: "2.5",
            }}
            onChange={handleInputChange}
            required
            maxLength="2.5"
          />
          <FormControl
            sx={{
              width: "calc(50% - 10px)",
              maxWidth: "548px",
              margin: "20px 0",
            }}
          >
            <InputLabel id="demo-simple-select-label">Position</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.position}
              label="position"
              input={<OutlinedInput label="Position" />}
              onChange={handleInputChange}
              name="position"
              renderValue={(selected) => selected}
              required
            >
              {position.map((position) => (
                <MenuItem key={position} value={position}>
                  <Checkbox checked={formData?.position?.includes(position)} />
                  <ListItemText primary={position} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{
            backgroundColor: "#1976D2",
            color: "#fff",
            textTransform: "capitalize",
            fontSize: "15px",
            boxShadow: "none",
            marginTop: "20px",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SubmitForm;
