import { INTERVALS } from "../const";
import { TInterval } from "../types";
import { SelectWrapper, StyledSelect } from "./CommonStyled";

type TProps = {
  selectedInterval: TInterval;
  setSelectedInterval: (interval: TInterval) => void;
};

const IntervalSelect = ({
  selectedInterval,
  setSelectedInterval,
}: TProps): JSX.Element => {
  return (
    <SelectWrapper>
      <label htmlFor="interval">Selct Interval:</label>
      <StyledSelect
        id=""
        name="einterval"
        value={selectedInterval}
        onChange={(e) => setSelectedInterval(e.target.value as TInterval)}
      >
        {INTERVALS.map((interval) => (
          <option key={interval} value={interval}>
            {interval}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default IntervalSelect;
