import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Shared/firebase.config";


const auth = getAuth(app);

 export const AuthContex = createContext(null)


const AuthProvider = ({children}) => {

   const [user,setUser] = useState()
   const [loader,SetLoader] = useState(true)

   useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth,currentUser => {
          //    const userEmail = currentUser?.email ;
          //    const loggedUser = { email: userEmail };
             setUser(currentUser)
             SetLoader(false)
             
//            if (currentUser) {
//         axios.post('https://career-canvas-backend.vercel.app/jwt',loggedUser, {withCredentials: true})
//        .then(res => {
//          console.log(res.data);
//        })
//            }  
        })
        return () => {
             unSubscribe()
        }
   },[])

   

   const CreateUser = (email,password) => {
      SetLoader(true)
      return createUserWithEmailAndPassword(auth,email,password)
   }

   const LogIn = (email,password) => {
      SetLoader(true)
      return signInWithEmailAndPassword(auth,email,password)
   }

   const LogOut = () => {
      SetLoader(true)
      return signOut(auth)
   }


          const information = {
            CreateUser,
            LogIn,
            user,
            loader,
            LogOut
         }
          return (
          <AuthContex.Provider value={information} >
             {children}                 
          </AuthContex.Provider>
          );
          };

          AuthProvider.propTypes = {
          children: PropTypes.node
          }

          export default AuthProvider;