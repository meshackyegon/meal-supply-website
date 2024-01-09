// src/services/authService.js

const users = {
    admin: { username: 'admin', password: 'admin123', role: 'admin' },
    donor: { username: 'donor', password: 'donor123', role: 'donor' },
    schoolAdmin: { username: 'schooladmin', password: 'schooladmin123', role: 'schoolAdmin' },
    student: { username: 'student', password: 'student123', role: 'student', approved: false },
  };
  
  const login = (username, password) => {
    return new Promise((resolve, reject) => {
      const user = users[username];
  
      if (user && user.password === password) {
        resolve({ username, role: user.role, approved: user.approved });
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  };
  
  export { login };
  