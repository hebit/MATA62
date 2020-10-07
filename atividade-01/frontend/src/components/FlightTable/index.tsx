import {
  Paper,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  InputBase,
  InputLabel,
  Box,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { Flight, flightStatus } from "../../utils/types";

import { Container } from "./styles";

export type Props2 = {
  selectedYear?: number;
  flights: Flight[];
  setFlights: React.Dispatch<React.SetStateAction<Flight[]>>;
  resetFlights: () => void;
};

function FlightTable({
  selectedYear,
  flights,
  setFlights,
  resetFlights,
}: Props2) {
  const [page, setPage] = useState(1);
  const [initialDate, setInitialDate] = useState<string>(
    `${selectedYear}-01-01`
  );
  const [finishDate, setFinishDate] = useState<string>(`${selectedYear}-12-31`);

  useEffect(() => {
    api.get(`years/${selectedYear}?page=${page}`).then((response) => {
      console.log(response.data);
      setFlights([...flights, ...response.data.flights]);
    });
  }, [selectedYear, page]);

  useEffect(() => {
    setPage(1);
    setFinishDate(`${selectedYear}-12-31`);
    setInitialDate(`${selectedYear}-01-01`);
  }, [selectedYear]);

  function loadData() {
    if (flights.length < 15) return;
    setPage(page + 1);
  }

  useEffect(() => {
    resetFlights();
    api
      .get(
        `years/${selectedYear}?page=${page}&start_at=${initialDate}&finish_at=${finishDate}`
      )
      .then((response) => {
        console.log(response.data);
        setFlights([...flights, ...response.data.flights]);
      });
  }, [initialDate, finishDate]);

  return (
    <Container>
      {selectedYear && (
        <>
          <Typography variant="body1">Dados de {selectedYear}</Typography>
          <Box marginY={1} width="100%" />
          <Box display="flex">
            <Box>
              <InputLabel>Data de Início</InputLabel>
              <InputBase
                type="date"
                onChange={(e) => setInitialDate(e.target.value)}
                value={initialDate}
              />
            </Box>
            <Box>
              <InputLabel>Data de Fim</InputLabel>
              <InputBase
                type="date"
                onChange={(e) => setFinishDate(e.target.value)}
                value={finishDate}
              />
            </Box>
          </Box>
        </>
      )}
      {flights &&
        flights.map((item) => (
          <TableContainer
            onClick={() => console.log(item.id)}
            key={item.id}
            component={Paper}
            style={{ marginBottom: 10 }}
          >
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
                    <TableCell align="right">
                      {
                        flightStatus[
                          `${row.status}` as keyof typeof flightStatus
                        ]
                      }
                    </TableCell>
                    <TableCell align="right">{row.saida}</TableCell>
                    <TableCell align="right">{row.chegada}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ))}
      <Button onClick={() => loadData()} style={{ margin: 30, marginLeft: 0 }}>
        See More
      </Button>
    </Container>
  );
}

export default FlightTable;
