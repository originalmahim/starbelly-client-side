
import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContex } from "../Providers/AuthProvider";

const Dashboard = () => {

  const {user} = useContext(AuthContex);

  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setInfo(data);
    })
    .catch((error) => {
    console.error("Error fetching data:", error);
    });
    }, [user?.email]);
          

          return (
          
            <div className="min-h-[70vh]">
              {/* Navigation */}
              <nav className="bg-yellow-400 p-4">
                <div className="container mx-auto">
                  <div className="text-black text-center">
                    <h1 className="text-2xl font-semibold">Wellcome To Dashboard</h1>
                  </div>
                </div>
              </nav>
        
              {/* Content */}
              <div className="max-w-7xl mx-auto mt-8">
                {/* Your routing logic goes here */}
                {/* For simplicity, I'll create a basic tab structure */}
                <div className="flex">
                  <div className="w-1/4 text-xl font-semibold">
                    {/* Sidebar */}
                    { info?.role == 'admin' ? <ul>
                      <li><NavLink to= '/dashboard/profile'  className="block p-4">Admin Profile</NavLink></li>
                      <li><NavLink to='/dashboard/manageuser'  className="block p-4">Manage Users</NavLink></li>
                      <li><NavLink to='/dashboard/addmeal'  className="block p-4">Add Meal</NavLink></li>
                      <li><NavLink to= '/dashboard/allmeals'  className="block p-4">All Meals</NavLink></li>
                      <li><NavLink to='/dashboard/allreviews'  className="block p-4">All Reviews</NavLink></li>
                      <li><NavLink to= '/dashboard/servemeals'  className="block p-4">Serve Meals</NavLink></li>
                      <li><NavLink to='/dashboard/upcomingmeals'  className="block p-4">Upcoming Meals</NavLink></li>
                    </ul>
                    : 
                    <ul>
                    <li><NavLink to= '/dashboard/profile'  className="block p-4">My Profile</NavLink></li>
                    <li><NavLink to= '/dashboard/requested'  className="block p-4">Requested Meals</NavLink></li>
                    <li><NavLink to= '/dashboard/myreviews'  className="block p-4">My Reviews</NavLink></li>
                    </ul>
                    }
                  </div>
                  <div className="w-3/4 p-4">
                    <Outlet></Outlet>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        
        export default Dashboard;