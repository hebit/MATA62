import { Container, Grid, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import FlightTable from "./components/FlightTable";
import PreviewCard from "./components/PreviewCard";
import api from "./api";
import Graph from "./components/Graph";
import { Flight, Stats } from "./utils/types";

const previews = [
  { year: 2015, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2016, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2017, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2018, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2019, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2020, confirmed: 0, canceled: 24, total: 24000 },
];

type StatsResponse = {
  stats: Stats[];
};

function App() {
  const [selectedYear, setSelectedYear] = useState<undefined | number>(
    undefined
  );
  const [total, setTotal] = useState<undefined | number>(undefined);

  const [stats, setStats] = useState<Stats[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [graph, setGraph] = useState(false);

  useEffect(() => {
    api.get<StatsResponse>("stats").then((response) => {
      console.log(response.data);
      setStats(response.data.stats);
      setIsLoading(!isLoading);
    });
  }, []);

  function showGraph() {
    setGraph(!graph);
  }

  const [flights, setFlights] = useState<Flight[]>([]);
  function resetFlights() {
    setFlights([]);
  }

  if (isLoading)
    return (
      <ReactLoading type="spin" color="#2a3d91" height={"10%"} width={"10%"} />
    );
  else {
    return (
      <Container maxWidth="md">
        <Grid container spacing={2}>
          {stats.map((preview) => (
            <Grid key={preview.year} id="div1" item xs={12} sm={6} md={4}>
              <PreviewCard
                {...preview}
                selected={selectedYear === preview.year}
                onSelect={(year) => {
                  if (year !== selectedYear) {
                    resetFlights();
                  }
                  setSelectedYear(year);
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          onClick={() => showGraph()}
          style={{ margin: 30, marginLeft: 0 }}
        >
          Mostrar Gráfico
        </Button>
        {graph && <Graph stats={stats} />}
        {selectedYear && (
          <FlightTable
            flights={flights}
            setFlights={setFlights}
            selectedYear={selectedYear}
            resetFlights={resetFlights}
          />
        )}
      </Container>
    );
  }
}

export default App;
