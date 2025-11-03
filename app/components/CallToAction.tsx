import styles from './CallToAction.module.css';

export function CallToAction() {
  return (
    <section id="contact" className={`${styles.wrapper} section`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2>Ready to weave calmer operations?</h2>
          <p>
            Partner with IT SOUQ LLP to tailor NEXIFY for your organization. We co-create onboarding,
            training, and integrations so your teams settle in fast and stay empowered.
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.row}>
            <label>
              <span>Full name</span>
              <input type="text" placeholder="Aarav Patel" required />
            </label>
            <label>
              <span>Work email</span>
              <input type="email" placeholder="team@company.com" required />
            </label>
          </div>
          <label>
            <span>What would you like to streamline?</span>
            <textarea placeholder="Tell us about your workforce or client challenges" rows={4} />
          </label>
          <button type="submit">Start the conversation</button>
        </form>
      </div>
    </section>
  );
}
