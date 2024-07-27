import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css';

function Profile() {
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        skills: [],
        bio: "",
        qualification: "",
        resume: null,
        profilePicture: null,
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setProfile(prevProfile => ({
            ...prevProfile,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSkillChange = (event) => {
        setProfile(prevProfile => ({
            ...prevProfile,
            skills: event.target.value.split(',').map(skill => skill.trim()).filter(skill => skill !== ""),
        }));
    };

    const handleAddSkill = () => {
        const skillInput = document.getElementById("skillsInput").value;
        if (skillInput.trim() !== "") {
            setProfile(prevProfile => ({
                ...prevProfile,
                skills: [...prevProfile.skills, skillInput.trim()],
            }));
            document.getElementById("skillsInput").value = "";
        }
    };

    const handleRemoveSkill = (skillToRemove) => {
        setProfile(prevProfile => ({
            ...prevProfile,
            skills: prevProfile.skills.filter(skill => skill !== skillToRemove),
        }));
    };

    const validateForm = () => {
        if (!profile.name.trim()) return "Name is required.";
        if (!profile.email.trim()) return "Email is required.";
        if (!/\S+@\S+\.\S+/.test(profile.email)) return "Email is invalid.";
        if (profile.skills.length === 0) return "At least one skill is required.";
        if (profile.bio.length > 500) return "Bio must be 500 characters or less.";
        return "";
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setMessage("");
        } else {
            // Handle form submission, e.g., send data to the server
            setMessage("Profile updated successfully!");
            setError("");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Profile</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <div className="form-group">
                    <label htmlFor="profilePicture">Profile Picture</label>
                    <input
                        type="file"
                        id="profilePicture"
                        name="profilePicture"
                        className="form-control-file"
                        onChange={handleChange}
                        accept="image/*"
                    />
                    {profile.profilePicture && (
                        <img 
                            src={URL.createObjectURL(profile.profilePicture)} 
                            alt="Profile Preview" 
                            className="img-thumbnail mt-2" 
                            style={{ width: '150px', height: '150px' }}
                        />
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        value={profile.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={profile.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills</label>
                    <input
                        type="text"
                        id="skillsInput"
                        className="form-control"
                        placeholder="Add skill (comma-separated)"
                        onChange={handleSkillChange}
                    />
                    
                    <div className="mt-2">
                        {profile.skills.map(skill => (
                            <span 
                                key={skill} 
                                className="badge bg-primary me-2 mb-2"
                            >
                               
                            </span>
                        ))}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        className="form-control"
                        value={profile.bio}
                        onChange={handleChange}
                        placeholder="Enter your bio"
                        maxLength="500"
                    ></textarea>
                    <small className="form-text text-muted">
                        {profile.bio.length}/500 characters
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="qualification">Qualification</label>
                    <input
                        type="text"
                        id="qualification"
                        name="qualification"
                        className="form-control"
                        value={profile.qualification}
                        onChange={handleChange}
                        placeholder="Enter your qualification"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Resume</label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        className="form-control-file"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
                {message && (
                    <div className="alert alert-success mt-3">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="alert alert-Failure mt-3">
                        {error}
                    </div>
                )}
            </form>
        </div>
    );
}

export default Profile;
