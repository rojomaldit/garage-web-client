import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import "./BasicTable.scss";

interface Props {
  columns: string[];
  rows: string[][];
}

export default function BasicTable(props: Props) {
  console.log(props);
  return (
    <Grid className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.columns.map((e) => (
                <TableCell>{e}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row, i) => (
              <TableRow key={i}>
                {row.map((e) => (
                  <TableCell>{e && e.length ? e : "-"}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
