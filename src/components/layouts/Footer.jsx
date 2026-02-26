import { useState } from 'react';
import Chevron from '../../assets/images/chevron.png';
import Facebook from '../../assets/images/facebook.png';
import Instagram from '../../assets/images/instagram.png';
import Linkedin from '../../assets/images/linkedin.png';
import Logo from '../../assets/images/logo.png';
import Twitter from '../../assets/images/twitter.png';
import './Footer.css';

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <footer>
      <div className="footer-address-links">
        <section className="footer-address">
          <img src={Logo} alt="videobelajar Logo" />
          <div className="address-phone">
            <p>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <address>Jl. Usman Effendi No. 50 Lowokwaru, Malang</address>
            <p>+62-877-7123-1234</p>
          </div>
        </section>

        <section className="footer-links">
          {/* KATEGORI */}
          <div>
            <div className="footer-links-header" onClick={() => toggleSection('kategori')}>
              <h3>Kategori</h3>
              <img
                className={`chevron ${openSection === 'kategori' ? 'rotate' : ''}`}
                src={Chevron}
                alt=""
              />
            </div>

            <ul className={openSection === 'kategori' ? 'open' : ''}>
              <li>
                <a href="#">Digital & Teknologi</a>
              </li>
              <li>
                <a href="#">Pemasaran</a>
              </li>
              <li>
                <a href="#">Manajemen Bisnis</a>
              </li>
              <li>
                <a href="#">Pengembangan Diri</a>
              </li>
              <li>
                <a href="#">Desain</a>
              </li>
            </ul>
          </div>

          {/* PERUSAHAAN */}
          <div>
            <div className="footer-links-header" onClick={() => toggleSection('perusahaan')}>
              <h3>Perusahaan</h3>
              <img
                className={`chevron ${openSection === 'perusahaan' ? 'rotate' : ''}`}
                src={Chevron}
                alt=""
              />
            </div>

            <ul className={openSection === 'perusahaan' ? 'open' : ''}>
              <li>
                <a href="#">Tentang Kami</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="#">Ketentuan Layanan</a>
              </li>
              <li>
                <a href="#">Bantuan</a>
              </li>
            </ul>
          </div>

          {/* KOMUNITAS */}
          <div>
            <div className="footer-links-header" onClick={() => toggleSection('komunitas')}>
              <h3>Komunitas</h3>
              <img
                className={`chevron ${openSection === 'komunitas' ? 'rotate' : ''}`}
                src={Chevron}
                alt=""
              />
            </div>

            <ul className={openSection === 'komunitas' ? 'open' : ''}>
              <li>
                <a href="#">Tips Sukses</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <hr className="divider" />

      <section className="footer-copyright">
        <div className="socials">
          <img src={Linkedin} alt="LinkedIn" />
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Twitter} alt="Twitter" />
        </div>
        <p>&copy;2023 Gerobak Sayur All Rights Reserved.</p>
      </section>
    </footer>
  );
}

export default Footer;
