// import React,{useState} from "react";
// import { TextField, FormControl, Button } from "@mui/material";
// import Checkbox from '@mui/material/Checkbox';

// function AddDeductPopup() {

//     const [checked, setChecked] = useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };


//   return <div>

// <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="name"
//               name="email"
//               label="Earnings Name"
//               type="email"
//               fullWidth
//               variant="standard"
//             />

//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="name"
//               name="email"
//               label="Amount"
//               type="email"
//               fullWidth
//               variant="standard"
//             />

//             <div className="flex"> 
//             <Checkbox
//             label="EPF/ETF"
//       checked={checked}
//       onChange={handleChange}
//       inputProps={{ 'aria-label': 'controlled' }}
//     />
//     <p className="">EPF/ETF</p>
//     </div>



//   </div>;
// }

// export default AddDeductPopup;


import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function AddDeductPopup({ onSave }) {
  const [formData, setFormData] = useState({ deductName: "", deductAmount: 0 });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleClose = () => {
    onSave(formData);
    // Additional logic to close the popup
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

      {/* Button to close the popup and save data */}
      <Button onClick={handleClose}>Add</Button>
    </div>
  );
}

export default AddDeductPopup;