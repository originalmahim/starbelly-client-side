import { useContext, useEffect, useState } from "react";
import { AuthContex } from './../Providers/AuthProvider';
import { Helmet } from "react-helmet";

const Profile = () => {
  const { user } = useContext(AuthContex);
  const [info, setInfo] = useState(null);
  const Bronze = "https://i.ibb.co/Gv21SF2/bronze-medal.png";
  const Silver =
    "https://cdn.vectorstock.com/i/1000x1000/79/95/modern-silver-circle-metal-badge-label-and-design-vector-16487995.webp";
  const Gold =
    "https://toppng.com/uploads/preview/gold-badge-png-11552734724wixvd59trm.png";
  const Platinum =
    "https://icon-library.com/images/platinum-icon/platinum-icon-10.jpg";

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

  return (
    <div className="flex items-center justify-center">
      <Helmet>
          <title>Starbelly | Profile</title>
          </Helmet>
      <div className="bg-white p-8 shadow-md w-full max-w-2xl">
        {/* Cover Photo */}
        <div className="mb-6">
          <img
            src="https://cdn.wallpapersafari.com/63/5/IbDT2z.jpg"
            alt="Cover Photo"
            className="w-full h-32 object-cover rounded-t-lg"
          />
        </div>
        {/* Profile Information */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* User Image */}
          <div className="flex-shrink-0 mb-4 md:mr-6">
            <img
              src={user?.photoURL}
              alt="User Image"
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
            />
          </div>
          <div className="md:ml-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {user?.displayName}
              </h2>
              {info && (
                <img
                  className="w-9"
                  src={
                    info.subscriptionStatus === "Bronze"
                      ? Bronze
                      : info.subscriptionStatus === "Silver"
                      ? Silver
                      : info.subscriptionStatus === "Gold"
                      ? Gold
                      : Platinum
                  }
                  alt="Subscription Badge"
                />
              )}
            </div>
            {/* User Email */}
            <p className="text-gray-600 mb-2">{user?.email}</p>
            {/* Badge Section */}
            <div className="flex items-center">
              <p className="text-gray-600 mr-2">
                Subscription Type: {info?.subscriptionStatus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
