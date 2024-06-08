import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
} from "@mui/material";

import AddEarnsPopup from "./popups/AddEarnsPopup";
import AddDeductPopup from "./popups/AddDeductPopup";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";

function CalculateSalary() {
  const [sal, setSal] = useState("");
  const [openErn, setOpenErn] = useState(false);
  const [openDeduct, setOpenDeduct] = useState(false);

  const [earningsList, setEarningsList] = useState([]);
  const [deductData, setDeductData] = useState({
    deductName: "",
    deductAmount: 0,
    deductEpfEtf: false,
  });
  const [deductionsList, setDeductionsList] = useState([]);

  const handleSaveEarningsData = (data) => {
    console.log("Earnings Data:", data);
    setEarningsList([...earningsList, data]);
    handleCloseEarnings();
  };

  const handleSaveDeductionsData = (data) => {
    setDeductionsList([...deductionsList, data]);
    handleCloseDeducts();
  };

  const handleSaveDeductData = (data) => {
    console.log("Deduct Data:", data);
    setDeductData(data);
    handleCloseDeducts();
  };

  const handleClickOpenEarnings = () => {
    setOpenErn(true);
  };

  const handleCloseEarnings = () => {
    setOpenErn(false);
  };

  const handleClickOpenDeducts = () => {
    setOpenDeduct(true);
  };

  const handleCloseDeducts = () => {
    setOpenDeduct(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSaveDeductData();
  };

  const handleReset = () => {
    setEarningsList([]);
    setDeductionsList([]);
    setSal([]);
  };

  return (
    <React.Fragment>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <h2 className="font-size:20px font-family: inter font-[700]">
            Calculate Your Salary
          </h2>
          <IconButton color="primary" onClick={handleReset} className="text-xl">
            <RestartAltOutlinedIcon className="text-1xl" />
            Reset
          </IconButton>
        </div>

        <p className="items-start pl-0  pb-1 font-[700]">Basic Salary</p>

        <TextField
          onChange={(e) => setSal(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="number"
          value={sal}
        />

        <p className="items-start pl-0 font-[700]">Earnings</p>
        <p className="pt-3 pb-1">Allowance, Fixed Allowance, Bonus, etc.</p>

        <div>
          {earningsList.map((earning, index) => (
            <div key={index} className="flex">
              <p>{earning.earningsName} :</p>
              <p className="pl-1">{earning.amount}</p>
              <div>
                {earning.epfEtf && (
                  <div className="pl-3">
                    <CheckCircleOutlineOutlinedIcon
                      style={{
                        color: "blue",
                        marginRight: "5px",
                        paddingTop: "9px",
                      }}
                    />
                    EPF/ETF
                  </div>
                )}
              </div>
              <IconButton aria-label="delete">
                <EditRoundedIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <ClearRoundedIcon />
              </IconButton>
            </div>
          ))}
        </div>

        <Button variant="text" onClick={handleClickOpenEarnings}>
          + Add New Allowance
        </Button>

        <Dialog open={openErn} onClose={handleCloseEarnings}>
          <DialogTitle>Add New Earnings</DialogTitle>
          <DialogContent>
            <AddEarnsPopup onSave={handleSaveEarningsData} />
          </DialogContent>
        </Dialog>

        <Divider />

        <p className="items-start pl-0 pt-1 font-[700]">Deductions</p>
        <p className="py-6 pt-3 pb-1">Salary Advances, Loan Deductions</p>

        <div>
          {deductionsList.map((deduction, index) => (
            <div key={index} className="flex">
              <p>{deduction.deductName} :</p>
              <p className="pl-1">{deduction.deductAmount}</p>
              <IconButton aria-label="delete">
                <EditRoundedIcon />
              </IconButton>
              <IconButton aria-label="delete">
                <ClearRoundedIcon />
              </IconButton>
            </div>
          ))}
        </div>

        <Button variant="text" onClick={handleClickOpenDeducts}>
          + Add New Deduction
        </Button>

        <Dialog open={openDeduct} onClose={handleCloseDeducts}>
          <DialogTitle>Add New Deductions</DialogTitle>
          <DialogContent>
            <AddDeductPopup onSave={handleSaveDeductionsData} />
          </DialogContent>
        </Dialog>
      </form>
    </React.Fragment>
  );
}

export default CalculateSalary;
