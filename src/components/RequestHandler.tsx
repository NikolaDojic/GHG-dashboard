import ErrorMessage from "./ErrorMessage";
import Spinner from "./Spinner";

type TProps = {
  isLoading: boolean;
  errorMessage: string | null | undefined;
  children?: React.ReactNode;
};
const RequestHandler = ({
  isLoading,
  errorMessage,
  children = null,
}: TProps) => {
  return isLoading ? (
    <div style={{ position: "relative", display: "inline-box" }}>
      <Spinner></Spinner>
    </div>
  ) : errorMessage ? (
    <ErrorMessage errorMessage={errorMessage} />
  ) : (
    <>{children}</>
  );
};

export default RequestHandler;
