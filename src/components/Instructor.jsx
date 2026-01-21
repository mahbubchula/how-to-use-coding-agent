import React from 'react';

const Instructor = () => {
  return (
    <div className="instructor-section">
      <div className="card">
        <h3>Meet Your Instructor</h3>
        <span className="instructor-badge">Non-ASEAN Scholar</span>
        <h2 style={{ color: 'white', margin: '0.5rem 0' }}>Mahbub Hassan</h2>
        <p>Faculty of Engineering, Chulalongkorn University</p>
        <p style={{ fontSize: '0.9rem', color: '#888' }}>
          Expert in AI-assisted workflows and modern developer tools.
        </p>
      </div>
    </div>
  );
};

export default Instructor;
