import React, { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { fetchStudents } from "../services/indexServices";

const PaginationCpt = ({ count, setFinalData }) => {
  const [rowsPerPage, setFinalDataPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const handleChangePage = async (event, selectedPage) => {
    setPage(selectedPage);
    let response = await fetchStudents({ page: selectedPage+1, size: rowsPerPage });
    setFinalData(response?.data?.students);
  };

  const handleChangeRowsPerPage = (event) => {
    setFinalDataPerPage(event.target.value);
  };

  useEffect(() => {
    let asyncFetch = async () => {
      let response = await fetchStudents({ size: rowsPerPage });
      setFinalData(response?.data?.students);
    };
    asyncFetch();
  }, [rowsPerPage]);

  return (
    <>
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default PaginationCpt;
