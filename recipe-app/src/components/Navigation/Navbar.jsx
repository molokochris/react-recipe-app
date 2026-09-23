/**
 * Navbar.jsx
 * Responsive Navigation Header with mobile drawer toggle and live favorites counter badge.
 */

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";
import { useFavorites } from "../../hooks/useFavorites";
import styles from "./Navbar.module.css";

const links = [
  { to: "/", label: "Home", match: (path) => path === "/" },
  { to: "/recipes", label: "Recipes", match: (path) => path.startsWith("/recipes") },
  { to: "/meal-planner", label: "Meal Planner", match: (path) => path === "/meal-planner" },
  { to: "/favorites", label: "Favorites", match: (path) => path === "/favorites" },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { favoritesCount } = useFavorites();

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}>
          <div className={styles.drawer} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.iconBtn}
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <X size={26} />
            </button>
            <nav className={styles.mobileNav}>
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={link.match(location.pathname) ? styles.activeMobile : styles.mobileLink}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {link.to === "/favorites" && favoritesCount > 0 && (
                    <span className={styles.countBadgeMobile}>
                      {favoritesCount}
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      <header className={styles.header}>
        <div className={styles.bar}>
          <button
            type="button"
            className={styles.menuBtn}
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
          >
            <Menu size={26} />
          </button>

          <Logo />

          <nav className={styles.nav}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={link.match(location.pathname) ? styles.active : styles.link}
              >
                {link.label}
                {link.to === "/favorites" && favoritesCount > 0 && (
                  <span className={styles.countBadge}>{favoritesCount}</span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
