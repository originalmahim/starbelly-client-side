import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllMeals = () => {
  const { data: meal, isLoading, isError, refetch } = useQuery({
    queryKey: ['meal'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/allmeals');
      return res.data;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  const handleDelete = (info) => {
          Swal.fire({
                    title: 'Are you sure?',
                    text: `${info.title} will be Delete Permanently`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Delete',
                  }).then((result) => {
                    if (result.isConfirmed) {
                    fetch(`http://localhost:5000/allmeals/${info._id}`, { method: 'DELETE'})
                    .then((res) => res.json())
                      .then((res) => {
                     console.log(res);
                    if (res.deletedCount > 0) {
                    refetch()
                          Swal.fire({
                            icon: 'success',
                            title: `${info.title}  Deleted Permanently`,
                            showConfirmButton: false,
                            timer: 1500,
                          });
                        }
                      });
                    }
                  });
  }

  return (
    <div className="container mx-auto p-4">
          <Helmet>
          <title>Starbelly | All Meals</title>
          </Helmet>
      <div className="overflow-x-auto">
        <div className="table-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
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
                    <button onClick={ () => handleDelete(meal)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
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

export default AllMeals;

