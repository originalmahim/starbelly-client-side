import { useContext, useEffect, useState } from "react";
import { AuthContex } from './../Providers/AuthProvider';

const Profile = () => {
          const {user} = useContext(AuthContex)
          const [info, setInfo] = useState(null);
          const Bronze = `https://i.ibb.co/Gv21SF2/bronze-medal.png`;
          const Silver = `https://cdn.vectorstock.com/i/1000x1000/79/95/modern-silver-circle-metal-badge-label-and-design-vector-16487995.webp`
          const Gold = `https://toppng.com/uploads/preview/gold-badge-png-11552734724wixvd59trm.png`
          const Platinum = `https://icon-library.com/images/platinum-icon/platinum-icon-10.jpg`
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
          <div>
          <div className="bg-gray-100 h-full flex items-center justify-center">
          <div className="bg-white p-8  shadow-md  w-full">
          {/* Cover Photo */}
          <div className="mb-6">
          <img
          src="https://cdn.wallpapersafari.com/63/5/IbDT2z.jpg"
          alt="Cover Photo"
          className="w-full h-32 object-cover rounded-t-lg"
          />
          </div>
          {/* Profile Information */}
          <div className="flex items-center">
          {/* User Image */}
          <div className="flex-shrink-0 mr-6">
          <img
          src={user?.photoURL}
          alt="User Image"
          className="w-24 h-24 object-cover rounded-full border-4 border-white"
          />
          </div>
          <div>
          <div className="flex items-center gap-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user?.displayName}</h2>
          {info?.subscriptionStatus === 'Bronze' && (
          <img className="w-9" src={Bronze} /> )}
          {info?.subscriptionStatus === 'Silver' && (
          <img className="w-9" src={Silver} /> )}
          {info?.subscriptionStatus === 'Gold' && (
          <img className="w-9" src={Gold} /> )}
          {info?.subscriptionStatus === 'Platinum' && (
          <img className="w-9" src={Platinum} /> )}
          </div>
          {/* User Email */}
          <p className="text-gray-600">{user?.email}</p>
          {/* Badge Section */}
          <div className="mt-2 flex items-center">
          <p className="text-gray-600 mr-2">Subscription Type : {info?.subscriptionStatus}</p>
          </div>
          </div>
          </div>
          </div>
          </div>                    
          </div>
          );
};

export default Profile;