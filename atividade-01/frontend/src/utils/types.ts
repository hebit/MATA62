export type Stats = {
  canceled: number;
  executed: number;
  total: number;
  year: number;
};

export type Flight = {
  id?: number;
  selectedYear?: number;
  sg_empresa?: string;
  situacao?: number;
  part_prev?: number;
  cheg_prev?: number;
};

export const flightStatus = {
  "0": "Cancelado",
  "1": "Realizado",
};
