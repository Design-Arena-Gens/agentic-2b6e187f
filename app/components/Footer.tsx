import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={`${styles.footer} section`}>
      <div className={styles.inner}>
        <div>
          <span className={styles.logo}>NEXIFY</span>
          <p>
            A smart workforce and client management platform handcrafted by IT SOUQ LLP. Built to
            keep teams human, connected, and in control.
          </p>
        </div>
        <div className={styles.meta}>
          <span>© {new Date().getFullYear()} IT SOUQ LLP. All rights reserved.</span>
          <div className={styles.links}>
            <a href="#features">Features</a>
            <a href="#workflow">Workflow</a>
            <a href="#story">Story</a>
            <a href="#contact">Get Started</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
