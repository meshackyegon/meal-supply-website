// src/pages/SchoolAdminDashboard.js

// import React from 'react';

// const SchoolAdminDashboard = () => {
//   return (
//     <div>
//       <h2>School Admin Dashboard Page</h2>
//       {/* Add your school admin dashboard content or components here */}
//     </div>
//   );
// };

// export default SchoolAdminDashboard;
// Example: pages/SchoolAdminDashboard.js
import React, { useState, useEffect } from 'react';
import { getAllStudents, createStudent, deleteStudent } from '../services/schoolAdminService';

const SchoolAdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [newStudentData, setNewStudentData] = useState({
    fname: '',
    lname: '',
    studentId: '',
    email: '',
    contact: '',
  });

  useEffect(() => {
    // Fetch and set students when component mounts
    const fetchStudents = async () => {
      const studentsData = await getAllStudents();
      setStudents(studentsData);
    };

    fetchStudents();
  }, []);

  const handleCreateStudent = async () => {
    await createStudent(newStudentData);
    // Update the students list after creating a new student
    const updatedStudents = await getAllStudents();
    setStudents(updatedStudents);
  };

  const handleDeleteStudent = async (studentId) => {
    await deleteStudent(studentId);
    // Update the students list after deleting a student
    const updatedStudents = await getAllStudents();
    setStudents(updatedStudents);
  };

  return (
    <div>
      <h2>School Admin Dashboard</h2>

      {/* Display Students List */}
      <div>
        <h3>Students List</h3>
        <ul>
          {students.map((student) => (
            <li key={student.studentId}>
              {student.fname} {student.lname} - {student.email} - {student.contact}
              <button onClick={() => handleDeleteStudent(student.studentId)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Add Student Form */}
      <div>
        <h3>Add Student</h3>
        <form>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={newStudentData.fname}
            onChange={(e) => setNewStudentData({ ...newStudentData, fname: e.target.value })}
            required
          />

          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={newStudentData.lname}
            onChange={(e) => setNewStudentData({ ...newStudentData, lname: e.target.value })}
            required
          />

          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={newStudentData.studentId}
            onChange={(e) => setNewStudentData({ ...newStudentData, studentId: e.target.value })}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newStudentData.email}
            onChange={(e) => setNewStudentData({ ...newStudentData, email: e.target.value })}
            required
          />

          <label htmlFor="contact">Contact:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={newStudentData.contact}
            onChange={(e) => setNewStudentData({ ...newStudentData, contact: e.target.value })}
            required
          />

          <button type="button" onClick={handleCreateStudent}>
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default SchoolAdminDashboard;
