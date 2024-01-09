// Assuming you have a base URL for your API
const API_BASE_URL = 'http://localhost/api';

export const createDonorAccount = async (donorData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/donors/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donorData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You may handle the response data as needed
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error creating donor account:', error);
    throw error;
  }
};

export const makeDonation = async (amount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/donors/make-donation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any headers needed for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You may handle the response data as needed
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error making donation:', error);
    throw error;
  }
};

export const updateDonorPassword = async (newPassword) => {
  try {
    const response = await fetch(`${API_BASE_URL}/donors/update-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // Include any headers needed for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ newPassword }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You may handle the response data as needed
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error updating donor password:', error);
    throw error;
  }
};
