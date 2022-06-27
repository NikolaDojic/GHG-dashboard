import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const StyledSelect = styled.select`
  max-width: 200px;
  margin-top: 10px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
`;

export const Flex = styled("div")<{
  direction?: string;
  media769?: { direction?: string };
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  @media only screen and (max-width: 769px) {
    ${(props) => "flex-direction:" + props?.media769?.direction}
  }
`;
