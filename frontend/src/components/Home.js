import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 

const companies = [
  { name: 'Google', id: 'google', imageUrl: 'https://cdn2.hubspot.net/hubfs/53/image8-2.jpg' },
  { name: 'Microsoft', id: 'microsoft', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKpelZPn1TgWyL4wnjMjaswHPPCqj2AyCWMQ&s' },
  { name: 'Wipro', id: 'wipro', imageUrl: 'https://companieslogo.com/img/orig/WIT-1453b096.png?t=1720244494' },
  { name: 'Infosys', id: 'infosys', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Infosys_Technologies_logo.svg/2560px-Infosys_Technologies_logo.svg.png' },
  { name: 'Cisco', id: 'cisco', imageUrl: 'https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.png' },
  { name: 'PwC', id: 'pwc', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/1280px-PricewaterhouseCoopers_Logo.svg.png' },
  { name: 'Goldman Sachs', id: 'goldmanSachs', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8D9tD3sWPIQE6u419ecpwQ0aeeh1AFJwRQ&s' },
  { name: 'Meta', id: 'meta', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfeUVLSnWz2x-gbw3UbXuR9HduQIBY6otig&s' },
  { name: 'TCS', id: 'tcs', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/2560px-Tata_Consultancy_Services_Logo.svg.png' },
  { name: 'L&T', id: 'lnt', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/40/L%26T_Infotech_logo.jpg' },
  { name: 'Deloitte', id: 'deloitte', imageUrl: 'https://assets.channelinsider.com/uploads/2022/03/CI.Profile.Deloitte-1024x1024.jpg' },
  { name: 'Cognizant', id: 'cognizant', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDWjsmLKusWQ4fA90gn3Fc4CyTRqqQflyC0w&s'},
  
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
                <img src={company.imageUrl} alt={`${company.name} logo`} className="company-logo" />
                <span className="company-name">{company.name}</span>
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
