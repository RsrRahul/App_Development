import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import your custom CSS file

const companies = [
  { name: 'Google', id: 'google' },
  { name: 'Microsoft', id: 'microsoft' },
  { name: 'Wipro', id: 'wipro' },
  { name: 'Infosys', id: 'infosys' },
  { name: 'Cisco', id: 'cisco' },
  { name: 'PwC', id: 'pwc' },
  { name: 'Goldman Sachs', id: 'goldmanSachs' },
  { name: 'Meta', id: 'meta' },
  { name: 'TCS', id: 'tcs' },
  { name: 'L&T', id: 'lnt' },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/company/${id}`);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container container text-center mt-5">
      <h1 className="mb-4">Welcome to the Job Portal</h1>
      <div className="row mb-4">
        <div className="col-12 col-md-8 offset-md-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="company-buttons row mt-4">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3" key={company.id}>
              <button
                className="btn btn-company w-100"
                onClick={() => handleNavigate(company.id)}
              >
                {company.name}
              </button>
            </div>
          ))
        ) : (
          <p>No companies found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
