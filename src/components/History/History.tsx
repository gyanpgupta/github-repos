import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: "center",
    width: "300px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  ".MuiTableCell-root": {
    width: "300px",
    textAlign: "center",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const History = (searchvalue: any) => {
  const historyData: any = localStorage.getItem("searchvalue");
  const data = JSON.parse(historyData);

  return (
    <TableContainer component={Paper}>
      <Typography textAlign="center" mt={2}>
        HISTORY
      </Typography>
      <Table
        sx={{ minWidth: 700, margin: "40px auto 0", width: "auto" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((row: any, index: number) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  <a
                    href={`https://github.com/${row.searchData}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.searchData}
                  </a>
                </StyledTableCell>
                <StyledTableCell component="th" scope="row" align="center">
                  {row.time}
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default History;
