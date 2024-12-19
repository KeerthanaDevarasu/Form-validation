import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Table = () => {
    const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8000/employees');
        setEmployees(response.data);
      } catch (err) {
        setError('Failed to fetch employee data');
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h1 class = "heading">Employee List</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>phone</th>
            <th>Dept</th>
            <th>Date of Joining</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.empId}>
              <td>{employee.empId}</td>
              <td>{employee.FirstName}</td>
              <td>{employee.LastName}</td>
              <td>{employee.email}</td>
              <td>{employee.PhoneNumber}</td>
              <td>{employee.dept}</td>
              <td>{employee.doj}</td>
              <td>{employee.workrole}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
      <button onClick={()=>navigate('/')}>Add employee</button>
      </div>
    </div>
    
  );
};

export default Table;

