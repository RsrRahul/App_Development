import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const userProfile = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '123-456-7890',
  resume: null,
};

const Profile = () => {
  const [profile, setProfile] = useState(userProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [resumeFileName, setResumeFileName] = useState(profile.resume ? profile.resume.name : 'No file chosen');

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfile({ ...profile, resume: file });
    setResumeFileName(file ? file.name : 'No file chosen');
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save profile changes including resume file
    console.log('Profile saved:', profile);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Profile</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Resume</label>
          <input
            type="file"
            className="form-control"
            name="resume"
            onChange={handleFileChange}
            disabled={!isEditing}
          />
          <div className="mt-2">{resumeFileName}</div>
        </div>
        {isEditing ? (
          <button type="button" className="btn btn-success" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={handleEditToggle}>
            Edit Profile
          </button>
        )}
      </form>
    </div>
  );
};

export default Profile;
