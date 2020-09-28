import { Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import FlightTable from "./components/FlightTable";
import PreviewCard from "./components/PreviewCard";

const previews = [
  { year: 2015, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2016, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2017, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2018, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2019, confirmed: 12, canceled: 12, total: 24000 },
  { year: 2020, confirmed: 0, canceled: 24, total: 24000 },
];

function App() {
  const [selectedYear, setSelectedYear] = useState<undefined | number>(
    undefined
  );
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {previews.map((preview) => (
          <Grid key={preview.year} id="div1" item xs={12} sm={6} md={4}>
            <PreviewCard
              {...preview}
              selected={selectedYear === preview.year}
              onSelect={(year) => setSelectedYear(year)}
            />
          </Grid>
        ))}
      </Grid>
      <FlightTable selectedYear={selectedYear} />
    </Container>
  );
}

export default App;
