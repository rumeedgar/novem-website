import React, { useState } from 'react';

const ArtifactPanel = () => {
  const [activeTab, setActiveTab] = useState('balances');

  return (
    <div style={{
      backgroundColor: '#FAFAFA',
      border: '1px solid var(--c-border)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
    }}>
      <div style={{
        borderBottom: '1px solid var(--c-border)',
        padding: '12px',
        display: 'flex',
        gap: '12px',
        background: '#fff',
        flexWrap: 'wrap'
      }}>
        <span
          onClick={() => setActiveTab('balances')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            color: activeTab === 'balances' ? 'var(--c-text-primary)' : 'var(--c-text-secondary)',
            cursor: 'pointer',
            textDecoration: activeTab === 'balances' ? 'underline' : 'none',
            textUnderlineOffset: '3px'
          }}
        >
          Balances
        </span>
        <span
          onClick={() => setActiveTab('activity')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            color: activeTab === 'activity' ? 'var(--c-text-primary)' : 'var(--c-text-secondary)',
            cursor: 'pointer',
            textDecoration: activeTab === 'activity' ? 'underline' : 'none',
            textUnderlineOffset: '3px'
          }}
        >
          Activity
        </span>
        <span
          onClick={() => setActiveTab('reconciliation')}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            color: activeTab === 'reconciliation' ? 'var(--c-text-primary)' : 'var(--c-text-secondary)',
            cursor: 'pointer',
            textDecoration: activeTab === 'reconciliation' ? 'underline' : 'none',
            textUnderlineOffset: '3px'
          }}
        >
          Reconciliation
        </span>
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Total Liquidity
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem' }}>$12,450,200.00</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              color: '#999',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Change (24h)
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'green' }}>+2.4%</div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '4px',
          alignItems: 'flex-end',
          height: '80px',
          paddingBottom: '10px',
          borderBottom: '1px solid #eee'
        }}>
          <div style={{ flex: 1, background: '#eee', height: '40%' }}></div>
          <div style={{ flex: 1, background: '#eee', height: '60%' }}></div>
          <div style={{ flex: 1, background: '#eee', height: '50%' }}></div>
          <div style={{ flex: 1, background: '#eee', height: '80%' }}></div>
          <div style={{ flex: 1, background: 'var(--c-accent-highlight)', height: '90%' }}></div>
        </div>

        <div style={{ marginTop: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>Silicon Valley Bank</span>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>$4.2M</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>Chase Commercial</span>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>$2.8M</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>Mercury</span>
            <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>$5.1M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactPanel;
