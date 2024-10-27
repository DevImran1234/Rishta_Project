import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../reduxToolkit/userSlice";
import loader from '../../images/loader1.svg';

function UserView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">User View - ID: {id}</h1>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-gray-200 bg-gray-100">
          <h2 className="text-lg font-medium text-gray-700">User Details</h2>
        </div>
        <div className="p-4">
          {isLoading ? (
            <div className="flex justify-center items-center">
              <img src={loader} alt="Loading" className="w-16 h-16" />
            </div>
          ) : (
            user && (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Id</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.username}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.city}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.state}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.country}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default UserView;
