import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const whatsappUrl = import.meta.env.VITE_WHATSAPP_NUMBER || 'https://wa.link/z7i9vm';

  return (
    <footer className={`${styles.footer} relative z-10`} aria-label="Pie de página">
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Column 1: Brand */}
          <div className={styles.brandCol}>
            <h2 className={styles.logo}>DERMA.M</h2>
            <p className={styles.subline}>Health for your skin.</p>
            <p className={styles.brandDesc}>
              DERMA.M, LLC es un centro de estética, belleza y salud clínica enfocado en el cuidado integral de la piel, cuerpo y el bienestar general en West Palm Beach, Florida.
            </p>
          </div>

          {/* Column 2: Navegación */}
          <nav className={styles.navCol} aria-label="Navegación del sitio">
            <h3 className={styles.colHeading}>Navegación</h3>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.link}>Inicio</Link></li>
              <li><Link to="/nosotros" className={styles.link}>Nosotros</Link></li>
              <li><Link to="/faciales" className={styles.link}>Tratamientos</Link></li>
              <li><Link to="/contacto" className={styles.link}>Contacto</Link></li>
            </ul>
          </nav>

          {/* Column 3: Tratamientos */}
          <nav className={styles.navCol} aria-label="Enlaces de tratamientos">
            <h3 className={styles.colHeading}>Tratamientos</h3>
            <ul className={styles.linkList}>
              <li><Link to="/limpieza-facial-profunda" className={styles.link}>Limpieza Facial Profunda</Link></li>
              <li><Link to="/prf-y-fibrina" className={styles.link}>PRP y Fibrina</Link></li>
              <li><Link to="/tratamientos-postoperatorios" className={styles.link}>Postoperatorios</Link></li>
              <li><Link to="/faciales" className={styles.link}>Faciales</Link></li>
              <li><Link to="/corporales" className={styles.link}>Corporales</Link></li>
              <li><Link to="/laser-y-luz" className={styles.link}>Láser y Luz</Link></li>
            </ul>
          </nav>

          {/* Column 4: Contacto */}
          <div className={styles.navCol}>
            <h3 className={styles.colHeading}>Contacto</h3>
            <address className={styles.addressBlock}>
              <p className="font-semibold text-sm text-[#F2F0F1] uppercase mb-1">DERMA.M, LLC</p>
              <p className={styles.contactItem}>5707 S Dixie Hwy UNIT D, West Palm Beach, FL 33405</p>
              <p className={styles.contactItem}>
                <a href="tel:+15612535384" className={styles.link}>561 253 5384</a>
              </p>
              <p className={styles.contactItem}>
                <a href="mailto:info@dermamskinhealth.com" className={styles.link}>info@dermamskinhealth.com</a>
              </p>
              <p className={styles.contactItem}>
                <a href={whatsappUrl} className={styles.link} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>
            </address>
         </div>

          {/* Column 5: Aviso */}
          <div className={styles.avisoCol}>
            <h3 className={styles.colHeading}>Aviso Clínico</h3>
            <div className={styles.avisoBox}>
              <p className="text-[11px] leading-relaxed text-[#BBB8B5] font-light mb-2">
                <strong>ES:</strong> La información de este sitio es únicamente educativa y no reemplaza una evaluación profesional. Los resultados varían según cada persona.
              </p>
              <p className="text-[11px] leading-relaxed text-[#BBB8B5]/70 font-light">
                <strong>EN:</strong> Information on this website is for educational purposes only and does not replace a professional evaluation. Results vary by individual.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#F2F0F1]/10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 text-xs tracking-wider text-[#BBB8B5] font-light">
          <p className="order-1">&copy; 2026 Derma.M. Todos los derechos reservados.</p>
          
          <div className="order-2 lg:text-center text-[#BBB8B5]/85">
            Created by: <a href="https://empathoai.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F2F0F1] underline underline-offset-4 transition-colors duration-200">EmpathoAI</a>
          </div>
          
          <div className="order-3 flex flex-wrap items-center gap-3">
            <Link to="/politica-de-privacidad" className="hover:text-[#F2F0F1] transition-colors duration-200">Política de privacidad</Link>
            <span className="text-[#F2F0F1]/20">|</span>
            <Link to="/terminos-de-uso" className="hover:text-[#F2F0F1] transition-colors duration-200">Términos de uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
