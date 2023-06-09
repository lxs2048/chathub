import { useRouteError } from "react-router-dom";
type RouterError = {
    status?: number;
    statusText?: string;
    internal?: boolean;
    data?: string;
    error?: any;
}
export default function ErrorPage() {
  const error = useRouteError() as RouterError;
  console.log(error);
  return (
    <div className="h-screen">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || ''}</i>
      </p>
    </div>
  );
}