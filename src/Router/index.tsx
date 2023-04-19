import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "~components/ErrorPage";
import Layout from "~components/Layout";
const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <div>welcome</div>,
            },
            {
                path: "chat",
                element: <div>chat</div>,
            },
            {
                path: "image",
                element: <div>image</div>,
            },
            {
                path: "setting",
                element: <div>setting</div>,
            },
        ],
    },
]);
export default () => {
    return (
        <RouterProvider router={router} />
    )
}