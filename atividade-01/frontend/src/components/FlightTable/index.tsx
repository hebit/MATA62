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
import React, { useEffect, useState } from "react";
import api from "../../api";

import { Container } from "./styles";

export type Props2 = {
  selectedYear?: number;
  sg_empresa?: string;
  situacao?: number;
  part_prev?: number;
  cheg_prev?: number;
};

function FlightTable({ selectedYear }: Props2) {
  
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    api.get(`years/${selectedYear}`)
    .then(response => {
      console.log(response.data)
      setFlights(response.data.flights)
    })
  }, [selectedYear])

  return (
    <Container>
      {selectedYear && (
        <Typography variant="body1">Dados de {selectedYear}</Typography>
      )}
      {flights && (
        flights.map((item: Props2) => (
          <TableContainer component={Paper} style={{marginBottom: 10}}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow >
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
                empresa: item.sg_empresa,
                status: item.situacao,
                saida: item.part_prev,
                chegada: item.cheg_prev,
              },
            ].map((row) => (
              <TableRow key={row.empresa}>
                <TableCell component="th" scope="row">
                  {row.empresa}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.saida}</TableCell>
                <TableCell align="right">{row.chegada}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        ))
      )}
    </Container>
  );
}

export default FlightTable;
