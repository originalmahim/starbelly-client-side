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
import Meals from './Pages/Meals/Meals';
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
        element: <Meals></Meals>
      },
      {
        path: '/meal/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/allmeals/${params.id}`)
      },
      {
        path: '/Checkout',
        element: <CheckoutPage></CheckoutPage>
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Profile />,
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
            element: <MyReviews></MyReviews>
          },
          {
            path: 'requested',
            element: <RequestedMeal></RequestedMeal>
          }
        ],
      }      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
