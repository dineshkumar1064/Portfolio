import { useState } from 'react';
import { navLinks, profile } from '../data/portfolioData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header>
      <nav className="wrap">
        <div className="logo">
          <span className="logo-mark">{profile.initials}</span> {profile.name.toUpperCase()}
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="/resume/Dinesh-Kumar-S-Resume.pdf"
          download="Dinesh-Kumar-S-Resume.pdf"
          className="btn btn-ghost btn-sm resume-btn"
        >
          Resume ↓
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a
          href="/resume/Dinesh-Kumar-S-Resume.pdf"
          download="Dinesh-Kumar-S-Resume.pdf"
          className="btn btn-primary mobile-resume-btn"
          onClick={closeMenu}
        >
          Resume ↓
        </a>
      </div>
    </header>
  );
}
