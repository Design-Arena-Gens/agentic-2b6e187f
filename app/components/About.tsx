import styles from './About.module.css';

export function About() {
  return (
    <section id="story" className={`${styles.about} section`}>
      <div className={styles.shell}>
        <aside className={styles.storyCard}>
          <span className={styles.kicker}>Crafted narrative</span>
          <h2>The handcrafted bridge between field and office.</h2>
          <p>
            Born inside IT SOUQ LLP, NEXIFY is the synthesis of countless hours alongside field teams,
            service engineers, and client partners. We felt every spreadsheet bottleneck and saw every
            missed update—all the little frictions that steal momentum from teams doing vital work.
          </p>
          <p>
            NEXIFY is our answer: a calming, human platform that keeps operations in flow and clients
            in sync. No clutter. No cold enterprise feel. Just a living system built by people who care
            about the people who use it.
          </p>
          <div className={styles.signatureBox}>
            <span>Developed by IT SOUQ LLP</span>
            <strong>NEXIFY bridges the gap between field and office.</strong>
          </div>
        </aside>
        <div className={styles.snapshots}>
          <div className={styles.snapshotCard}>
            <span className={styles.count}>01</span>
            <h3>Unified operations</h3>
            <p>
              Bring workforce scheduling, route planning, and client briefs together so that teams see
              exactly what matters next.
            </p>
          </div>
          <div className={styles.snapshotCard}>
            <span className={styles.count}>02</span>
            <h3>Human-first collaboration</h3>
            <p>
              Subtle nudges, contextual comments, and ambient activity views keep communication natural
              instead of noisy.
            </p>
          </div>
          <div className={styles.snapshotCard}>
            <span className={styles.count}>03</span>
            <h3>Actionable intelligence</h3>
            <p>
              Spot patterns across clients instantly with living dashboards that transform ground data
              into strategic clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
