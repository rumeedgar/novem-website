import React from 'react';

const MiniArtifact = ({ type }) => {
  const baseStyle = {
    height: '80px',
    background: '#FAFAFA',
    border: '1px solid var(--c-border)',
    marginBottom: 'var(--space-sm)',
    position: 'relative',
    overflow: 'hidden'
  };

  if (type === 'bars') {
    return (
      <div style={baseStyle}>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '10px',
          width: '40px',
          height: '20px',
          background: '#ddd'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '55px',
          width: '40px',
          height: '35px',
          background: '#ddd'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: '100px',
          width: '40px',
          height: '15px',
          background: '#ddd'
        }}></div>
      </div>
    );
  } else if (type === 'transfer') {
    return (
      <div style={baseStyle}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'monospace'
        }}>
          -&gt; $ -&gt;
        </div>
      </div>
    );
  } else if (type === 'reconcile') {
    return (
      <div style={baseStyle}>
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          width: '10px',
          height: '10px',
          background: 'var(--c-accent-highlight)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '30px',
          left: '20px',
          right: '40px',
          height: '2px',
          background: '#ddd'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '40px',
          left: '20px',
          right: '40px',
          height: '2px',
          background: '#ddd'
        }}></div>
      </div>
    );
  }

  return <div style={baseStyle}></div>
};

export default MiniArtifact;
