import './Select.css';

function Select({ label, id, options = [], className = '', value, onChange, ...props }) {
  return (
    <div className="select">
      {label && (
        <label htmlFor={id} className="select-label">
          {label}
        </label>
      )}

      <select
        id={id}
        className={`select-field ${className}`}
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
