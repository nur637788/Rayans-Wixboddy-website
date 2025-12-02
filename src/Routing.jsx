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
import Careers from "./components/ContactPage/Careers";
import AboutTeam from "./components/AboutPage/AboutTeam";
import MoreProjects from "./components/ProjectsPage/MoreProjects";


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
                    path: '/moreProjects',
                    element: <MoreProjects></MoreProjects>
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
                    path: '/aboutTeam',
                    element: <AboutTeam></AboutTeam>
                },
                {
                    path: '/contact',
                    element: <Contact></Contact>
                },
                {
                    path: '/careers',
                    element: <Careers></Careers>
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


