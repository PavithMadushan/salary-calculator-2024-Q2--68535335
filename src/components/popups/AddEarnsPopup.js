// import React, { useState } from "react";
// import { TextField, FormControl, Button } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";

// function AddEarnsPopup() {
//   const [checked, setChecked] = useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <div>
//       <TextField
//         autoFocus
//         required
//         variant="outlined"
//         margin="dense"
//         id="name"
//         name="email"
//         label="Earnings Name"
//         type="text"
//         fullWidth
//       />

//       <TextField
//         autoFocus
//         required
//         variant="outlined"
//         margin="dense"
//         id="name"
//         name="email"
//         label="Amount"
//         type="number"
//         fullWidth
//       />
//       <div className="flex flex-row">
//         <Checkbox
//           label="EPF/ETF"
//           checked={checked}
//           onChange={handleChange}
//           inputProps={{ "aria-label": "controlled" }}
//         />
//         <p className="">EPF/ETF</p>
//       </div>
//     </div>
//   );
// }

// export default AddEarnsPopup;


import React, { useState } from "react";
import { TextField, Checkbox, Button } from "@mui/material";

function AddEarnsPopup({ onSave }) {
  const [formData, setFormData] = useState({ earningsName: "", amount: 0, epfEtf: false });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "epfEtf" ? checked : value
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
        <Checkbox className=""
          checked={formData.epfEtf}
          onChange={handleChange}
          name="epfEtf"
          inputProps={{ "aria-label": "controlled" }}
          
        />
        <p className="ml-0">EPF/ETF</p>
        </div>
      

      {/* Button to close the popup and save data  */}
       <Button onClick={handleClose} className="pl-7">Add</Button>
    </div>
  );
}

export default AddEarnsPopup;