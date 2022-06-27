import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import styled from "styled-components";
import { COLOR } from "../const";
import { TInterval, TProductType } from "../types";

type TProps = {
  data: any;
  interval: TInterval;
  product: TProductType;
};

const ChartWrapper = styled.div`
  width: 510px;
  padding: 5px;
  background-color: var(--ghost-white);
  margin: 5px;
`;
const Title = styled("h4")<{ product: TProductType }>`
  color: ${(props) => COLOR[props.product]};
  text-align: center;
`;
const Chart = ({ data, interval, product }: TProps) => {
  return (
    <ChartWrapper>
      <Title product={product}> {product} </Title>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time">
          <Label offset={-10} value={interval} position={"insideBottomRight"} />
        </XAxis>
        <YAxis />
        <Tooltip
          labelStyle={{ color: "#000" }}
          cursor={{ stroke: COLOR[product], strokeWidth: 2 }}
        />
        <Legend />
        <Line
          dot={false}
          type="monotone"
          dataKey="value"
          stroke={COLOR[product]}
        />
      </LineChart>
    </ChartWrapper>
  );
};
export default Chart;
