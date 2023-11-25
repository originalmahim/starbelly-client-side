import { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from 'react-icons/fa'; 'react-icons/fa';
// import { useEffect } from "react";

const Featured = () => {

      const foodData = [
        {
          "category": "Breakfast",
          "title": "Classic Pancakes",
          "imageUrl": "pancakes.jpg",
          "rating": 4.8,
          "price": "8.99",
          "mealImage": "pancakes_meal.jpg",
          "mealDistributor": "Pancake Palace",
          "mealDescription": "Delicious classic pancakes served with maple syrup.",
          "ingredients": ["Flour", "Milk", "Eggs", "Maple Syrup"],
          "postTime": "2023-11-25T08:00:00"
          
        },
        {
        "category": "Breakfast",
        "title": "Healthy Fruit Parfait",
        "imageUrl": "parfait.jpg",
        "rating": 4.5,
        "price": "6.99",
        "mealImage": "fruit_parfait.jpg",
        "mealDistributor": "Fresh Start",
        "mealDescription": "A refreshing fruit parfait with yogurt and granola.",
        "ingredients": ["Yogurt", "Mixed Berries", "Granola", "Honey"],
        "postTime": "2023-11-25T09:30:00"
        },
        { "category": "Breakfast",
        "title": "Avocado Toast",
        "imageUrl": "avocado_toast.jpg",
        "rating": 4.7,
        "price": "10.99",
        "mealImage": "avocado_toast_meal.jpg",
        "mealDistributor": "Green Eats",
        "mealDescription": "Sliced avocado on whole-grain toast with poached eggs.",
        "ingredients": ["Avocado", "Whole-Grain Bread", "Eggs", "Salt"],
        "postTime": "2023-11-25T07:30:00"
                },
        { "category": "Dinner",
        "title": "Spaghetti Bolognese",
        "imageUrl": "spaghetti.jpg",
        "rating": 4.7,
        "price": "14.99",
        "mealImage": "spaghetti_meal.jpg",
        "mealDistributor": "Italian Delights",
        "mealDescription": "Classic spaghetti with savory Bolognese sauce and Parmesan cheese.",
        "ingredients": ["Ground Beef", "Tomato Sauce", "Spaghetti", "Parmesan Cheese"],
        "postTime": "2023-11-25T18:00:00"
        },
        { "category": "Dinner",
        "title": "Teriyaki Salmon",
        "imageUrl": "teriyaki_salmon.jpg",
        "rating": 4.9,
        "price": "17.99",
        "mealImage": "teriyaki_salmon_meal.jpg",
        "mealDistributor": "Asian Fusion",
        "mealDescription": "Flavorful teriyaki-glazed salmon served with steamed rice and vegetables.",
        "ingredients": ["Salmon Fillet", "Teriyaki Sauce", "Rice", "Broccoli"],
        "postTime": "2023-11-25T19:30:00"
        },
        { "category": "Dinner",
        "title": "Vegetarian Lasagna",
        "imageUrl": "vegetarian_lasagna.jpg",
        "rating": 4.6,
        "price": "13.99",
        "mealImage": "vegetarian_lasagna_meal.jpg",
        "mealDistributor": "VegeDelight",
        "mealDescription": "Layers of lasagna with rich tomato sauce, vegetables, and melted cheese.",
        "ingredients": ["Lasagna Noodles", "Tomato Sauce", "Vegetables", "Mozzarella"],
        "postTime": "2023-11-25T20:45:00"
        },
        { "category": "Lunch",
          "title": "Grilled Chicken Salad",
          "imageUrl": "salad.jpg",
          "rating": 4.5,
          "price": "12.99",
          "mealImage": "chicken_salad.jpg",
          "mealDistributor": "Green Bites",
          "mealDescription": "Healthy grilled chicken salad with fresh vegetables and vinaigrette.",
          "ingredients": ["Chicken Breast", "Mixed Greens", "Tomatoes", "Balsamic Vinaigrette"],
          "postTime": "2023-11-25T12:30:00"
        },
        { "category": "Lunch",
          "title": "Quinoa Bowl",
          "imageUrl": "quinoa_bowl.jpg",
          "rating": 4.6,
          "price": "11.99",
          "mealImage": "quinoa_bowl_meal.jpg",
          "mealDistributor": "Superfood Haven",
          "mealDescription": "Nutrient-packed quinoa bowl with roasted vegetables and tahini sauce.",
          "ingredients": ["Quinoa", "Roasted Vegetables", "Tahini", "Chickpeas"],
          "postTime": "2023-11-25T13:45:00"
        },
        { "category": "Lunch",
          "title": "Caprese Sandwich",
          "imageUrl": "caprese_sandwich.jpg",
          "rating": 4.4,
          "price": "9.99",
          "mealImage": "caprese_sandwich_meal.jpg",
          "mealDistributor": "Mediterranean Deli",
          "mealDescription": "A classic Caprese sandwich with fresh mozzarella, tomatoes, and basil.",
          "ingredients": ["Ciabatta Bread", "Mozzarella", "Tomatoes", "Basil"],
          "postTime": "2023-11-25T14:15:00"
        }
      ]
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
                showCard={selectedCategory}
                category={food.category}
                title={food.title}
                price={food.price}
              />
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to= "/alljobs" >
        <button className="btn bg-violet-500 text-white hover:bg-violet-400">Show More</button>
        </Link>
      </div>
    </div>
  );
};

const PortfolioCard = ({ showCard, category, title, price }) => {
  return (
    <div
      className={`${
        showCard === "Breakfast" || showCard === category
          ? "block"
          : "hidden"
      }`}
    >
       <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    
    <img className="p-4 rounded-lg" src="https://starbelly.windstripedesign.ro/images/menu/3.jpg"  />
  <div className="px-5 pb-5">
    
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{title} and catagory is : {category}</h5>

    <div className="flex items-center mt-2.5 mb-5">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        {[...Array(4)].map((_, index) => (
          <FaStar key={index} className="w-4 h-4 text-yellow-300" />
        ))}
        <FaStar className="w-4 h-4 text-gray-200 dark:text-gray-600" />
      </div>
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 ">${price}</span>
      <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Details</Link>
    </div>
  </div>
</div>
  </div>
);

};

export default Featured;
