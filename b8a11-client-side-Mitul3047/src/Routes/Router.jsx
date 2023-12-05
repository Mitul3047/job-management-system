
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import LogIn from '../Pages/Login';
import Register from '../Pages/Register';
import AddProducts from '../Pages/AddProducts';
import JobDetails from '../Pages/JobDetails';
import Bids from '../Pages/Bids';
import PrivateRoute from './PrivateRoute';
import PostedJobs from '../Pages/PostedJobs';
import UpdatePostedJobs from '../Pages/UpdatePostedJobs';
import BidRequest from '../Pages/BidRequest';
import AllJobs from '../Pages/AllJobs';
import Error from '../Pages/Error';


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/log-in',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/add-products',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/job-details/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-management-api.vercel.app/postedjobs/${params.id}`)

            },
            {
                path: '/my-bids',
                element: <PrivateRoute><Bids></Bids></PrivateRoute>
            },
            {
                path: '/posted-jobs',
                element: <PrivateRoute><PostedJobs></PostedJobs></PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdatePostedJobs /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-management-api.vercel.app/postedjobs/${params.id}`)
            },
            {
                path: '/bid-request',
                element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>,
               
            },
            {
                path:"/all-jobs",
                element:<AllJobs></AllJobs>
            }
        ]
    }
])
export default Router;