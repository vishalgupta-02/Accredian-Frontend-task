import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(programs, referrer_bonus, referee_bonus) {
  return { programs, referrer_bonus, referee_bonus };
}

const rows = [
  createData(
    "Professional Certificate Programs in Product Management",
    7000,
    900
  ),
  createData("PG Certificate in Strategic Product Management", 9000, 11000),
  createData(
    "Executive Program in Data Driven Product Management",
    10000,
    10000
  ),
  createData(
    "Executive Program in Product Management and Digital Transformation",
    10000,
    10000
  ),
  createData("Executive Program in Product Management", 10000, 10000),
  createData("Advanced Certification in Product Management", 10000, 10000),
  createData(
    "Executive Program in Product Management and Project Management",
    10000,
    10000
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{ margin: "10px" }}>
      <Table sx={{ minWidth: 350, height: "490px" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "#1A73E859" }}>
            <TableCell>Programs</TableCell>
            <TableCell align="right">Referrer Bonus</TableCell>
            <TableCell align="right">Referee Bonus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.programs}
              </TableCell>
              <TableCell align="right">{row.referrer_bonus}</TableCell>
              <TableCell align="right">{row.referee_bonus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
