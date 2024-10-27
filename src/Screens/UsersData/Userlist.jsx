import { faUser, faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import loader from '../../images/loader1.svg';


function Userlist() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const users = await axios.get("https://63a9bccb7d7edb3ae616b639.mockapi.io/users");
      setUserList(users.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this user?");
      if (confirmDelete) {
        await axios.delete(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${id}`);
        getUsers(); 
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">User List</h1>
        <Link to="/portal/create-user" className="inline-flex items-center px-4 py-2 bg-deeppink text-white bg-pink-700 rounded-lg shadow-md hover:bg-deeppink-dark transition">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Create User
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200">
          <h6 className="text-lg font-medium text-gray-700">User Data</h6>
        </div>
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="flex justify-center items-center p-4">
              <img src={loader} alt="Loading" />
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.city}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.state}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.country}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link to={`/portal/user-view/${user.id}`} className="text-blue-600 hover:text-blue-900 mr-2">
                        <FontAwesomeIcon icon={faEye} />
                      </Link>
                      <Link to={`/portal/user-edit/${user.id}`} className="text-yellow-600 hover:text-yellow-900 mr-2">
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                      <button onClick={() => handleDelete(user.id)} className="text-red-600 hover:text-red-900">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Userlist;
