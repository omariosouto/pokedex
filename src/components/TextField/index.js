import React from "react";

export function TextField({ value, type }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '5px',
      marginBottom: '26px'
    }}>
        <p style={{
          color: '#98a609',
          fontWeight: 'bold',
          fontSize: '18px'
        }}
        >
          {type}:
        </p>
        <p style={{
          color: '#2fb7fe',
          textTransform: 'uppercase',
          fontWeight: 'bold'
        }}
        >
          {value}
        </p>
    </div>
  )
}