import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const bookingUrl = import.meta.env.VITE_SQUARE_BOOKING_URL || 'https://squareup.com/appointments/book/h863jjwacvifgt/LVW5A2RBWF1MV/start';
  const whatsappUrl = 'https://wa.link/z7i9vm';

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={styles.header}>
      {/* TOP INFO BAR */}
      <div className={styles.topInfoBar}>
        <div className={styles.topInfoLeft}>
          <span>West Palm Beach / Miami</span>
        </div>
        <div className={styles.topInfoRight}>
          <a href="tel:+15612535384" className={styles.topInfoLink}>
            561 253 5384
          </a>
          <span className={styles.topInfoSeparator}>&middot;</span>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.topInfoLink}
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <div className={styles.navLogoContainer}>
          <Link to="/" className={styles.navLogo} onClick={() => setIsMobileMenuOpen(false)}>
            Derma.M
          </Link>
        </div>

        <div className={styles.navDesktopLinks}>
          <div className={styles.dropdownContainer} ref={dropdownRef}>
            <button
              type="button"
              className={styles.navLinkButton}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              TRATAMIENTOS
              <ChevronDown size={14} strokeWidth={1.5} className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.dropdownIconOpen : ''}`} />
            </button>

            {/* MEGA MENU DROPDOWN */}
            {isDropdownOpen && (
              <div className={styles.megaMenu}>
                <div className={styles.megaMenuGrid}>
                  <div className={styles.megaMenuGroup}>
                    <h3 className={styles.megaMenuHeading}>Tratamientos Destacados</h3>
                    <ul className={styles.megaMenuList}>
                      <li><Link to="/limpieza-facial-profunda" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>Limpieza Facial Profunda</Link></li>
                      <li><Link to="/prf-y-fibrina" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>PRP y Fibrina</Link></li>
                      <li><Link to="/tratamientos-postoperatorios" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>Tratamientos Postoperatorios</Link></li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuGroup}>
                    <h3 className={styles.megaMenuHeading}>Categorías</h3>
                    <ul className={styles.megaMenuList}>
                      <li><Link to="/faciales" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>Faciales</Link></li>
                      <li><Link to="/corporales" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>Corporales</Link></li>
                      <li><Link to="/laser-y-luz" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>Láser y Luz</Link></li>
                      <li><Link to="/dental-estetico" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>Dental Estético</Link></li>
                      <li><Link to="/iv-therapy" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>IV Therapy</Link></li>
                      <li><Link to="/capilar" onClick={() => setIsDropdownOpen(false)} className={styles.megaMenuLink}>Capilar</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/nosotros" className={styles.navLink}>Nosotros</Link>
          <Link to="/contacto" className={styles.navLink}>Contacto</Link>
        </div>

        <div className={styles.navDesktopCta}>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Agenda tu valoración
          </a>
        </div>

        <div className={styles.mobileMenuToggle}>
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuLayer}>
          <div className={styles.mobileMenuScroll}>
            
            <div className={styles.mobileNavSection}>
              <h2 className={styles.mobileNavHeading}>Tratamientos Destacados</h2>
              <ul className={styles.mobileNavList}>
                <li><Link to="/limpieza-facial-profunda" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Limpieza Facial Profunda</Link></li>
                <li><Link to="/prf-y-fibrina" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>PRP y Fibrina</Link></li>
                <li><Link to="/tratamientos-postoperatorios" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Tratamientos Postoperatorios</Link></li>
              </ul>
            </div>

            <div className={styles.mobileNavSection}>
              <h2 className={styles.mobileNavHeading}>Categorías</h2>
              <ul className={styles.mobileNavList}>
                <li><Link to="/faciales" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Faciales</Link></li>
                <li><Link to="/corporales" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Corporales</Link></li>
                <li><Link to="/laser-y-luz" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Láser y Luz</Link></li>
                <li><Link to="/dental-estetico" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Dental Estético</Link></li>
                <li><Link to="/iv-therapy" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>IV Therapy</Link></li>
                <li><Link to="/capilar" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Capilar</Link></li>
              </ul>
            </div>

            <div className={styles.mobileNavSection}>
              <h2 className={styles.mobileNavHeading}>Institucional</h2>
              <ul className={styles.mobileNavList}>
                <li><Link to="/nosotros" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Nosotros</Link></li>
                <li><Link to="/contacto" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileNavLink}>Contacto</Link></li>
              </ul>
            </div>

            <div className={styles.mobileNavActions}>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.mobileCtaPrimary}>
                Agenda tu valoración
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.mobileCtaSecondary}>
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
