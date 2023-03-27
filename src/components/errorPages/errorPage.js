import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="errorPageContainer">
            <h1>Error has Occoured</h1>
            <hr></hr>
            <p>
                {error.statusText || error.message}
            </p>
        </div>
    )
}