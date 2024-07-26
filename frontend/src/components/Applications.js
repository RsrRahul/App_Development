import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const applications = [
  { id: 1, company: 'Google', position: 'Software Engineer', status: 'Pending' },
  { id: 2, company: 'Microsoft', position: 'System Analyst', status: 'Interview Scheduled' },
  { id: 3, company: 'Wipro', position: 'IT Consultant', status: 'Accepted' },
];

const Applications = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Job Applications</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Company</th>
            <th>Position</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application) => (
            <tr key={application.id}>
              <td>{application.company}</td>
              <td>{application.position}</td>
              <td>{application.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Applications;
