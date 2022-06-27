import styled from "styled-components";
import { TDataStatsResponse, TInterval } from "../types";
import { apiStatsToChartData } from "../utils";
import Chart from "./Chart";
import { Flex } from "./CommonStyled";
import RequestHandler from "./RequestHandler";

type TProps = {
  data: TDataStatsResponse[];
  interval: TInterval;
};
const ChartsWrapper = styled(Flex)`
  flex-wrap: wrap;
`;

const Charts = ({ data, interval }: TProps) => {
  return (
    <ChartsWrapper>
      {data.map(({ data, isFetching, error }) => {
        if (!data?.data) {
          return null;
        }
        return (
          <RequestHandler isLoading={isFetching} errorMessage={error?.message}>
            <Chart
              key={data.product}
              data={apiStatsToChartData(data.data)}
              interval={interval}
              product={data.product}
            />
          </RequestHandler>
        );
      })}
    </ChartsWrapper>
  );
};
export default Charts;
