import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { fetchStudents } from "../services/indexServices";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    const asyncFetch = async () => {
      try {
        let response = await fetchStudents();
        setLoading(true);

        setTotalRows(response?.data?.students.length);

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    asyncFetch();
  }, []);

  let handlePerRowsChange = async (pageSizeCount) => {
    setPageSize(pageSizeCount);
    let response = await fetchStudents({ size: pageSizeCount });
    setData(response?.data?.students);
  };

  let handlePageChange = async (pageNumber) => {
    let response = await fetchStudents({ page: pageNumber, size: pageSize });
    setData(response?.data?.students);
  };

  const styles = {
    fontFamily: "Poppins",
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Roll Number",
      selector: (row) => row.rollNumber,
    },
    {
      name: "Branch",
      selector: (row) => row.branch,
    },
    {
      name: "Course",
      selector: (row) => row.course,
    },
    {
      name: "Gender",
      selector: (row) => row.gender,
    },
    {
      name: "Section",
      selector: (row) => row.section,
    },
    {
      name: "Total Marks out of 500",
      selector: (row) => row.totalMarks,
    },
  ];

  return (
    <div style={styles}>
      <div className="bg-dark text-light text-center p-3 fs-4">
        Student Details
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        
      />
    </div>
  );
};

export default Home;
