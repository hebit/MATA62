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
import { format, fromUnixTime } from "date-fns";
import React, { useEffect, useState } from "react";
import api from "../../api";
import { Flight, flightStatus } from "../../utils/types";

import { Container, Badget } from "./styles";

export type Props = {
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
}: Props) {
  const [page, setPage] = useState(1);
  const [initialDate, setInitialDate] = useState<string>(
    `${selectedYear}-01-01`
  );
  const [finishDate, setFinishDate] = useState<string>(`${selectedYear}-12-31`);

  useEffect(() => {
    api
      .get(
        `years/${selectedYear}?page=${page}&start_at=${initialDate}&finish_at=${finishDate}`
      )
      .then((response) => {
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
        setFlights(response.data.flights);
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
            <Box display="flex" alignItems="flex-end">
              <Box marginX={4} marginY={2}>
                <Typography>
                  <Badget /> Atrasos de 30min ou menos
                </Typography>
              </Box>
              <Box marginX={4} marginY={2}>
                <Typography>
                  <Badget error /> Atrasos maiores que 30min
                </Typography>
              </Box>
            </Box>
          </Box>
        </>
      )}

      <TableContainer component={Paper} style={{ marginBottom: 10 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Empresa</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Saida</TableCell>
              <TableCell align="right">Chegada</TableCell>
            </TableRow>
          </TableHead>
          {flights &&
            flights.map((item) => (
              <TableBody key={item.id}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.sg_empresa}
                  </TableCell>
                  <TableCell align="right">
                    {
                      flightStatus[
                        `${item.situacao}` as keyof typeof flightStatus
                      ]
                    }
                  </TableCell>
                  <TableCell align="right">
                    {item.part_prev &&
                      format(fromUnixTime(item.part_prev), "dd/MM/yyyy HH:mm")}
                    {item.part_real > 0 && item.part_real > item.part_prev && (
                      <Badget
                        title={`Atraso de ${Math.round(
                          (item.part_real - item.part_prev) / 60
                        )}min`}
                        error={(item.part_real - item.part_prev) / 60 > 30}
                      />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {item.cheg_real === 0
                      ? "------------------------"
                      : format(
                          fromUnixTime(item.cheg_real),
                          "dd/MM/yyyy HH:mm"
                        )}
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
      <Button onClick={() => loadData()} style={{ margin: 30, marginLeft: 0 }}>
        Carregar mais voos
      </Button>
    </Container>
  );
}

export default FlightTable;
