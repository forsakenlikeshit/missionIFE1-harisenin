import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Google from '../assets/images/google-icon.png';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import InputPassword from '../components/ui/InputPassword';
import InputPhone from '../components/ui/InputPhone';
import Select from '../components/ui/Select';
import '../pages/Register.css';

function Register() {
  const navigate = useNavigate();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [countryCode, setCountryCode] = useState('+62');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!nama || !email || !gender || !phone || !password || !confirmPassword) {
      setError('Semua field wajib diisi.');
      return;
    }

    if (!email.includes('@')) {
      setError('Format email tidak valid.');
      return;
    }

    if (password.length < 6) {
      setError('Password minimal 6 karakter.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Konfirmasi password tidak cocok.');
      return;
    }

    console.log('Register success:', {
      nama,
      email,
      gender,
      phone,
      password,
    });
  };

  return (
    <section className="auth-card register-card">
      <div className="auth register">
        <div className="card-title">
          <h3 className="auth-title">Pendaftaran Akun</h3>
          <p>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>

        <form className="auth-form register-form" onSubmit={handleSubmit} noValidate>
          <Input
            label="Nama Lengkap"
            id="nama"
            type="text"
            className="input-auth"
            value={nama}
            onChange={(e) => {
              setNama(e.target.value);
              setError('');
            }}
          />

          <Input
            label="Email"
            id="email"
            type="email"
            className="input-auth"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
          />

          <Select
            label="Jenis Kelamin"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            options={[
              { value: '', label: 'Pilih' },
              { value: 'male', label: 'Laki-laki' },
              { value: 'female', label: 'Perempuan' },
            ]}
          />

          <InputPhone
            label="No. HP"
            countryCode={countryCode}
            onCountryChange={(e) => setCountryCode(e.target.value)}
            phone={phone}
            onPhoneChange={(e) => setPhone(e.target.value)}
          />

          <InputPassword
            label="Kata Sandi"
            id="password"
            className="input-auth"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
          />

          <InputPassword
            label="Konfirmasi Kata Sandi"
            id="confirmPassword"
            className="input-auth"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError('');
            }}
          />

          {error && <p className="auth-error">{error}</p>}

          <a href="#" className="lupa-password">
            Lupa Kata Sandi?
          </a>

          <Button variant="primary" type="submit" className="btn-submit btn-auth">
            Daftar
          </Button>
        </form>

        <Button variant="primary-outline" className="btn-auth" onClick={() => navigate('/login')}>
          Masuk
        </Button>
      </div>

      <div className="alt-login">
        <div className="divider">
          <span>atau</span>
        </div>

        <Button variant="primary-outline" className="btn-sso btn-auth">
          <img className="google-login" src={Google} alt="Google" />
          Daftar dengan Google
        </Button>
      </div>
    </section>
  );
}

export default Register;
