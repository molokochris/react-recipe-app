/**
 * Footer.jsx
 * Global site footer with branding, support links, social icons, and copyright.
 */

import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ShareMenu from "./ShareMenu";
import styles from "./common.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerGrid}>
          <div>
            <Link to="/" className={styles.footerBrand} aria-label="Platr home">
              <img src="/assets/images/platr-logo.png" alt="Platr" />
            </Link>
            <p>Elevating your daily meal planning with simplicity and style.</p>
          </div>
          <div className={styles.footerLinks}>
            <span className={styles.footerTitle}>Support</span>
            <a href="#help">Help Center</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
          <div>
            <span className={styles.footerTitle}>Social</span>
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/molokochris"
                target="_blank"
                rel="noreferrer"
                aria-label="Moloko Chris on LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="https://www.instagram.com/molokochris"
                target="_blank"
                rel="noreferrer"
                aria-label="Moloko Chris on Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://github.com/molokochris"
                target="_blank"
                rel="noreferrer"
                aria-label="Moloko Chris on GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="mailto:molokochrisp742@gmail.com"
                aria-label="Email Moloko Chris"
              >
                <Mail size={20} />
              </a>
              <ShareMenu />
            </div>
          </div>
        </div>
        <div className={styles.copy}>© 2024 Platr Inc. Freshly Prepared.</div>
      </div>
    </footer>
  );
}
