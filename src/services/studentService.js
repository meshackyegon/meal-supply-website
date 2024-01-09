// Assuming you have a base URL for your API
const API_BASE_URL = 'http://localhost/api';

export const getStudentData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/students/me`, {
      method: 'GET',
      headers: {
        // Include any headers needed for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error getting student data:', error);
    throw error;
  }
};

export const requestMoney = async (amount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students/request-money`, {
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
    console.error('Error requesting money:', error);
    throw error;
  }
};

export const transferMoney = async (peerId, amount) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students/transfer-money`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any headers needed for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify({ peerId, amount }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You may handle the response data as needed
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error transferring money:', error);
    throw error;
  }
};

export const reportLostDevice = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/students/report-lost-device`, {
      method: 'POST',
      headers: {
        // Include any headers needed for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You may handle the response data as needed
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error reporting lost device:', error);
    throw error;
  }
};
