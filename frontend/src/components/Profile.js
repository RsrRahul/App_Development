import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [selectedSection, setSelectedSection] = useState('Personal Details');
  const [resume, setResume] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    location: 'Springfield',
    qualifications: 'B.Sc. Computer Science',
    bio: 'Enthusiastic software developer with 5 years of experience...',
    skills: 'JavaScript, React, Node.js, Python',
  });

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  const handleResumeUpload = (event) => {
    setResume(event.target.files[0]);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save the updated details to your backend or state management here
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const applications = [
    { id: 1, image: 'https://via.placeholder.com/150', company: 'Company A', position: 'Software Engineer', status: 'Under Review' },
    { id: 2, image: 'https://via.placeholder.com/150', company: 'Company B', position: 'Product Manager', status: 'Accepted' },
    { id: 3, image: 'https://via.placeholder.com/150', company: 'Company C', position: 'Data Analyst', status: 'Rejected' },
    { id: 4, image: 'https://via.placeholder.com/150', company: 'Company D', position: 'UX Designer', status: 'Interview Scheduled' },
    // Add more applications as needed
  ];

  const interviews = [
    { id: 1, company: 'Company A', date: '2023-07-01', time: '10:00 AM' },
    { id: 2, company: 'Company B', date: '2023-06-15', time: '2:00 PM' },
    // Add more interviews as needed
  ];

  const jobOffers = [
    { id: 1, image: 'https://via.placeholder.com/150', company: 'Company A', position: 'Software Engineer', date: '2023-05-01' },
    { id: 2, image: 'https://via.placeholder.com/150', company: 'Company B', position: 'Product Manager', date: '2023-04-15' },
    // Add more job offers as needed
  ];

  return (
    <div className="container-fluid profile-page">
      <div className="row">
        <aside className="col-md-3 col-lg-2 p-3 bg-light sidebar">
          <ul className="nav flex-column">
            <li className="nav-item">
              <button className="nav-link active" onClick={() => handleSectionClick('Personal Details')}>
                Personal Details
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleSectionClick('Job Applications')}>
                Job Applications
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleSectionClick('Interviews')}>
                Interviews
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleSectionClick('Job Offers')}>
                Job Offers
              </button>
            </li>
          </ul>
        </aside>
        <div className="col-md-9 col-lg-10 content">
          {selectedSection === 'Personal Details' && (
            <div className="card mt-4">
              <div className="card-body">
                <h1 className="card-title">Personal Details</h1>
                <div className="details-container mt-3">
                  {isEditing ? (
                    <form>
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={details.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={details.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Location</label>
                        <input
                          type="text"
                          className="form-control"
                          name="location"
                          value={details.location}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Qualifications</label>
                        <input
                          type="text"
                          className="form-control"
                          name="qualifications"
                          value={details.qualifications}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Bio</label>
                        <textarea
                          className="form-control"
                          name="bio"
                          value={details.bio}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Skills</label>
                        <input
                          type="text"
                          className="form-control"
                          name="skills"
                          value={details.skills}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Resume</label>
                        <input type="file" accept=".doc,.docx" onChange={handleResumeUpload} className="form-control" />
                        {resume && <span className="ml-2">{resume.name}</span>}
                      </div>
                      <button type="button" className="btn btn-primary" onClick={handleSaveClick}>
                        Save
                      </button>
                    </form>
                  ) : (
                    <>
                      <div className="detail-item mb-3">
                        <span>Name: {details.name}</span>
                      </div>
                      <div className="detail-item mb-3">
                        <span>Email: {details.email}</span>
                      </div>
                      <div className="detail-item mb-3">
                        <span>Location: {details.location}</span>
                      </div>
                      <div className="detail-item mb-3">
                        <span>Qualifications: {details.qualifications}</span>
                      </div>
                      <div className="detail-item mb-3">
                        <span>Bio: {details.bio}</span>
                      </div>
                      <div className="detail-item mb-3">
                        <span>Skills: {details.skills}</span>
                      </div>
                      <div className="detail-item">
                        <span>Resume:</span>
                        {resume && <span className="ml-2">{resume.name}</span>}
                      </div>
                      <div className="mt-3">
                        <button className="btn btn-outline-primary" onClick={handleEditClick}>Edit All Details</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
          {selectedSection === 'Job Applications' && (
            <div className="card mt-4">
              <div className="card-body">
                <h1 className="card-title">Job Applications</h1>
                <div className="applications-container mt-3">
                  {applications.map(application => (
                    <div className="application-card card mb-3" key={application.id}>
                      <div className="row no-gutters">
                        <div className="col-md-2">
                          <img src={application.image} alt={application.company} className="card-img" />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">{application.company}</h5>
                            <p className="card-text">{application.position}</p>
                            <p className="card-text"><small className="text-muted">{application.status}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedSection === 'Interviews' && (
            <div className="card mt-4">
              <div className="card-body">
                <h1 className="card-title">Interviews</h1>
                <div className="interviews-container mt-3">
                  {interviews.map(interview => (
                    <div className="interview-card card mb-3" key={interview.id}>
                      <div className="card-body">
                        <h5 className="card-title">{interview.company}</h5>
                        <p className="card-text">{interview.date} at {interview.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedSection === 'Job Offers' && (
            <div className="card mt-4">
              <div className="card-body">
                <h1 className="card-title">Job Offers</h1>
                <div className="job-offers-container mt-3">
                  {jobOffers.map(offer => (
                    <div className="job-offer-card card mb-3" key={offer.id}>
                      <div className="row no-gutters">
                        <div className="col-md-2">
                          <img src={offer.image} alt={offer.company} className="card-img" />
                        </div>
                        <div className="col-md-10">
                          <div className="card-body">
                            <h5 className="card-title">{offer.company}</h5>
                            <p className="card-text">{offer.position}</p>
                            <p className="card-text"><small className="text-muted">{offer.date}</small></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
