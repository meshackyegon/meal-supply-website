// Example: pages/UserManagement.js
import React from 'react';

const UserManagement = ({ users }) => {
  return (
    <div>
      <h3>User Management</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.fname} {user.lname} - {user.email}
            {/* Add buttons for CRUD operations on users */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;

