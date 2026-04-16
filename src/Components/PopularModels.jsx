import React from 'react';
import { Link } from 'react-router-dom';

const PopularModels = () => {
  const models = [
    
   
  ];

  return (
    <section className="popular-models-section">
      <div className="section-header">
        <h2>Popular Models</h2>
        <div className="header-line"></div>
      </div>
      
      <div className="models-grid">
        {models.map((model, index) => (
          <Link to="/model-details" className="model-card" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
  <div className="model-img-wrapper">
    <img src={model.img} alt={model.name} />
  </div>
  <h3>{model.name}</h3>
</Link>
        ))}
      </div>
    </section>
  );
};


export default PopularModels;