import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

export default function AsyncComponent({
  isLoading,
  hasError,
  errorMessage,
  children,
}: {
  isLoading: boolean;
  hasError: boolean;
  errorMessage?: string;
  children: JSX.Element;
}) {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        children
      )}
    </>
  );
}
