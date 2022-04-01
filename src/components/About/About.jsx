import React from 'react';
import './About.scss';

const About = ({ hero }) => {
    const { aboutMe } = hero
    return (
        <div className="about card">
        {aboutMe.map((about, index) => {
          return (
            <div key={index}>
              <p className="info">{about.info}</p>
            </div>
          );
        })}
      </div>
    );
}

export default About;
