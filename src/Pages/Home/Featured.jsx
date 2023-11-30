import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa';

      const Featured = () => {
      const [foodData,setdata] = useState([])
      useEffect(() => {
      fetch('https://starbelly-eta.vercel.app/allmeals')
      .then((res) => res.json())
      .then((data) => {
      setdata(data);
      })
      .catch((error) => {
      console.error("Error fetching data:", error);
      });
      }, []);
      const [selectedCategory, setSelectedCategory] = useState("Dinner");

      const handlefoods = (category) => {
      setSelectedCategory(category);
      };

      return (
      <div className="max-w-7xl mx-auto px-3 lg:px-0 " style={{ overflowX: 'hidden' }}>
      <div className="text-center my-6">
      <h2 className="text-black mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
      Most popular dishes
      </h2>
      <p className="text-body-color text-base dark:text-dark-6">
      There are many variations of passages of Lorem Ipsum available
      but the majority have suffered alteration in some form.
      </p>
      </div>
      <ul className="flex flex-wrap justify-center mb-12 space-x-1">
      <li className="mb-1">
      <button
      onClick={() => handlefoods("Dinner")}
      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
      selectedCategory === "Dinner"
      ? "activeClasses bg-yellow-400 text-black"
      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-yellow-400 hover:text-black"
      }`}
      >
      Dinner
      </button>
      </li>
      <li className="mb-1">
      <button
      onClick={() => handlefoods("Lunch")}
      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
      selectedCategory === "Lunch"
      ? "activeClasses bg-yellow-400 text-black"
      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-yellow-400 hover:text-black"
      }`}
      >
      Lunch
      </button>
      </li>
      <li className="mb-1">
      <button
      onClick={() => handlefoods("Breakfast")}
      className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
      selectedCategory === "Breakfast"
      ? "activeClasses bg-yellow-400 text-black"
      : "inactiveClasses text-body-color dark:text-dark-6 hover:bg-yellow-400 hover:text-black"
      }`}
      >
      Breakfast
      </button>
      </li>
      </ul>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5">
      {foodData
      .filter((food) => selectedCategory === "Breakfast" || food.category === selectedCategory)
      .slice(0, 3)
      .map((food, index) => (
      <div key={index}>
      <PortfolioCard
      key={index}
      img={food.imageUrl}
      showCard={selectedCategory}
      category={food.category}
      title={food.title}
      price={food.price}
      id={food._id}
      />
      </div>
      ))}
      </div>
      <div className="flex items-center justify-center">
      <Link to= "/allmeals" >
      <button className="btn bg-yellow-400 text-black hover:bg-yellow-400">Show More</button>
      </Link>
      </div>
      </div>
      );
      };

      const PortfolioCard = ({ showCard, img, category, id, title, price }) => {
      return (
      <div
      className={`${
      showCard === "Breakfast" || showCard === category
      ? "block"
      : "hidden"
      }`}
      >
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">

      <img className="p-4 rounded-lg w-full h-96" src={img}  />
      <div className="px-5 pb-5">

      <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{title}</h5>

      <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
      {[...Array(4)].map((_, index) => (
      <FaStar key={index} className="w-4 h-4 text-yellow-300" />
      ))}
      <FaStar className="w-4 h-4 text-gray-600" />
      </div>
      </div>
      <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 ">${price}</span>
      <Link to={`/meal/${id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Details</Link>
      </div>
      </div>
      </div>
      </div>
      );
      };
  export default Featured;
