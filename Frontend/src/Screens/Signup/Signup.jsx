import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNextClick = () => {
    if (selectedOption === 'User') {
      navigate('/users');
    } else if (selectedOption === 'Marriage Consultant') {
      navigate('/marriage');
    } else {
      alert('Please select an option!');
    }
  };

  return (
    <div className="Signupcontainer_1">
      <div className="signup-left">
        <div className="circles_zaheers_circle"></div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dh32zavox/image/upload/v1735122163/rishta%20images/pytw2xvekyn9l0mb0dfx.png"
            alt="logo"
            className="image_style lg:text-sm"
          />
        </Link>
        <div className="firsts-image-signup">
          <img
            src="https://res.cloudinary.com/dh32zavox/image/upload/v1735119599/rishta%20images/sduuxj4s00qm1kphy1tl.png"
            alt="marriage"
          />
        </div>
      </div>
      <div className="signup-right">
        <div className="Signup">
          {/* <h1 className="login_heading">Join Now</h1> */}
          <div className="options">
            <div className="option-item">
              <button
                type="button"
                className={`option-button ${selectedOption === 'User' ? 'active' : ''}`}
                onClick={() => setSelectedOption('User')}
              >
                User
              </button>
            </div>
            <div className="option-item">
              <button
                type="button"
                className={`option-button ${selectedOption === 'Marriage Consultant' ? 'active' : ''}`}
                onClick={() => setSelectedOption('Marriage Consultant')}
              >
                Marriage Consultant
              </button>
            </div>
            <button className="nxt" onClick={handleNextClick}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
