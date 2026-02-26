import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Profile from '../../assets/images/profilepic.png';
import Button from '../ui/Button';
import './Navbar.css';

function Navbar({ variant = 'main', isLoggedIn = false }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`navbar navbar-${variant}`}>
      <img className="logo-top" src={Logo} alt="videobelajar Logo" onClick={() => navigate('/')} />

      {variant === 'main' && (
        <div className="right-nav">
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <img src="/images/hamburger.png" alt="Open menu" />
          </button>

          <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
            <a href="#" className="to-category">
              Kategori
            </a>

            {!isLoggedIn ? (
              <>
                <Button
                  variant="primary"
                  className="btn-nav-login"
                  onClick={() => navigate('/login')}
                >
                  Masuk
                </Button>

                <Button
                  variant="primary-outline"
                  className="btn-nav-register"
                  onClick={() => navigate('/register')}
                >
                  Daftar
                </Button>
              </>
            ) : (
              <img className="profile-pic" src={Profile} alt="profile" />
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
