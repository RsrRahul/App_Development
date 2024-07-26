import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const internshipData = {
  zoho: {
    name: 'Zoho',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/ZOHO_New.png', 
    description: 'Zoho Corporation is an Indian multinational technology company that makes web-based business tools.',
    internshipOffers: ['Software Intern', 'Product Management Intern', 'Marketing Intern'],
  },
  amazon: {
    name: 'Amazon',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
    description: 'Amazon.com, Inc. is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
    internshipOffers: ['Software Development Intern', 'Operations Intern', 'Finance Intern'],
  },
  accenture: {
    name: 'Accenture',
    logo: 'https://logos-world.net/wp-content/uploads/2020/06/Accenture-Emblem.png',
    description: 'Accenture plc is an Irish-American professional services company based in Dublin, specializing in IT services and consulting.',
    internshipOffers: ['Consulting Intern', 'Technology Intern', 'Management Intern'],
  },
  apple: {
    name: 'Apple',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&s',
    description: 'Apple Inc. is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services.',
    internshipOffers: ['Software Intern', 'Business Intern', 'Marketing Intern'],
  },
  mercedesBenz: {
    name: 'Mercedes Benz',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nLi8Fny18YUY8Xue6krSKnrIVWpE_vojYw&s',
    description: 'Mercedes-Benz AG is a German global automobile marque and a division of Daimler AG.',
    internshipOffers: ['Engineering Intern', 'Design Intern', 'Marketing Intern'],
  },
  samsung: {
    name: 'Samsung',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png',
    description: 'Samsung is a South Korean multinational conglomerate headquartered in Samsung Town, Seoul.',
    internshipOffers: ['Software Intern', 'Hardware Intern', 'Business Intern'],
  },
  intel: {
    name: 'Intel',
    logo: 'https://1000logos.net/wp-content/uploads/2021/05/Intel-logo.png',
    description: 'Intel Corporation is an American multinational corporation and technology company.',
    internshipOffers: ['Engineering Intern', 'Data Science Intern', 'Marketing Intern'],
  },
  hp: {
    name: 'HP',
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/Hewlett-Packard-Logo-2008-2014.png',
    description: 'HP Inc. is an American multinational information technology company headquartered in Palo Alto, California.',
    internshipOffers: ['IT Intern', 'Software Intern', 'Marketing Intern'],
  },
  ibm: {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/IBM_logo_in.jpg',
    description: 'International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York.',
    internshipOffers: ['Research Intern', 'Software Intern', 'Consulting Intern'],
  },
  oracle: {
    name: 'Oracle',
    logo: 'https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo.jpg',
    description: 'Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas.',
    internshipOffers: ['Software Intern', 'Sales Intern', 'Data Science Intern'],
  },
  paypal: {
    name: 'PayPal',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg',
    description: 'PayPal Holdings, Inc. is an American company operating a worldwide online payments system that supports online money transfers and serves as an electronic alternative to traditional paper methods like checks and money orders.',
    internshipOffers: ['Software Intern', 'Finance Intern', 'Business Development Intern'],
  },
  adobe: {
    name: 'Adobe',
    logo: 'https://cdn.vox-cdn.com/thumbor/5fTM5k46cYTaGMKlA35PJMgqpPU=/0x0:1920x1080/1400x1050/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/24760594/Adobe_wordmark.jpg',
    description: 'Adobe Inc. is an American multinational computer software company headquartered in San Jose, California.',
    internshipOffers: ['Software Intern', 'Design Intern', 'Marketing Intern'],
  },
};

const InternshipPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Internship Opportunities</h1>
      <div className="row">
        {Object.keys(internshipData).map((key) => {
          const company = internshipData[key];
          return (
            <div className="col-md-4 mb-4" key={key}>
              <div className="card h-100">
                <img src={company.logo} className="card-img-top" alt={`${company.name} logo`} />
                <div className="card-body">
                  <h5 className="card-title">{company.name}</h5>
                  <p className="card-text">{company.description}</p>
                  <p className="card-text"><strong>Internship Offers:</strong> {company.internshipOffers.join(', ')}</p>
                  <Link to={`/apply/${key}`} className="btn btn-primary">Apply for Intern</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InternshipPage;
