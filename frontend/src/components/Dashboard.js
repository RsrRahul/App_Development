import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Job Applications</h5>
              <p className="card-text">View and manage your job applications.</p>
              <button className="btn btn-primary" onClick={() => navigate('/applications')}>View Applications</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <p className="card-text">Check your latest notifications.</p>
              <button className="btn btn-primary" onClick={() => navigate('/notifications')}>View Notifications</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">View and edit your profile information.</p>
              <button className="btn btn-primary" onClick={() => navigate('/profile')}>View Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
