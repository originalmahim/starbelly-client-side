import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllMeals = () => {
          const { data: meal, isLoading, isError } = useQuery({
                    queryKey: ['meal'],
                    queryFn: async () => {
                      const res = await axios.get('http://localhost:5000/allmeals');
                      return res.data;
                    },
                  });
                
                  // Check if data is still loading or if an error occurred
                  if (isLoading) {
                    return <p>Loading...</p>;
                  }
                
                  if (isError) {
                    return <p>Error loading data</p>;
                  }
                
                  // Log meal data to the console
                  console.log('Meal Data:', meal);

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Meal Title</th>
              <th className="py-2 px-4 border-b text-left">Likes</th>
              <th className="py-2 px-4 border-b text-left">Reviews</th>
              <th className="py-2 px-4 border-b text-left">Distributor Name</th>
              <th className="py-2 px-4 border-b text-left">Distributor Email</th>
              <th className="py-2 px-4 border-b text-left">Update</th>
              <th className="py-2 px-4 border-b text-left">Delete</th>
              <th className="py-2 px-4 border-b text-left">View Meal</th>
            </tr>
          </thead>
          <tbody>
            {meal?.map((meal) => (
              <tr key={meal._id}>
                <td className="py-2 px-4 border-b">{meal.title}</td>
                <td className="py-2 px-4 border-b">{meal.likes}</td>
                <td className="py-2 px-4 border-b">{meal.reviews}</td>
                <td className="py-2 px-4 border-b">{meal?.mealDistributor}</td>
                <td className="py-2 px-4 border-b">{meal?.email ? meal?.email : 'admin@gmail.com'}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
                <td className="py-2 px-4 border-b">
                    <Link to={`/meal/${meal?._id}`} >
                  <button className="bg-green-500 text-white px-3 py-1 rounded">View</button>
                    </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMeals;
