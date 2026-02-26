import './Input.css';

function Input({ label, id, type = 'text', className = '', value, onChange, ...props }) {
  return (
    <div className="input">
      {label && (
        <label htmlFor={id} className="input-label">
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        className={`input-field ${className}`}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default Input;
