// src/pages/DonorDashboard.js

// import React from 'react';

// const DonorDashboard = () => {
//   return (
//     <div>
//       <h2>Donor Dashboard Page</h2>
//       {/* Add your donor dashboard content or components here */}
//     </div>
//   );
// };

// export default DonorDashboard;
// Example: pages/DonorDashboard.js
import React, { useState, useEffect } from 'react';
import { getDonorTransactions, createDonation } from '../services/donorService';

const DonorDashboard = () => {
  const [donorTransactions, setDonorTransactions] = useState([]);

  useEffect(() => {
    // Fetch and set donor transactions when component mounts
    const fetchDonorTransactions = async () => {
      const transactionsData = await getDonorTransactions();
      setDonorTransactions(transactionsData);
    };

    fetchDonorTransactions();
  }, []);

  const handleMakeDonation = async (amount) => {
    await createDonation(amount);
    // Update the donor transactions list after making a donation
    const updatedTransactions = await getDonorTransactions();
    setDonorTransactions(updatedTransactions);
    // Notify the donor (locally or via email)
    // Implement notification logic as needed
  };

  return (
    <div>
      <h2>Donor Dashboard</h2>

      {/* Display Donor Transactions */}
      <div>
        <h3>Donor Transactions</h3>
        <ul>
          {donorTransactions.map((transaction) => (
            <li key={transaction.id}>
              {transaction.amount} - {transaction.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Make Donation Form */}
      <div>
        <h3>Make Donation</h3>
        <form onSubmit={(e) => handleMakeDonation(e.target.amount.value)}>
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" name="amount" required />
          <button type="submit">Make Donation</button>
        </form>
      </div>
    </div>
  );
};

export default DonorDashboard;

