// import React, { useEffect, useState } from 'react';
// import { userlistAPI } from '../services/allAPI';

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await userlistAPI();
//         console.log("API Response:", response);
//         if (response?.data?.allUsers) {
//           setUsers(response.data.allUsers);
//         } else {
//           setError("No users found");
//         }
//       } catch (err) {
//         console.error("Error fetching users:", err);
//         setError("Failed to fetch users");
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="container mt-4">
//       <h2>User List</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {users.length > 0 ? (
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th> 
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index + 1}</td>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                   <td>{user.status}</td>
//                   <td></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };

// export default AdminUserManagement;

// import React, { useEffect, useState } from 'react';
// import { userlistAPI, usereditAPI } from '../services/allAPI';

// const AdminUserManagement = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = async () => {
//     try {
//       const response = await userlistAPI();
//       console.log("API Response:", response);
//       if (response?.data?.allUsers) {
//         setUsers(response.data.allUsers);
//       } else {
//         setError("No users found");
//       }
//     } catch (err) {
//       console.error("Error fetching users:", err);
//       setError("Failed to fetch users");
//     }
//   };

//   const handleUserStatusChange = async (userId, currentStatus) => {
//     const newStatus = currentStatus === "inactive" ? "active" : "inactive";

//     try {
//       await usereditAPI(userId, { status: newStatus });
//       setUsers((prevUsers) =>
//         prevUsers.map((user) =>
//           user._id === userId ? { ...user, status: newStatus } : user
//         )
//       );
//     } catch (error) {
//       console.error("Error updating user status:", error);
//       setError("Failed to update user status");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2>User List</h2>
//       {error && <p className="text-danger">{error}</p>}
//       {users.length > 0 ? (
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th> 
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={user._id}>
//                 <td>{index + 1}</td>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.email}</td>
//                 <td>{user.status}</td>
//                 <td>
//                   <button
//                     className={`btn ${user.status === "inactive" ? "btn-success" : "btn-danger"}`}
//                     onClick={() => handleUserStatusChange(user._id, user.status)}
//                   >
//                     {user.status === "inactive" ? "Activate" : "Deactivate"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No users found</p>
//       )}
//     </div>
//   );
// };

// export default AdminUserManagement;


import React, { useEffect, useState } from 'react';
import { userlistAPI, usereditAPI } from '../services/allAPI';

const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await userlistAPI();
      console.log("API Response:", response);
      if (response?.data?.allUsers) {
        setUsers(response.data.allUsers);
      } else {
        setError("No users found");
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users");
    }
  };

  const handleUserStatusChange = async (userId, currentStatus) => {
    const newStatus = currentStatus === "inactive" ? "active" : "inactive";

    try {
      await usereditAPI(userId, { status: newStatus });
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === userId ? { ...user, status: newStatus } : user
        )
      );
    } catch (error) {
      console.error("Error updating user status:", error);
      setError("Failed to update user status");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className='text-warning mb-5'>User Management</h2>
      {error && <p className="text-danger">{error}</p>}
      {users.length > 0 ? (
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th> 
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    className={`btn ${user.status === "inactive" ? "btn-success" : "btn-danger"}`}
                    onClick={() => handleUserStatusChange(user._id, user.status)}
                  >
                    {user.status === "inactive" ? "Unblock" : "Block"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default AdminUserManagement;
