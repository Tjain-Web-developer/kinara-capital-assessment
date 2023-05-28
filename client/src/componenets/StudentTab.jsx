import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PaginationCpt from './PaginationCpt';

const rows = [
    { id: 1, fullName: 'Aman Ratrey', gender: 'male', course: 'B.tech', totalMarks: 419 , section: 'C', branch: 'CSE', rollNumber: 35 },
    { id: 2, fullName: 'Mangesh Poojan', gender: 'male', course: 'B.tech', totalMarks: 376 , section: 'A', branch: 'Civil', rollNumber: 42 },
    { id: 3, fullName: 'Palak Shukla', gender: 'female', course: 'B.tech', totalMarks: 1000 , section: 'C', branch: 'Mechanical', rollNumber: 45 },
    { id: 4, fullName: 'Neeraj Yadav', gender: 'male', course: 'B.tech', totalMarks: 490 , section: 'C', branch: 'Mechanical', rollNumber: 16 },
    { id: 5, fullName: 'Harji Gidwani', gender: 'male', course: 'B.tech', totalMarks: 355 , section: 'B', branch: 'CSE', rollNumber: 40 },
    { id: 6, fullName: 'Aparna Ramesh', gender: 'female', course: 'B.tech', totalMarks: 480 , section: 'A', branch: 'CSE', rollNumber: 150 },
    { id: 7, fullName: 'Esha Khare', gender: 'female', course: 'B.tech', totalMarks: 476 , section: 'B', branch: 'Civil', rollNumber: 44 },
    { id: 8, fullName: 'Nihit Jain', gender: 'male', course: 'B.tech', totalMarks: 485 , section: 'B', branch: 'CSE', rollNumber: 36 },
    { id: 9, fullName: 'Yshovardhan Gwaleyy', gender: 'male', course: 'B.tech', totalMarks: 495 , section: 'A', branch: 'CSE', rollNumber: 65 },
]

export default function StudentTab() {
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.rollNumber}</TableCell>
              <TableCell align="right">{row.fullName}</TableCell>
              <TableCell align="right">{row.totalMarks}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.branch}</TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.section}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PaginationCpt/>
    </TableContainer>
  );
}