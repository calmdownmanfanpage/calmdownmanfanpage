import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";

export default function AsyncComponent({
  isLoading,
  hasError,
  errorMessage,
  retry,
  children,
}: {
  isLoading: boolean;
  hasError: boolean;
  errorMessage?: string;
  retry?: VoidFunction;
  children?: JSX.Element;
}) {
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : hasError ? (
        <ErrorMessage message={errorMessage} retry={retry} />
      ) : (
        children
      )}
    </>
  );
}
