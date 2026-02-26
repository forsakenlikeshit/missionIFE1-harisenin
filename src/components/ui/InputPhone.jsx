import Input from './Input';
import './InputPhone.css';
import SelectCountry from './SelectCountry';

function InputPhone({ label, countryCode, onCountryChange, phone, onPhoneChange }) {
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Remove leading 0
    if (value.startsWith('0')) {
      value = value.replace(/^0+/, '');
    }

    onPhoneChange({
      ...e,
      target: {
        ...e.target,
        value,
      },
    });
  };

  return (
    <div className="input-phone">
      {label && <label className="phone-label">{label}</label>}

      <div className="phone-row">
        <SelectCountry value={countryCode} onChange={onCountryChange} />

        <Input type="tel" value={phone} onChange={handlePhoneChange} className="phone-number" />
      </div>
    </div>
  );
}

export default InputPhone;
