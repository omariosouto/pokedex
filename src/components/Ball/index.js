import React from "react";

export function Ball({ color }) {
  return (
    <div style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      border: '1px solid #3d040d',
      marginTop: '10px',
      backgroundColor: `${color}`
    }}>
    </div>
  )
}