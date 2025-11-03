import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={`${styles.hero} section`}>
      <div className={styles.content}>
        <div className={styles.copy}>
          <span className={styles.badge}>Smart Workforce & Client Management</span>
          <h1>
            Handcrafted control for teams that move.
            <span className="gradient-text"> Meet NEXIFY.</span>
          </h1>
          <p>
            Simplify management. Empower your workforce. NEXIFY gives leaders a living dashboard
            across every client engagement and field operation—no spreadsheets, just clarity.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">
              Get Started
            </a>
            <a className={styles.secondary} href="#story">
              Explore the story
            </a>
          </div>
          <ul className={styles.highlights}>
            <li>Fluid scheduling with human-friendly flows</li>
            <li>Real-time visibility between office and field</li>
            <li>Unified client records with actionable insights</li>
          </ul>
        </div>
        <div className={styles.showcase}>
          <div className={styles.mockupCard}>
            <div className={styles.desktopMockup}>
              <div className={styles.desktopHeader}>
                <div />
                <div />
                <div />
              </div>
              <div className={styles.desktopContent}>
                <div className={styles.desktopSidebar}>
                  <span>Teams</span>
                  <span>Clients</span>
                  <span>Insights</span>
                  <span>Routes</span>
                </div>
                <div className={styles.desktopMain}>
                  <h3>Today&apos;s field pulse</h3>
                  <div className={styles.desktopCards}>
                    <div>
                      <strong>24</strong>
                      <span>Active tasks</span>
                    </div>
                    <div>
                      <strong>18</strong>
                      <span>On-site agents</span>
                    </div>
                    <div>
                      <strong>5</strong>
                      <span>Pending approvals</span>
                    </div>
                  </div>
                  <div className={styles.desktopTimeline}>
                    <span>North district briefing</span>
                    <span>Client audit (IT SOUQ)</span>
                    <span>Logistics stand-up</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mobileMockup}>
              <div className={styles.mobileTop}>
                <span />
              </div>
              <div className={styles.mobileBody}>
                <h4>Agent timeline</h4>
                <div className={styles.mobileList}>
                  <div>
                    <span className={styles.statusDot} />
                    <div>
                      <strong>Site check-in</strong>
                      <small>08:45 • Downtown cluster</small>
                    </div>
                  </div>
                  <div>
                    <span className={styles.statusDot} />
                    <div>
                      <strong>Client update shared</strong>
                      <small>09:20 • NEXIFY workspace</small>
                    </div>
                  </div>
                  <div>
                    <span className={styles.statusDot} />
                    <div>
                      <strong>Approval pending</strong>
                      <small>10:05 • Office team</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
