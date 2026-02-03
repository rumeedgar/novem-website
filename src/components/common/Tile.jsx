import React from 'react';

const Tile = ({ title, description }) => {
  return (
    <div className="pl-4 border-l-2" style={{ borderLeftColor: 'var(--c-accent-highlight)' }}>
      <h3 className="font-mono text-base mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Tile;
