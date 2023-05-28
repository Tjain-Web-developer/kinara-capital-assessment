import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'S.No.', width: 70 },
  {
    field: 'rollNumber',
    headerName: 'Roll Number',
    type: 'number',
    width: 90,
    sortable: false
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'totalMarks',
    headerName: 'Total Marks',
    type: 'number',
    width: 90, sortable: false
  },
  { field: 'gender', headerName: 'Gender', width: 130, sortable: false },
  { field: 'branch', headerName: 'Branch', width: 130, sortable: false },
  { field: 'course', headerName: 'Course', width: 130, sortable: false },
  { field: 'section', headerName: 'Section', width: 130, sortable: false },
];

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
];

export default function StudentTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}