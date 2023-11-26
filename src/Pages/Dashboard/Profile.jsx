import { useContext } from "react";
import { AuthContex } from './../Providers/AuthProvider';

const Profile = () => {
          const {user} = useContext(AuthContex)
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
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user?.displayName}</h2> <img className="w-9" src="https://i.ibb.co/Gv21SF2/bronze-medal.png" />
          </div>
          {/* User Email */}
          <p className="text-gray-600">{user?.email}</p>
          {/* Badge Section */}
          <div className="mt-2 flex items-center">
          <p className="text-gray-600 mr-2">Membership Type : Bronze</p>
          <i className="fas fa-medal text-yellow-500"></i>
          </div>
          </div>
          </div>
          </div>
          </div>                    
          </div>
          );
};

export default Profile;