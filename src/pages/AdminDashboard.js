// Example: pages/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import PendingUsers from './PendingUsers';
import TransactionManagement from './TransactionManagement';
import UserManagement from './UserManagement';
import UpdatePassword from './UpdatePassword';
import { getAllUsers, approveUser, rejectUser, getPendingUsers } from '../services/adminService';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [pendingUsers, setPendingUsers] = useState([]);

  useEffect(() => {
    // Fetch and set users when component mounts
    const fetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    };

    // Fetch and set pending users when component mounts
    const fetchPendingUsers = async () => {
      const pendingUsersData = await getPendingUsers();
      setPendingUsers(pendingUsersData);
    };

    fetchUsers();
    fetchPendingUsers();
  }, []);

  const handleApproveUser = async (userId) => {
    await approveUser(userId);
    // Update the users list after approval
    const updatedUsers = await getAllUsers();
    setUsers(updatedUsers);

    // Update the pending users list after approval
    const updatedPendingUsers = await getPendingUsers();
    setPendingUsers(updatedPendingUsers);
  };

  const handleRejectUser = async (userId) => {
    await rejectUser(userId);
    // Update the pending users list after rejection
    const updatedPendingUsers = await getPendingUsers();
    setPendingUsers(updatedPendingUsers);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Display Pending Users */}
      <PendingUsers
        pendingUsers={pendingUsers}
        handleApproveUser={handleApproveUser}
        handleRejectUser={handleRejectUser}
      />

      {/* Display Transaction Management */}
      <TransactionManagement />

      {/* Display User Management */}
      <UserManagement users={users} />

      {/* Display Update Password */}
      <UpdatePassword />
    </div>
  );
};

export default AdminDashboard;
;
