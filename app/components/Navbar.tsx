'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#story', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.wrapper}>
      <div className={styles.branding}>
        <div className={styles.logo}>NEXIFY</div>
        <span className={styles.tagline}>Handcrafted by IT SOUQ LLP</span>
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
      </button>
      <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className={styles.primaryCta} href="#contact" onClick={() => setOpen(false)}>
          Get Started
        </Link>
      </nav>
    </header>
  );
}
