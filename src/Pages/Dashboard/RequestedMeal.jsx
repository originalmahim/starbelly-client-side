import { useState, useEffect, useContext } from 'react';
import { AuthContex } from '../Providers/AuthProvider';


const RequestedMeal = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [sortByStatus, setSortByStatus] = useState('');
  const { user } = useContext(AuthContex);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/request/${user.email}`);
        const data = await response.json();

        // Convert single object to array
        const dataArray = Array.isArray(data) ? data : [data];

        const sortedData = sortByStatus
          ? dataArray.sort((a, b) => {
              if (a.status === sortByStatus && b.status !== sortByStatus) {
                return -1;
              } else if (a.status !== sortByStatus && b.status === sortByStatus) {
                return 1;
              } else {
                return a.status.localeCompare(b.status);
              }
            })
          : dataArray;

        setSearchResults(sortedData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [sortByStatus, user.email]);

  const handleSortByStatus = (status) => {
    setSortByStatus(status);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label className="mr-2">Sort by Status:</label>
        <select
          className="border p-2"
          onChange={(e) => handleSortByStatus(e.target.value)}
          value={sortByStatus}
        >
          <option value="">No Sorting</option>
          <option value="Delivered">Delivered</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Meal Title</th>
              <th className="py-2 px-4 border-b text-left">Likes</th>
              <th className="py-2 px-4 border-b text-left">Reviews</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchResults?.map((meal) => (
              <tr key={meal.id}>
                <td className="py-2 px-4 border-b">{meal.mealTitle}</td>
                <td className="py-2 px-4 border-b">{meal.likes}</td>
                <td className="py-2 px-4 border-b">{meal.reviews}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`text-${meal.status === 'Delivered' ? 'green' : 'yellow'}-500 text-center`}>
                    {meal.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedMeal;
