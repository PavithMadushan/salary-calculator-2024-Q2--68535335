import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/base";
import Box from "@mui/material/Box";

import { tableCellClasses } from "@mui/material/TableCell";

function YourSalary() {
  return (
    <div>
      <p className="font-size:20px font-family: inter font-[700] pl-6 pt-4">
        Your salary
      </p>
      <TableContainer component={Paper}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
          aria-label="caption table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="text-[#757575]">Items</TableCell>
              <TableCell align="right" className="text-[#757575]">
                Amounts
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Basic Salary
              </TableCell>
              <TableCell align="right">x</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Gross Earning
              </TableCell>
              <TableCell align="right">x</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Gross Deduction
              </TableCell>
              <TableCell align="right">x</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Employee EPF (8%)
              </TableCell>
              <TableCell align="right">x</TableCell>
            </TableRow>

            <TableRow className="borderBottom: none">
              <TableCell component="th" scope="row">
                APIT
              </TableCell>
              <TableCell align="right">x</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div className="px-">
        <Box component="section" sx={{ p: 2, border: "1px solid grey" }}>
          Net Salary (Take Home)
        </Box>
      </div>

      <TableContainer component={Paper}>
        <Table
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
          }}
          aria-label="caption table"
        >
          <TableHead>
            <TableRow>
              <TableCell className="text-[#757575]">
                Contribution from the Employer
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Employeer EPF (12%)
              </TableCell>
              <TableCell align="right">x</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                Employeer ETF (3%)
              </TableCell>
              <TableCell align="right">x</TableCell>
            </TableRow>

            <TableRow>
              <TableCell component="th" scope="row">
                CTC (Cost to Company)
              </TableCell>
              <TableCell align="right">x</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default YourSalary;
