import styles from './Workflow.module.css';

const steps = [
  {
    title: 'Capture & assign',
    body: 'Gather client requests or internal briefs in moments, assign the right team, and set intelligent SLAs that adapt as reality shifts.'
  },
  {
    title: 'Field execution',
    body: 'Mobile missions stay synced with HQ. Offline capture, checklists, and geo-tagged updates keep everyone moving together.'
  },
  {
    title: 'Insight loop',
    body: 'Office teams review live streams of updates, track approvals, and trigger nudges while dashboards evolve with each action.'
  },
  {
    title: 'Client delight',
    body: 'Share curated client portals blending progress, documents, and highlights—showing the value you deliver in real time.'
  }
];

export function Workflow() {
  return (
    <section id="workflow" className={`section ${styles.wrapper}`}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span>Flow that feels natural</span>
          <h2>A gentle rhythm from first request to delighted client.</h2>
          <p>
            Every interaction in NEXIFY is designed to feel comfortable under pressure. Teams glide
            from assignment to resolution with smart guardrails instead of rigid walls.
          </p>
        </div>
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <article key={step.title} className={styles.step}>
              <div className={styles.marker}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div className={styles.line} />
              </div>
              <div className={styles.copy}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
