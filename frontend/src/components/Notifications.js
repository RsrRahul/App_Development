import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const notifications = [
  { id: 1, message: 'Your application to Google has been received.' },
  { id: 2, message: 'Interview scheduled with Microsoft.' },
  { id: 3, message: 'Offer accepted at Wipro. Congratulations!' },
];

const Notifications = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Notifications</h1>
      <ul className="list-group">
        {notifications.map((notification) => (
          <li key={notification.id} className="list-group-item">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
