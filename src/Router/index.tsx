import {
    createHashRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "~components/ErrorPage";
import Layout from "~components/Layout";
import ChatPage from "~pages/ChatPage";
import ImagePage from "~pages/ImagePage";
import SettingPage from "~pages/SettingPage";
import WelcomePage from "~pages/WelcomePage";
const router = createHashRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <WelcomePage/>,
            },
            {
                path: "chat",
                element: <ChatPage/>,
            },
            {
                path: "image",
                element: <ImagePage/>,
            },
            {
                path: "setting",
                element: <SettingPage/>,
            },
        ],
    },
]);
export default () => {
    return (
        <RouterProvider router={router} />
    )
}