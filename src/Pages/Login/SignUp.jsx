import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from "react-router-dom";
import {  useContext, useState } from 'react';
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'
import { AuthContex } from '../Providers/AuthProvider';
import app from '../Shared/firebase.config';
import axios from 'axios';
// import { Helmet } from 'react-helmet';


const SignUp = () => {

  const {CreateUser} = useContext(AuthContex)
          const [registerError,setRegisterError] = useState('')
        const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate()

   const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignup = () => {
    signInWithPopup(auth,provider)
    .then((result) => {
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        subscriptionStatus: "Bronze",
        role:"member"
    }
    axios.post('http://localhost:5000/users', userInfo)
    .then(res =>{
        console.log(res.data);
        Swal.fire(
          'Account Created',
          'You have Created Account successfully',
            'success'
          )
        navigate(location?.state ? location.state : '/')
    })
     })
 }

        const handlesignupformSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const url = e.target.photoUrl.value;
        
        setRegisterError('')


        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
        return setRegisterError('password should at least 6 characters long and contains  number , letter and  special characters')    
        }

        CreateUser(email,password)
        .then(result => {
          updateProfile(result.user,{
          displayName: name,
          photoURL: url,
          })
          .then(() => {
            const userInfo = {
              email: email,
              name: name,
              subscriptionStatus: "Bronze",
              role:"member"
          }
          axios.post('http://localhost:5000/users', userInfo)
          .then(res =>{
              console.log(res.data);
              Swal.fire(
                'Account Created',
                'You have Created Account successfully',
                  'success'
                )
              navigate(location?.state ? location.state : '/')
          })
           })
          
        })
        .catch(error => {
          console.error(error.message)
       setRegisterError(error.message);
        })

        }

          return (
          <div className=''>
            {/* <Helmet>
            <title>Starbelly | Sign Up</title>
            </Helmet> */}
          <div className="max-w-6xl mx-auto flex items-center justify-center  text-xl mb-6  ">
          <div className='hidden lg:grid'>
          <img className='' src="https://i.ibb.co/Lg5HBfR/Screenshot-2023-11-05-123412.png" alt="" />
          </div>
          <div className="flex w-full flex-col items-center justify-center px-6 py-8  md:h-screen lg:py-0">
          <div className="w-full   shadow-lg border border-black rounded-lg text-xl   md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
          Create an account
          </h1>
          
          <form onSubmit={handlesignupformSubmit} className="space-y-4 md:space-y-6">
          <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your Full Name</label>
          <input
          type="text"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="Full Name "
          required
          />
          </div>
          <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Photo Url</label>
          <input
          type="text"
          name="photoUrl"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="Paste Your image Url"
          required
          />
          </div>

          <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="name@company.com"
          required
          />
          </div>
          <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
          <div className="flex relative">
          <input
          type={showPassword ? "text" : "password"}
          name="password"

          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          required
          />
          <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 flex items-center pr-2 text-white  cursor-pointer">
          { showPassword ? <AiFillEyeInvisible className='text-black' ></AiFillEyeInvisible> : <AiFillEye className='text-black' ></AiFillEye>}</span>
          </div>
          </div>
          <div className="flex items-start">
          <div className="flex items-center h-5">
          <input
          id="terms"
          aria-describedby="terms"
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
          required
          />
          </div>
          <div className="ml-3 text-sm">
          <label htmlFor="terms" className=" text-black ">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 " >Terms and Conditions</a></label>
          </div>
          </div>
          <button
          
          className="w-full text-white bg-violet-400 hover:bg-white hover:text-[#1c6e5f] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
          Create an account
          </button>
          <p className="text-xl text-black ">
          Already have an account? <Link to = "/login"><a className="font-medium  text-primary-600 hover:underline dark:text-primary-500 text-blue-500">Login here</a></Link> 
          </p>
          </form>
          {
          registerError &&
          
          <p className="text-red-400">{registerError}</p>
           
          }
          <div className="text-center">
            <button onClick={handleGoogleSignup} className="btn bg-white text-blue-400"> <FcGoogle className='text-2xl' ></FcGoogle> Sign Up with Google</button>
          </div>
          </div>     
                </div>
          </div>
          </div>
          </div>)
};

export default SignUp;