import { API } from "../config";
import useGet from "../hooks/useSimpleGet";
import { TCountryCode, TError } from "../types";
import { SelectWrapper, StyledSelect } from "./CommonStyled";
import RequestHandler from "./RequestHandler";

type TProps = {
  selectedCountry: TCountryCode;
  setCountry: (country: TCountryCode) => void;
};

const CountrySelect = ({
  selectedCountry,
  setCountry,
}: TProps): JSX.Element => {
  const { isFetching, data, error } = useGet("getCountries", API.countries());
  return (
    <RequestHandler
      isLoading={isFetching}
      errorMessage={(error as TError)?.message}
    >
      <SelectWrapper>
        <label htmlFor="country">Selct Country:</label>
        <StyledSelect
          name="country"
          value={selectedCountry}
          onChange={(e) => setCountry(e.target.value as TCountryCode)}
        >
          {data
            ? Object.keys(data).map((countryCode) => (
                <option key={countryCode} value={countryCode}>
                  {data[countryCode]}
                </option>
              ))
            : null}
        </StyledSelect>
      </SelectWrapper>
    </RequestHandler>
  );
};

export default CountrySelect;
