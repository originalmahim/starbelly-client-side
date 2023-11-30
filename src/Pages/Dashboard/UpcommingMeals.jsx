import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpcommingMeals = () => {
  const [sortBy, setSortBy] = useState('likes'); 
  const [sortOrder, setSortOrder] = useState('desc'); 

  const { data: meal, refetch } = useQuery({
    queryKey: ['meal'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/upcoming');
      return res.data;
    },
  });

  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      // If already sorted by the selected criteria, toggle the order
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      // If sorting by a new criteria, set the criteria and default to ascending order
      setSortBy(criteria);
      setSortOrder('asc');
    }
  };

  const sortedMeals = meal?.sort((a, b) => {
    const aValue = sortBy === 'likes' ? a.likes : a.reviews;
    const bValue = sortBy === 'likes' ? b.likes : b.reviews;

    if (sortOrder === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  const handlePublish = (info) => {
    if (info.likes > 10) {
          Swal.fire({
          icon: 'success',
          title: `${info?.title} Published to Meal Menu`,
          showConfirmButton: false,
          timer: 1500,
          });  
    }
    else{
          Swal.fire({
          icon: 'error',
          title: `${info?.title} Need 10 Likes For Publish`,
          showConfirmButton: false,
          timer: 1500,
          });    
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <div className="table-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th
                  className="py-2 px-4 border-b text-left cursor-pointer"
                  onClick={() => handleSort('title')}
                >
                  Meal Title
                </th>
                <th
                  className="py-2 px-4 border-b text-left cursor-pointer"
                  onClick={() => handleSort('likes')}
                >
                  Likes {sortBy === 'likes' && sortOrder === 'asc' ? '▲' : '▼'}
                </th>
                <th className="py-2 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedMeals?.map((meal) => (
                <tr key={meal._id}>
                  <td className="py-2 px-4 border-b">{meal.title}</td>
                  <td className="py-2 px-4 border-b">{meal.likes}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handlePublish(meal)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Publish
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpcommingMeals;
// ;