import React, { useEffect } from 'react';
import $ from 'jquery';
import './ProfileCard.css';

export default function ProfileCard() {
  useEffect(() => {
    const elements = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            $(entry.target).css('position', 'relative').css('top', '50px').css('opacity', '0').animate({ top: '0px', opacity: 1 }, 500);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className=""
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '40px',
          color: '#2F82A0',
          fontFamily: 'Romanesco',
        }}
      >
        Browse Matrimonial profiles
      </div>
      <div className="card-wrapper">
        <div className="card-background"></div>
        <div className="cards_container">
          <div className="card">
            <h1 style={{ fontSize: '30px', color: '#de0e7e' }}>RELIGION</h1>
            <p>Hindu Muslim Christian Sikh Bhuddhist Jain.</p>
            <button
              style={{
                color: 'white',
                marginTop: '80px',
                border: 'solid 2px #de0e7e',
                backgroundColor: '#de0e7e',
                borderRadius: '9px',
                padding: '8px',
              }}
            >
              Read more
            </button>
          </div>
          <div className="card">
            <h1 style={{ fontSize: '30px', color: '#de0e7e' }}>CASTE</h1>
            <p>Agarwal Arora Brahmin Gupta Khatri Lyer kayasta Maratha Rajput Sunni Swetamber.</p>
            <button
              style={{
                color: 'white',
                marginTop: '55px',
                border: 'solid 2px #de0e7e',
                backgroundColor: '#de0e7e',
                borderRadius: '9px',
                padding: '8px',
              }}
            >
              Read more
            </button>
          </div>
          <div className="card">
            <h1 style={{ fontSize: '30px', color: '#de0e7e' }}>STATE</h1>
            <p>California New york New jersy Virginia ILLinios Florida Pennsylvania Michigan Georgia.</p>
            <button
              style={{
                color: 'white',
                marginTop: '55px',
                border: 'solid 2px #de0e7e',
                backgroundColor: '#de0e7e',
                borderRadius: '9px',
                padding: '8px',
              }}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <h1 className="heading">Personalized matchmaker for Busy Professional</h1>
    </>
  );
}






