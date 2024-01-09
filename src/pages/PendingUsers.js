// Example: pages/PendingUsers.js
import React from 'react';

const PendingUsers = ({ pendingUsers, handleApproveUser, handleRejectUser }) => {
  return (
    <div>
      <h3>Pending Users</h3>
      <ul>
        {pendingUsers.map((user) => (
          <li key={user.id}>
            {user.fname} {user.lname} - {user.email}
            <button onClick={() => handleApproveUser(user.id)}>Approve</button>
            <button onClick={() => handleRejectUser(user.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingUsers;
