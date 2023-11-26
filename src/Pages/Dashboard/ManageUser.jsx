

import  { useState, useEffect } from 'react';

const ManageUser = () => {
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/user.json');
        const data = await response.json();
        setUserData(data);
        setSearchResults(data); 
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const filteredResults = userData.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          Search by username or email:
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            placeholder='john deo'
            className="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full pl-3 rounded-md sm:text-sm border-black border-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="button"
            className="ml-2 bg-blue-500 text-white px-3 py-1 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">User Name</th>
              <th className="py-2 px-4 border-b text-left">User Email</th>
              <th className="py-2 px-4 border-b text-left">Make Admin</th>
              <th className="py-2 px-4 border-b text-left">Subscription Status</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Make Admin</button>
                </td>
                <td className="py-2 px-4 border-b">
                  <span className="text-green-500">{user.subscriptionStatus}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
