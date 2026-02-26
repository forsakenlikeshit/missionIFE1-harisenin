import idFlag from '../../assets/images/id.png';
import usFlag from '../../assets/images/us.png';
import Select from './Select';
import './SelectCountry.css';

const countries = [
  { value: '+62', label: '+62', flag: idFlag },
  { value: '+1', label: '+1', flag: usFlag },
];

function SelectCountry({ value, onChange }) {
  const selectedCountry = countries.find((c) => c.value === value);

  return (
    <div className="country-code">
      <span className="country-flag">
        <img src={selectedCountry?.flag} alt={value} />
      </span>

      <Select value={value} onChange={onChange} options={countries} className="select-country" />
    </div>
  );
}

export default SelectCountry;
