import React from 'react';

const StepItem = ({ number, description }) => {
  return (
    <div className="flex gap-8 mb-4 items-baseline">
      <span className="font-mono text-sm text-black px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--c-accent-highlight)' }}>
        {number}
      </span>
      <div>{description}</div>
    </div>
  );
};

export default StepItem;
