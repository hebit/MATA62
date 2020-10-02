import { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";
import { FlightStatus, FlihgtYears } from "../utils/types";
import {
  getUnixTimeFromBrasiliaTimezone,
  getYearRange,
} from "../utils/getYearRange";

type FilterQuery = {
  page?: string;
  start_at?: string;
  finish_at?: string;
};

type Params = {
  year?: string;
};

const prisma = new PrismaClient();

class FlightController {
  static async getYear(
    request: Request<Params, any, any, FilterQuery>,
    response: Response
  ) {
    const year = request.params.year ? Number(request.params.year) : 2015;
    const page = request.query.page ? Number(request.query.page) : 0;

    const range = getYearRange(year);
    if (request.query.start_at) {
      range.start = getUnixTimeFromBrasiliaTimezone(request.query.start_at);
    }
    if (request.query.finish_at) {
      range.end = getUnixTimeFromBrasiliaTimezone(request.query.finish_at);
    }

    const take = 15;
    const flights = await prisma.flights.findMany({
      where: {
        AND: {
          part_prev: {
            gte: range.start,
            lte: range.end,
          },
        },
      },
      skip: page <= 1 ? 0 : (page - 1) * take,
      take,
      orderBy: {
        part_real: "asc",
      },
    });
    return response.json({ flights });
  }

  static async stats(request: Request, response: Response) {
    const years = [
      FlihgtYears._2015,
      FlihgtYears._2016,
      FlihgtYears._2017,
      FlihgtYears._2018,
      FlihgtYears._2019,
      FlihgtYears._2020,
    ];

    const statsPromises = years.map(async (year) => {
      const range = getYearRange(year);
      const canceledPromise = prisma.flights.count({
        where: {
          situacao: FlightStatus.CANCELED,
          part_prev: { gte: range.start, lte: range.end },
        },
      });

      const executedPromise = prisma.flights.count({
        where: {
          situacao: FlightStatus.EXECUTED,
          part_prev: { gte: range.start, lte: range.end },
        },
      });

      const [canceled, executed] = await Promise.all([
        canceledPromise,
        executedPromise,
      ]);

      const total = await prisma.flights.count({
        where: {
          part_prev: {
            gte: range.start,
            lte: range.end,
          },
        },
      });

      return {
        year,
        canceled,
        executed,
        total,
      };
    });

    const stats = await Promise.all(statsPromises);

    return response.json({ stats });
  }
}

export default FlightController;
