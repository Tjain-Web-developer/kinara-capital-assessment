import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PaginationCpt from "./PaginationCpt";
import { fetchStudents } from "../services/indexServices";
import { useEffect } from "react";
import { useState } from "react";

export default function StudentTab({finalData,setFinalData}) {

  const [count,setCount] = useState(0);
  useEffect(() => {
    const asyncFetch = async () => {
      try {
        let response = await fetchStudents();
        setCount(response?.data?.students?.length);
      } catch (err) {
        console.log(err);
      }
    };

    asyncFetch();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell align="right">Roll Number</TableCell>
            <TableCell align="right">Student Name</TableCell>
            <TableCell align="right">Total Marks</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Branch</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Section</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map((row, i) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">{row.rollNumber}</TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.totalMarks}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.branch}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.section}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationCpt count={count} setFinalData={setFinalData}/>
    </TableContainer>
  );
}
