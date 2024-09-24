import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 about-image">
            <img src="https://static.vecteezy.com/system/resources/previews/012/252/636/non_2x/cricket-player-silhouettes-collection-set-of-cricket-players-silhouette-free-vector.jpg" className="img-fluid" alt="Collection" />
          </div>
          <div className="col-md-6 panel-content">
            <h3 className="about-title">ABOUT<br />
              <span>Organization</span>
            </h3>
            <p className="about-content">We are a dedicated sports organization committed to organizing high-quality cricket tournaments in various exciting formats, including T20, One-Day, and Test matches.</p>
            <p className="about-content">Join us and be a part of an exciting cricket journey that promises fun, competition, and unforgettable memories!</p>
            <div className="row justify-content-around">
              <Card title="Instagram" value="80K+" />
              <Card title="Twitter" value="50K+" />
              <Card title="Loaction" value="Goa" />
            </div>
          </div>

          <div className="row justify-content-center boxs">
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-layers"></i>
                <h2>400+</h2>
                <p>Staff Members</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-circle"></i>
                <h2>1000+</h2>
                <p>Match Organised</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-hearts"></i>
                <h2>10+</h2>
                <p>Year Of Experience</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-rocket-takeoff-fill"></i>
                <h2>20+</h2>
                <p>States Team Played</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ title, value }) => {
  return (
    <div className="col-md-3 about-card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};


