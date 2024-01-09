// Assuming you have a base URL for your API
const API_BASE_URL = 'http://localhost/api';

export const createStudentAccount = async (studentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/school-admin/create-student-account`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any headers needed for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You may handle the response data as needed
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error creating student account:', error);
    throw error;
  }
};

export const manageStudentDetails = async (studentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/school-admin/manage-student-details`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any headers needed for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You may handle the response data as needed
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error managing student details:', error);
    throw error;
  }
};

export const deleteStudent = async (studentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/school-admin/delete-student/${studentId}`, {
      method: 'DELETE',
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
    console.error('Error deleting student:', error);
    throw error;
  }
};

export const viewStudentDetails = async (studentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/school-admin/view-student-details/${studentId}`, {
      method: 'GET',
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
    console.error('Error viewing student details:', error);
    throw error;
  }
};

export const addStudent = async (studentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/school-admin/add-student`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any headers needed for authentication
        // 'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(studentData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // You may handle the response data as needed
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};
