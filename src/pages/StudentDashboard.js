// src/pages/StudentDashboard.js

// import React from 'react';

// const StudentDashboard = () => {
//   return (
//     <div>
//       <h2>Student Dashboard Page</h2>
//       {/* Add your student dashboard content or components here */}
//     </div>
//   );
// };

// export default StudentDashboard;
// Example: pages/StudentDashboard.js
import React, { useState, useEffect } from 'react';
import { getStudentData, requestMoney, transferMoney, reportLostDevice } from '../services/studentService';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState({
    studentId: '',
    fname: '',
    lname: '',
    email: '',
    availableBalance: 0,
    studentCardBalance: 0,
    amountSpent: 0,
  });

  const [requestAmount, setRequestAmount] = useState(0);
  const [transferPeerId, setTransferPeerId] = useState('');
  const [transferAmount, setTransferAmount] = useState(0);

  useEffect(() => {
    // Fetch and set student data when component mounts
    const fetchStudentData = async () => {
      const data = await getStudentData();
      setStudentData(data);
    };

    fetchStudentData();
  }, []);

  const handleRequestMoney = async () => {
    await requestMoney(requestAmount);
    // Update the student data after requesting money
    const updatedStudentData = await getStudentData();
    setStudentData(updatedStudentData);
    // Notify the student (locally or via email)
    // Implement notification logic as needed
  };

  const handleTransferMoney = async () => {
    await transferMoney(transferPeerId, transferAmount);
    // Update the student data after transferring money
    const updatedStudentData = await getStudentData();
    setStudentData(updatedStudentData);
    // Notify the student (locally or via email)
    // Implement notification logic as needed
  };

  const handleReportLostDevice = async () => {
    await reportLostDevice();
    // Notify the student (locally or via email)
    // Implement notification logic as needed
  };

  return (
    <div>
      <h2>Student Dashboard</h2>

      {/* Display Student Data */}
      <div>
        <h3>Student Data</h3>
        <p>Student ID: {studentData.studentId}</p>
        <p>Name: {studentData.fname} {studentData.lname}</p>
        <p>Email: {studentData.email}</p>
        <p>Available Balance: {studentData.availableBalance}</p>
        <p>Student Card Balance: {studentData.studentCardBalance}</p>
        <p>Amount Spent: {studentData.amountSpent}</p>
      </div>

      {/* Request Money Form */}
      <div>
        <h3>Request Money</h3>
        <form>
          <label htmlFor="requestAmount">Amount:</label>
          <input
            type="number"
            id="requestAmount"
            name="requestAmount"
            value={requestAmount}
            onChange={(e) => setRequestAmount(e.target.value)}
            required
          />
          <button type="button" onClick={handleRequestMoney}>
            Request Money
          </button>
        </form>
      </div>

      {/* Transfer Money Form */}
      <div>
        <h3>Transfer Money</h3>
        <form>
          <label htmlFor="transferPeerId">Peer Student ID:</label>
          <input
            type="text"
            id="transferPeerId"
            name="transferPeerId"
            value={transferPeerId}
            onChange={(e) => setTransferPeerId(e.target.value)}
            required
          />

          <label htmlFor="transferAmount">Amount:</label>
          <input
            type="number"
            id="transferAmount"
            name="transferAmount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
            required
          />

          <button type="button" onClick={handleTransferMoney}>
            Transfer Money
          </button>
        </form>
      </div>

      {/* Report Lost Device Button */}
      <div>
        <h3>Report Lost Device</h3>
        <button type="button" onClick={handleReportLostDevice}>
          Report Lost Device
        </button>
      </div>
    </div>
  );
};

export default StudentDashboard;
