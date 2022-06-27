import styled from "styled-components";

const StyledError = styled.div`
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  padding: 10px 20px;
  margin: 10px 0;
`;
type TProps = {
  errorMessage: string | null | undefined;
};

const ErrorMessage = ({ errorMessage }: TProps) => {
  return errorMessage ? <StyledError>{errorMessage}</StyledError> : null;
};
export default ErrorMessage;
