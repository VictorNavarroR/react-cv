import React from 'react';
import './More.scss';

const More = ({ languages, habilities, volunteer }) => {
    return (
        <>  
            <h2>Languages</h2>
            <div className="languages card">
                {languages.map( (language, index) => {
                    return(
                        <div className="language"  key={index}>
                            <p className="subtitle">{language.name}</p>
                            <p>🖊 {language.wrlevel}</p>
                            <p>📣 {language.splevel}</p>
                        </div>
                    )
                 }
                )}
            </div>
            <h2>Skills</h2>
            <div className="habilities card">
                {habilities.map( (hability, index) => {
                    return(
                        <p className="hability"  key={index}>
                            🔧{hability}
                        </p>
                    )
                 }
                )}
            </div>
            <h2>Volunteer</h2>
            <div className="volunteer card">
                {volunteer.map( (volunteer, index) => {
                        return(
                            <div  key={index}>
                                <p className="volunteer-title subtitle">
                                    🥽 {volunteer.name}
                                </p>
                                <p className="volunteer-where">
                                     {volunteer.where}
                                </p>
                                <p className="volunteer-description">
                                     {volunteer.description}
                                </p>
                            </div>
                        )
                    }
                    )}
            </div>
        </>
    );
}

export default More;
