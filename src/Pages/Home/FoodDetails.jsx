import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from './../Providers/AuthProvider';
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const FoodDetails = () => {
  const {user} = useContext(AuthContex)
  const product = useLoaderData();
  const [open, setOpen] = useState("home");
  const [info,setInfo] = useState([])
  const handleTabOpen = (tabCategory) => {
    setOpen(tabCategory);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then((res) => res.json())
    .then((data) => {
      setInfo(data);
    })
    .catch((error) => {
    console.error("Error fetching data:", error);
    });
    }, [user?.email, info]);

    const handleMealRequest = async () => {
      const mealTitle = product?.title;
      const likes = product?.likes;
      const reviews = product?.reviews;
      const status = "Pending";
      const email = user.email;
      const name = user.displayName;
      const data = { mealTitle, likes, reviews, status, email, name };
    
      if (info.subscriptionStatus === "Bronze") {
        Swal.fire(
          'Update Your Plan',
          'You need to update the subscription plan to request a meal',
          'error'
        );
      } else {
        try {
          const response = await axios.post('http://localhost:5000/request', data);
    
          console.log(response.data);
          Swal.fire(
            'Meal Requested',
            'You have requested a new meal successfully',
            'success'
          );
        } catch (error) {
          console.error('Error adding meal:', error);
          Swal.fire(
            'Error',
            'An error occurred while requesting the meal',
            'error'
          );
        }
      }
    };

  return (
    <div>
      <Helmet>
          <title>Starbelly | Details</title>
          </Helmet>
      <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img src={product?.mealImage} className="w-full relative z-10" alt="" />
                <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">              
              <div className="lg:flex lg:flex-col">
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">$</span>
                  <span className="font-bold text-5xl leading-none align-baseline">{product?.price}</span>
                </div>
                <div className="inline-block align-bottom">
                  {product.price == 0 ? (
                    <button className="bg-blue-400 text-black rounded-full px-10 py-2 font-semibold">Not Available</button>
                  ) : (
                    <button onClick={handleMealRequest} className="bg-yellow-400 btn text-black rounded-full px-10 py-2 font-semibold">Meal request</button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <section className="py-20  lg:py-4">
            <div className="container">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mb-14 w-full">
                    <div className="flex flex-col flex-wrap rounded-lg border border-[#E4E4E4] px-4 py-3 dark:border-dark-3 sm:flex-row">
                      <a
                        onClick={() => handleTabOpen("home")}
                        className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
                          open === "home"
                            ? "bg-primary text-white"
                            : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                        }`}
                      >
                        overview
                      </a>
                      <a
                        onClick={() => handleTabOpen("Reviews")}
                        className={`cursor-pointer rounded-md px-4 py-3 text-sm font-medium md:text-base lg:px-6 ${
                          open === "Reviews"
                            ? "bg-primary text-white"
                            : "text-body-color hover:bg-primary hover:text-white dark:text-dark-6 dark:hover:text-white"
                        }`}
                      >
                        Reviews
                      </a>
                    </div>
                    <TabContent tabCategory="home" open={open}>
                      <div className="">
                        <div>
                          <h1 className="font-bold uppercase text-2xl mb-2">{product?.title}</h1>
                          <p className="text-xl font-medium text-yellow-400"> Distributor : {product?.mealDistributor}</p>
                          <p className="text-xl">Posted on: {product?.postTime}</p>
                        </div>
                        <div>

                      <h1 className="text-xl text-green-400">Meal Description:</h1>
                      <p className="text-xl mb-3">{product?.mealDescription}</p>
                      <h1 className="text-xl text-green-400">Ingredients:</h1>
                      <ol>
                      {product?.ingredients?.map((food) => (
                      <li key={food}>{food}</li>
                      ))}
                      </ol>

                        </div>
                      </div>
                    </TabContent>
                    <TabContent
                      tabCategory="Reviews"
                      open={open}
                    >
                    <div className="flex flex-col w-full">
                    <h2 className="text-3xl font-semibold text-left">Customer reviews</h2>
                    </div>
                    <div>
                    <ul>
                      <li>
                    <div className="container flex flex-col w-full  p-6 mx-auto divide-y border-2 my-2 rounded-md bg-white">
                    <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                    <div>
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full " />
                    </div>
                    <div>
                    <h4 className="font-bold text-black">Leroy Jenkins</h4>
                    <span className="text-xs text-black">2 days ago</span>
                    </div>
                    </div>
                    <div className="flex items-center space-x-2 text-yellow-500">
                    <FaStar></FaStar>
                    <span className="text-xl font-bold">4.5</span>
                    </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm text-black">
                    <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    <p>Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris cursus venenatis. Maecenas gravida urna vitae accumsan feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.</p>
                    </div>
                    </div>
                    </li>
                    </ul>
                    </div>
                    <div>
                    <div className="flex flex-col  p-8 shadow-sm rounded-xl lg:p-12 bg-white">
                    <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                    <span className="text-center">How was your experience?</span>
                    <div className="flex space-x-3">
                    <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    </button>
                    <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    </button>
                    <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    </button>
                    <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-yellow-500">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    </button>
                    <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 dark:text-gray-600">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    </button>
                    </div>
                    </div>
                    <div className="flex flex-col w-full">
                    <textarea rows="3" placeholder="Message..." className="p-4 rounded-md resize-none text-black border  border-black"></textarea>
                    <button type="button" className="py-4 my-8 font-semibold rounded-md bg-yellow-400 text-black">Leave feedback</button>
                    </div>
                    </div>
                    </div>
                    </div>
                    </TabContent>
                    <TabContent
                      details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod.

                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit mollitia nam eligendi reprehenderit reiciendis saepe laboriosam maiores voluptas. Quo, culpa amet fugiat ipsam sed quod hic, veritatis ducimus recusandae repellat quasi eaque, suscipit praesentium totam?"
                      tabCategory="team"
                      open={open}
                    />
                    <TabContent
                      details="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia nisi, doloribus nulla cumque molestias corporis eaque harum vero! Quas sit odit optio debitis nulla quisquam, dolorum quaerat animi iusto quod."
                      tabCategory="company"
                      open={open}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const TabContent = ({ open, tabCategory, children }) => {
  return (
    <div>
      <div
        className={`p-6 text-base leading-relaxed text-body-color  ${
          open === tabCategory ? "block" : "hidden"
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default FoodDetails;
