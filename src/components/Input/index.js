import React from 'react'

const Input = ({ label, type, name, value, onChange, error }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
      {error && (
        <div>
          <span> {error}</span>
        </div>
      )}
    </div>
  )
}
export default Input