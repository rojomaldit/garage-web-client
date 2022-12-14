import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Grid, Popper } from "@mui/material";
import "./BasicTable.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ButtonLevel from "../Buttons";

interface Props {
  columns: string[];
  rows: string[][];
  options?: {
    startIcon: React.ReactElement;
    label: string;
    onClick: (rowIndex: number) => void;
  }[];
}

export default function BasicTable(props: Props) {
  // anchorEl nos dice donde esta ubicado los 3 puntitos
  //de esta forma podemos poner el Popper en el lugar correcto
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [indexSelected, setIndexSelected] = React.useState<number>(0);

  // Si anchorEl tiene elemento entonces abrimos
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  // funcion encargada de abrir el popper
  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    indexSelected: number
  ) => {
    setIndexSelected(indexSelected);
    setAnchorEl(anchorEl ? null : event.currentTarget); // seteo el anchorEl con el elemento actual (con los 3 puntitos)
  };

  return (
    <Grid className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.columns.map((e) => (
                <TableCell>{e}</TableCell>
              ))}
              <TableCell align="right">Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((e) => (
                  <TableCell>{e && e.length ? e : "-"}</TableCell>
                ))}

                <TableCell align="right">
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: 0,
                    }}
                    type="button"
                    onClick={(event) => handleClick(event, rowIndex)}
                  >
                    {/* 3 puntitos icono */}
                    <MoreVertOutlinedIcon />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Popper className="popper" id={id} open={open} anchorEl={anchorEl}>
        <Grid className="options">
          {props.options?.map((option) => (
            <ButtonLevel
              startIcon={option.startIcon}
              size="small"
              variant="text"
              title={option.label ? option.label : ""}
              onClick={() => {
                option.onClick(indexSelected);
                setAnchorEl(null);
              }}
            />
          ))}
        </Grid>
      </Popper>
    </Grid>
  );
}
