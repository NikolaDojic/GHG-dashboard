import { TDataStats } from "./types";

export const isValidDate = (date: any): boolean => !isNaN(date);
export const isValidDateString = (dateString: string) =>
  isValidDate(new Date(dateString));

export const formatData = (dataStats: TDataStats[]) =>
  dataStats.map((item) => ({ name: item.time.interval_start }));

export const apiStatsToChartData = (data: TDataStats[]) =>
  data.map((item) => ({
    time: new Date(item.time.interval_start).toLocaleDateString(),
    value: item.value.average,
  }));
