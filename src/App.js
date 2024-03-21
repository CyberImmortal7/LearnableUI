import React from 'react';
import './App.css';
const Intern = ({ name, image, info, grade }) => {
  return (
    <div className="intern-card">
      <img src={image} alt={name} className="intern-image" />
      <div className="intern-info">
        <h2 className="intern-name">{name}</h2>
        <p className="intern-info-text">{info}</p>
        <p className="intern-grade">Overall Grade: {grade}</p>
      </div>
    </div>
  );
};

const App = () => {
  const internData = {
    name: 'Tekena Ajuzieogu',
    /*image: 'https://example.com/image.jpg',*/
    info: 'Front Rnd',
    grade: 'A'
  };

  return <Intern {...internData} />;
};

export default App;