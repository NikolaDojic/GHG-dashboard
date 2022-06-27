import {
  TCountryCode,
  TInterval,
  TProductType,
  TSelectedProducts,
} from "./types";

export const DEFAULT = {
  BEGIN: "2019-02-10",
  END: "2022-02-11",
  INTERVAL: "day" as TInterval,
  COUNTRY: "DE" as TCountryCode,
  PRODUCT: "carbonmonoxide" as TProductType,
  LIMIT: 100,
  OFFSET: 0,
  SELECTED_PRODUCTS: {
    carbonmonoxide: true,
    ozone: false,
    methane: false,
    nitrogendioxide: false,
  } as TSelectedProducts,
};

export const INTERVALS: TInterval[] = [
  "minute",
  "hour",
  "day",
  "week",
  "month",
  "quarter",
  "year",
  "decade",
  "century",
];

export const COLOR = {
  ozone: "#8b95a2",
  carbonmonoxide: "#ee82ee",
  nitrogendioxide: "#6a5acd",
  methane: "#ffa500",
};
