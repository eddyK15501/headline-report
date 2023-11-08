import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div className="container mt-5">
      <h1>Oops!</h1>
      <p>Error, an unexpected error has occured.</p>
      <p>
        <i>{err.statusText || err.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
