import {
  Paper,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";

import { Container } from "./styles";

type Props = {
  selectedYear?: number;
};

function FlightTable({ selectedYear }: Props) {
  return (
    <Container>
      {selectedYear && (
        <Typography variant="body1">Dados de {selectedYear}</Typography>
      )}
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Empresa</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Saida</TableCell>
              <TableCell align="right">Chegada</TableCell>
              <TableCell align="right">...</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                name: "test",
                calories: "a",
                fat: "b",
                carbs: "c",
                protein: "d",
              },
            ].map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default FlightTable;
