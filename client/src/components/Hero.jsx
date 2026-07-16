import { motion } from 'framer-motion';
import { heroStats, heroTags, glanceItems } from '../data/portfolioData';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="home-hero">
      <div className="wrap hero-grid">
        <motion.div className="hero-content" initial="hidden" animate="show">
          <motion.p className="eyebrow" variants={fadeUp} custom={0}>
            Hi, I'm Dinesh
          </motion.p>
          <motion.h1 variants={fadeUp} custom={0.1}>
            <span className="accent">Full Stack Developer</span><br />
            Stack so clean, <br/>AI soo mean...
            
            {/* <span className="accent">Stack </span>so clean,<br/>
            <span className="accent">AI</span> so mean. */}
          </motion.h1>
          <motion.p className="lede" variants={fadeUp} custom={0.2}>
            I build production web apps with the MERN stack and wire them up to LLMs — RAG
            pipelines, multi-model orchestration, and AI tooling that solves real problems, not
            demos.
          </motion.p>
          <motion.div className="hero-mobile-photo" variants={fadeUp} custom={0.25}>
            <img src="/images/mobile-bg.jpg" alt="Dinesh Kumar" />
          </motion.div>
          <motion.div className="hero-ctas" variants={fadeUp} custom={0.3}>
            <a href="#projects" className="btn btn-primary">
              View my work →
            </a>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => window.dispatchEvent(new CustomEvent('open-chat'))}
            >
              Chat with AI
            </button>
          </motion.div>
          <motion.div className="status-pill" variants={fadeUp} custom={0.4}>
            <span className="dot"></span> Open to Full Stack developer roles
          </motion.div>
          <motion.div className="tag-row" variants={fadeUp} custom={0.5}>
            {heroTags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </motion.div>
          {/* <div className="stat-row">
            {heroStats.map((s) => (
              <div className="stat-card" key={s.lbl}>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>

      {/* <div className="glance-card">
        <p className="eyebrow">At a glance</p>
        <ul>
          {glanceItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div> */}
    </section>
  );
}
