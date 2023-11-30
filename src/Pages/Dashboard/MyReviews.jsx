import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const MyReviews = () => {
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await fetch('/reviews.json'); 
        const data = await response.json();
        setUserReviews(data);
      } catch (error) {
        console.error('Error fetching user reviews:', error);
      }
    };

    fetchUserReviews();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Helmet>
          <title>Starbelly | My Reviews</title>
          </Helmet>
      <h1 className="text-2xl font-bold mb-4">My Reviews</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Meal Title</th>
              <th className="py-2 px-4 border-b text-left">Likes</th>
              <th className="py-2 px-4 border-b text-left">Reviews</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userReviews.map((review) => (
              <tr key={review.id}>
                <td className="py-2 px-4 border-b">{review.mealTitle}</td>
                <td className="py-2 px-4 border-b">{review.likes}</td>
                <td className="py-2 px-4 border-b">{review.reviewsCount}</td>
                <td className="py-2 px-4 border-b items-center">
                  <button className="bg-blue-500 text-white px-3 py-1 mr-2 rounded">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 mr-2 rounded">Delete</button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded">View Meal</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
