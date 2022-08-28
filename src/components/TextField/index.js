import React from "react";

export function TextField({ value, type }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '5px',
      marginBottom: '16px'
    }}>
        <p style={{
          color: '#98a609',
          fontWeight: 'bold',
          fontSize: '16px'
        }}
        >
          {type}:
        </p>
        <p style={{
          color: '#2fb7fe',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          fontSize: '16px'
        }}
        >
          {value}
        </p>
    </div>
  )
}