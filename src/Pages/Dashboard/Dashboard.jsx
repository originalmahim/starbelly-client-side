import { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContex } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { user } = useContext(AuthContex);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch(`https://starbelly-eta.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user?.email]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-yellow-400 p-4">
        <div className="container mx-auto">
          <div className="text-black text-center">
            <h1 className="text-2xl font-semibold">Welcome To Dashboard</h1>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden text-right p-4">
        <button
          onClick={toggleMobileMenu}
          className="text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="bg-gray-800 fixed inset-0 z-50 opacity-75"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white w-2/3 p-4 rounded-lg shadow">
              <ul className="space-y-4">
                {info?.role === "admin" ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        Admin Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manageuser"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        Manage Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addmeal"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        Add Meal
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/allmeals"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        All Meals
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/allreviews"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        All Reviews
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/servemeals"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        Serve Meals
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/upcomingmeals"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        Upcoming Meals
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/requested"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        Requested Meals
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/myreviews"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        My Reviews
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="lg:max-w-7xl mx-auto mt-8">
      <Helmet>
          <title>Starbelly | Dashboard</title>
          </Helmet>
        <div className="lg:flex">
          <div className="lg:w-1/4 p-4 hidden lg:block">
            {info?.role === "admin" ? (
              <ul>
                <li>
                  <NavLink to="/dashboard/profile" className="block p-4">
                    Admin Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageuser" className="block p-4">
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addmeal" className="block p-4">
                    Add Meal
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allmeals" className="block p-4">
                    All Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allreviews" className="block p-4">
                    All Reviews
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/servemeals" className="block p-4">
                    Serve Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/upcomingmeals"
                    className="block p-4"
                  >
                    Upcoming Meals
                  </NavLink>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <NavLink to="/dashboard/profile" className="block p-4">
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/requested" className="block p-4">
                    Requested Meals
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myreviews" className="block p-4">
                    My Reviews
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="lg:w-3/4 p-4">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


