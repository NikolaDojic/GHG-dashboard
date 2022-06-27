import { useMemo } from "react";
import { useQueries } from "react-query";
import { API } from "../config";
import { DEFAULT } from "../const";
import {
  TCountryCode,
  TDataStatsResponse,
  TInterval,
  TProductType,
  TSelectedProducts,
} from "../types";

type TProps = {
  products: TProductType[];
  interval: TInterval;
  country: TCountryCode;
  enabledProducts: TSelectedProducts;
};

const useGetAllData = ({
  enabledProducts,
  interval,
  country,
  products,
}: TProps): TDataStatsResponse[] => {
  const params = useMemo(
    () =>
      products.map((product: TProductType) => {
        const queryParams = new URLSearchParams({
          begin: DEFAULT.BEGIN,
          country,
          end: DEFAULT.END,
          interval,
          limit: String(DEFAULT.LIMIT),
          offset: String(DEFAULT.OFFSET),
        });
        const url = API.dataStats(product);
        return {
          meta: { product },
          queryKey: [
            `getDataStats${product}`,
            product,
            interval,
            country,
            enabledProducts[product],
          ],
          queryFn: async () => {
            const response = await fetch(`${url}?${queryParams}`);
            return { product, data: await response.json() };
          },

          enabled: enabledProducts[product],
        };
      }),
    [products, enabledProducts, country, interval]
  );
  return useQueries(params).map(
    (response) =>
      ({
        data: response.data,
        error: response.error,
        isFetching: response.isFetching,
      } as TDataStatsResponse)
  );
};

export default useGetAllData;
