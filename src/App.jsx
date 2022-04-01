import './App.scss';
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import About  from "./components/About/About";
import Education  from "./components/Education/Education";
import Experience  from "./components/Experience/Experience";
import More  from "./components/More/More";
import {CV}  from "./CV";

function App() {
  const { hero, education, experience, languages, habilities, volunteer } = CV;
  const [showEducation, setShowEducation] = useState(true);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="app">
        <Hero hero={hero} />
        <About hero={hero} />

        <div className="btns">
            <button
              className={isActive ? 'custom-btn btn-4 active': 'custom-btn btn-4'}
              onClick={() => {
                setShowEducation(true)
                toggleClass()
              }}
            >
              Education
            </button>
            <button
              className={!isActive ? 'custom-btn btn-4 active': 'custom-btn btn-4'}
              onClick={() => {
                setShowEducation(false)
                toggleClass()
              }}
            >
              Experience
            </button>
            </div>    
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>

	      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />
        

    </div>

  );
}

export default App;
