import React, { Component } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2015", total: 2400, executed: 2400, canceled: 1400 },
  { year: "2016", total: 1398, executed: 2210, canceled: 240 },
  { year: "2017", total: 9800, executed: 2290, canceled: 3400 },
  { year: "2018", total: 3908, executed: 2000, canceled: 4400 },
  { year: "2019", total: 4800, executed: 2181, canceled: 9400 },
  { year: "2020", total: 3800, executed: 9500, canceled: 2400 },
];

type Props = {
  stats: Array<{}>
};

function Graph(props:Props) {
    return (
      //  <ResponsiveContainer>
      <AreaChart
        width={830}
        height={350}
        data={props.stats}
        margin={{ top: 30, right: 30, left: 30, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorCan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#db4a30" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#db4a30" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="year" />
        <YAxis />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="total"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="executed"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Area
          type="monotone"
          dataKey="canceled"
          stroke="#db4a30"
          fillOpacity={1}
          fill="url(#colorCan)"
        />
      </AreaChart>

      //</ResponsiveContainer>
    );
}

export default Graph;
