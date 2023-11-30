import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import AuthProvider from './Pages/Providers/AuthProvider';
import FoodDetails from './Pages/Home/FoodDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import Profile from './Pages/Dashboard/Profile';
import ManageUser from './Pages/Dashboard/ManageUser';
import AddMeal from './Pages/Dashboard/AddMeal';
import AllMeals from './Pages/Dashboard/AllMeals';
import AllReviews from './Pages/Dashboard/AllReviews';
import ServeMeal from './Pages/Dashboard/ServeMeal';
import UpcommingMeals from './Pages/Dashboard/UpcommingMeals';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';
import MyReviews from './Pages/Dashboard/MyReviews';
import RequestedMeal from './Pages/Dashboard/RequestedMeal';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Protected from './Pages/Providers/Protected';
import Meals from './Pages/AllMeals/Meals';
import Upcoming from './Pages/Upcoming/upcoming';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/allmeals',
        element: <Protected><Meals></Meals></Protected>
      },
      {
        path: '/upcomingmeals',
        element: <Protected><Upcoming></Upcoming></Protected>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },

      {
        path: '/meal/:id',
        element: <Protected><FoodDetails></FoodDetails></Protected>,
        loader: ({params}) => fetch(`https://starbelly-eta.vercel.app/allmeals/${params.id}`)
      },
      {
        path: '/Checkout/:id',
        element: <Protected><CheckoutPage></CheckoutPage></Protected>,
        loader: ({params}) => fetch(`https://starbelly-eta.vercel.app/package/${params.id}`)
      },
      {
        path: '/dashboard',
        element: <Protected><Dashboard /></Protected>,
        children: [
          {
            index: true,
            element: <Protected><Profile /></Protected>,
          },
          {
            path: 'profile', 
            element: <Profile />,
          },
          {
            path: 'manageuser',
            element: <ManageUser />,
          },
          {
            path: 'addmeal',
            element: <AddMeal />,
          },
          {
            path: 'allmeals',
            element: <AllMeals />,
          },
          {
            path: 'allreviews',
            element: <AllReviews />,
          },
          {
            path: 'servemeals',
            element: <ServeMeal />,
          },
          {
            path: 'upcomingmeals',
            element: <UpcommingMeals />,
          },
  
          {
            path:'myreviews',
            element: <Protected><MyReviews></MyReviews></Protected>
          },
          {
            path: 'requested',
            element: <Protected><RequestedMeal></RequestedMeal></Protected>
          }
        ],
      }      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
