// import { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet';

const Login = () => {
//   const {LogIn} = useContext(AuthContex)
//   const location = useLocation()
//   const navigate = useNavigate()

//   const auth = getAuth(app);
//   const provider = new GoogleAuthProvider();

//   const [loginError,setLoginError] = useState('')
   
//   const handleGoogleSignup = () => {
//     signInWithPopup(auth,provider)
//     .then(() => {
//       Swal.fire(
//         'Loged In',
//         'You have Loged In successfully',
//           'success'
//       )
//        navigate(location?.state ? location.state : '/')
//      })
//  }

 const handleLogin = e => {
  e.preventDefault()
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
//   setLoginError('')
//   LogIn(email,password)
//   .then(() => {
//     Swal.fire(
//       'Loged In',
//       'You have Loged In successfully',
//         'success'
//       )
//       navigate(location?.state ? location.state : '/')
//   })
//   .catch(error => {
//     setLoginError(error.message)
//   })
 }
  return (
    <div className="bg-white">
      {/* <Helmet>
      <title>Career X | Login</title>
      </Helmet> */}
      <div className="flex justify-around items-center max-w-6xl mx-auto lg:my-20">
        <div className="hidden lg:flex">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/005/879/539/small_2x/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" />
        </div>
        <div className="w-full my-4 max-w-md p-4 rounded-md shadow border-none">
          <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
          <p className="text-sm text-center dark:text-gray-400">
            Don't have an account?
            <Link to= '/signUp' className="focus:underline text-violet-400 font-bold ml-1 hover:underline">
              Sign up
            </Link>
          </p>
          <div className="my-6 space-y-4">
            <button
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri"
            >
              <FcGoogle className="text-3xl " />
              <p className='text-xl'>Login with Google</p>
            </button>
          </div>
          <div className="flex items-center justify-center w-full my-4">
            <p className="px-3 ">OR</p>
          </div>
          {/* { loginError &&
            <div className="flex items-center justify-center w-full">
            <p className="px-3 text-red-500 ">{loginError}</p>
          </div>
          } */}
          <form  className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md focus:border-violet-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Password</label>
                  <a className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="*****"
                  className="w-full px-3 py-2 border rounded-md focus:border-violet-400"
                />
              </div>
            </div>
            <input type="submit" className="btn w-full px-8 py-3 font-semibold rounded-md text-white hover:text-black bg-violet-400" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;