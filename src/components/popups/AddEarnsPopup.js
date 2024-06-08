import React, { useState } from "react";
import { TextField, Checkbox, Button } from "@mui/material";

function AddEarnsPopup({ onSave }) {
  const [formData, setFormData] = useState({
    earningsName: "",
    amount: 0,
    epfEtf: false,
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "epfEtf" ? checked : value,
    }));
  };

  const handleClose = () => {
    onSave(formData);
  };

  return (
    <div>
      <TextField
        autoFocus
        required
        variant="outlined"
        margin="dense"
        id="earningsName"
        name="earningsName"
        label="Earnings Name"
        type="text"
        fullWidth
        onChange={handleChange}
      />

      <TextField
        autoFocus
        required
        variant="outlined"
        margin="dense"
        id="amount"
        name="amount"
        label="Amount"
        type="number"
        fullWidth
        onChange={handleChange}
      />

      <div className="width-9 flex">
        <Checkbox
          className=""
          checked={formData.epfEtf}
          onChange={handleChange}
          name="epfEtf"
          inputProps={{ "aria-label": "controlled" }}
        />
        <p className="ml-0">EPF/ETF</p>
      </div>

      <Button onClick={handleClose} className="pl-7">
        Add
      </Button>
    </div>
  );
}

export default AddEarnsPopup;
