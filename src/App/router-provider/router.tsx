import { createBrowserRouter } from "react-router-dom";
import { TitlePage } from '../../Pages/titlePage/index'
import { routes } from '../../Shared/configs/routes/routes.config'

export const router = createBrowserRouter([{
    element: <TitlePage />,
    children: [{
        path: routes.home(),
    }]
}])