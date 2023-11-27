import  {  useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
const ManageUser = () => {

  const [searchTerm, setSearchTerm] = useState('');

  
  const { data, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/users');
      return res.data;
    },
  });

  const handleMakeAdmin = info => {
    Swal.fire({
    title: 'Are you sure?',
    text: `${info.name} will be promoted to Admin role !`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Make Admin'
    }).then((result) => {
    if (result.isConfirmed) {
    axios.patch(`http://localhost:5000/users/${info?.email}/${info._id}`)
    .then(res =>{
    console.log(res.data)
    if(res.data.modifiedCount > 0){
    refetch();
    Swal.fire({
    icon: "success",
    title: `${info.name} is an Admin Now!`,
    showConfirmButton: false,
    timer: 1500
    });
    }
    })
    }
    })
    }


  const filteredUsers = Array.isArray(data)
    ? data.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email"
          className="p-2 border border-gray-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">User Name</th>
              <th className="py-2 px-4 border-b text-left">User Email</th>
              <th className="py-2 px-4 border-b text-left">Role</th>
              <th className="py-2 px-4 border-b text-left">Subscription Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                  {user.role == 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="bg-blue-500 text-white px-3 py-1 rounded">Make Admin</button>}
                </td>
                <td className="py-2 px-4 border-b">
                  <span className="text-green-500 text-center">{user.subscriptionStatus}</span>
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