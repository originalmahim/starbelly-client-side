import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContex } from './AuthProvider';


const Protected = ({ children }) => {
    const { user, loader } = useContext(AuthContex);
    const location = useLocation();

    if(loader){
        return <progress className="progress w-56"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default Protected;