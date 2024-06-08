import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function AddDeductPopup({ onSave }) {
  const [formData, setFormData] = useState({ deductName: "", deductAmount: 0 });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
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
        margin="dense"
        id="deductName"
        name="deductName"
        label="Deduction Name"
        type="text"
        fullWidth
        onChange={handleChange}
      />

      <TextField
        autoFocus
        required
        margin="dense"
        id="deductAmount"
        name="deductAmount"
        label="Amount"
        type="number"
        fullWidth
        onChange={handleChange}
      />

      <Button onClick={handleClose}>Add</Button>
    </div>
  );
}

export default AddDeductPopup;
