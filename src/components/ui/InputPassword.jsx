import { useState } from 'react';
import passwordToggle from '../../assets/images/show-password.png';
import './InputPassword.css';

function InputPassword({ label, id, className, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input">
      <label htmlFor={id} className="input-label">
        {label}
      </label>

      <div className="input-password-container">
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          className={`input-field ${className}`}
          value={value}
          onChange={onChange}
        />

        <img
          src={passwordToggle}
          alt="Toggle password"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
    </div>
  );
}

export default InputPassword;
