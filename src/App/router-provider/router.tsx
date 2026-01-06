import { createBrowserRouter } from "react-router-dom";
import { TitlePage } from '../../Pages/titlePage/index'
import { routes } from '../../Shared/configs/routes/routes.config'
import { BodiesPhoto } from "../../Pages/photosPage";
import { Positions } from "../../Pages/positionsPage";
import { BodiesList } from "../../Pages/bodiesListPage";
import { NotFound } from "../../Pages/notFoundPage"
import { Layout } from "../../Pages/layout/ui/Layout";

export const router = createBrowserRouter([{
   element: <Layout />,
    children: [{
        path: routes.home(),
        element: <TitlePage />
    },
    {
        path: routes.photos(),
        element: <BodiesPhoto />
    },
    {
        path: routes.positions(),
        element: <Positions />
    }, 
    {
        path: routes.list(),
        element: <BodiesList />
    },
    {
        path: '*',
        element: <NotFound />
    }
]
}])