import { About } from './components/About';
import { CallToAction } from './components/CallToAction';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Workflow } from './components/Workflow';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Workflow />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
