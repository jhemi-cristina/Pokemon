import { TablePagination } from "@mui/material";

const Pagination = ({
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
}: any) => {
  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export { Pagination };
