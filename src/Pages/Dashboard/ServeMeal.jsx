import {  useEffect } from 'react';

const ServeMeal = () => {

  useEffect(() => {
    const fetchData = async () => {
              const response = await fetch(`http://localhost:5000/request`);
              const data = await response.json();
      
    };

    fetchData();
  }, []);

  const handleSortByStatus = (status) => {
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
              <th className="py-2 px-4 border-b text-left">Name</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchResults?.map((meal) => (
              <tr key={meal.id}>
                <td className="py-2 px-4 border-b">{meal?.mealTitle}</td>
                <td className="py-2 px-4 border-b">{meal?.name}</td>
                <td className="py-2 px-4 border-b">{meal?.email}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`text-${meal?.status === 'Delivered' ? 'green' : 'yellow'}-500 text-center`}>
                    {meal.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Serve</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServeMeal;
