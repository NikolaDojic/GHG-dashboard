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
  console.log(data);
  return (
    <ChartsWrapper>
      {data.map(({ data, isFetching, error }, index) => {
        return (
          <RequestHandler
            key={data?.product || index}
            isLoading={isFetching}
            errorMessage={error?.message}
          >
            {!data?.data ? null : (
              <Chart
                data={apiStatsToChartData(data?.data)}
                interval={interval}
                product={data?.product}
              />
            )}
          </RequestHandler>
        );
      })}
    </ChartsWrapper>
  );
};
export default Charts;
