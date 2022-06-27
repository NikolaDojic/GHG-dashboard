const baseUrl = "https://api.v2.emissions-api.org/api/v2/";
export const API = {
  countries: () => `${baseUrl}countries.json`,
  products: () => `${baseUrl}products.json`,
  dataRange: (product: string) => `${baseUrl}${product}/data-range.json`,
  dataStats: (product: string) => `${baseUrl}${product}/statistics.json`,
};
