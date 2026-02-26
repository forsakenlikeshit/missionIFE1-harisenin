import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Google from '../assets/images/google-icon.png';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import InputPassword from '../components/ui/InputPassword';
import '../pages/Login.css';
import '../styles/auth.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email wajib diisi.');
      return;
    }

    if (!email.includes('@')) {
      setError('Format email tidak valid.');
      return;
    }

    if (!password) {
      setError('Password wajib diisi.');
      return;
    }

    if (password.length < 6) {
      setError('Password minimal 6 karakter.');
      return;
    }

    console.log('Login success:', { email, password });
  };

  return (
    <section className="auth-card login-card">
      <div className="auth login">
        <div className="card-title">
          <h3 className="auth-title">Masuk ke Akun</h3>
          <p>Yuk, lanjutin belajarmu di videobelajar.</p>
        </div>

        <form className="auth-form login-form" onSubmit={handleSubmit} noValidate>
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

          {error && <p className="auth-error">{error}</p>}

          <a href="#" className="lupa-password">
            Lupa Kata Sandi?
          </a>

          <Button variant="primary" type="submit" className="btn-submit btn-auth">
            Masuk
          </Button>
        </form>

        <Button variant="primary-shadow" className="btn-auth" onClick={() => navigate('/register')}>
          Daftar
        </Button>
      </div>

      <div className="alt-login">
        <div className="divider">
          <span>atau</span>
        </div>

        <Button variant="primary-outline" className="btn-sso btn-auth">
          <img className="google-login" src={Google} alt="Google" />
          Masuk dengan Google
        </Button>
      </div>
    </section>
  );
}

export default Login;
