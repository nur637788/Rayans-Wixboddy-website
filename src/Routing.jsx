import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Massage from './Pages/Massage'
import InfinityF from './Pages/InfinityF'
import News from './Pages/News'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NewsDetails from "./components/NewsPage/NewsDetails";


function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App></App>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/projects',
                    element: <Projects></Projects>
                },
                {
                    path: '/massage',
                    element: <Massage></Massage>
                },
                {
                    path: '/infinityF',
                    element: <InfinityF></InfinityF>
                },
                {
                    path: '/news',
                    element: <News></News>
                },
                {
                    path: '/newsDetails',
                    element: <NewsDetails></NewsDetails>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                },

            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default Routing;


