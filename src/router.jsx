import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import QuestionDetailsPage from "./pages/QuestionDetailsPage/QuestionDetailsPage";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/Questions-List/',
                element: <HomePage />,
            },
            {
                path: '/Questions-List/details/:id',
                element: <QuestionDetailsPage />,
            },
        ],
    },
])
