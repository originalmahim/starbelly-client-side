
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AllReviews = () => {
  const [sortBy, setSortBy] = useState('likes'); // Default sorting by likes
  const [sortOrder, setSortOrder] = useState('desc'); // Default sorting order

  const { data: meal, refetch } = useQuery({
    queryKey: ['meal'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/allmeals');
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

  const handleDelete = (info) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `${info.title} will be deleted permanently`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allmeals/${info._id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            if (res.deletedCount > 0) {
              refetch();
              Swal.fire({
                icon: 'success',
                title: `${info.title} deleted permanently`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
          <title>Starbelly | All Reviews</title>
          </Helmet>
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
                <th
                  className="py-2 px-4 border-b text-left cursor-pointer"
                  onClick={() => handleSort('reviews')}
                >
                  Reviews {sortBy === 'reviews' && sortOrder === 'asc' ? '▲' : '▼'}
                </th>
                <th className="py-2 px-4 border-b text-left">Delete</th>
                <th className="py-2 px-4 border-b text-left">View Meal</th>
              </tr>
            </thead>
            <tbody>
              {sortedMeals?.map((meal) => (
                <tr key={meal._id}>
                  <td className="py-2 px-4 border-b">{meal.title}</td>
                  <td className="py-2 px-4 border-b">{meal.likes}</td>
                  <td className="py-2 px-4 border-b">{meal.reviews}</td>
                  <td className="py-2 px-4 border-b">
                    <button
                      onClick={() => handleDelete(meal)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <Link to={`/meal/${meal?._id}`}>
                      <button className="bg-green-500 text-white px-3 py-1 rounded">View</button>
                    </Link>
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

export default AllReviews;