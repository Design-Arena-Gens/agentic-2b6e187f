import styles from './Features.module.css';

const features = [
  {
    title: 'Orchestrated scheduling',
    description:
      'Design drag-and-drop rosters with live availability, auto-route optimization, and human overrides that keep logistics soft and adaptable.'
  },
  {
    title: 'Relationship intelligence',
    description:
      'Every client touchpoint is captured in a single organic profile so teams know the story before they step on site.'
  },
  {
    title: 'Field-ready mobility',
    description:
      'Mobile-first experiences give agents crystal clear agendas, offline resilience, and expressive updates from the ground.'
  },
  {
    title: 'Secure, compliant analytics',
    description:
      'Granular permissions paired with privacy-first data views ensure leadership gets clarity without compromising governance.'
  }
];

export function Features() {
  return (
    <section id="features" className={`${styles.wrapper} section`}>
      <div className={styles.header}>
        <span>Platform pillars</span>
        <h2>Designed to harmonize every part of workforce flow.</h2>
        <p>
          NEXIFY blends operational rigor with handcrafted calm. We shape data and workflows into
          tactile journeys that keep people and performance in sync.
        </p>
      </div>
      <div className={styles.grid}>
        {features.map((feature) => (
          <article key={feature.title} className={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
