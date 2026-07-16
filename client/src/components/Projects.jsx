import { motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// A field counts as "filled" only if it exists and isn't an empty/placeholder value
const isFilled = (val) => !!val && val.trim() !== '' && val.trim() !== '#';

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2>Things I've built.</h2>
        </div>
        <motion.div
          className="proj-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((p) => {
            const hasLive = isFilled(p.live);
            const hasVideo = isFilled(p.video);
            const hasCode = isFilled(p.code);
            const hasNothing = !hasLive && !hasVideo && !hasCode;

            return (
              <motion.div className="proj-card" key={p.title} variants={card} whileHover={{ y: -6 }}>
                <div className={`proj-thumb ${p.thumb}`}></div>
                <div className="proj-body">
                  <p className="eyebrow">{p.eyebrow}</p>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                    <ul className="proj-achieve">
                      {p.bullets.map((b) => (
                        <li key={b} dangerouslySetInnerHTML={{ __html: b.replace(/\n/g, '<br/>') }} />
                      ))}
                    </ul>
                    {p.credentials && (
                      <div className="proj-creds">
                        <span className="proj-creds-label">Demo Login:</span>
                        <code>{p.credentials.email} / {p.credentials.password}</code>
                      </div>
                    )}
                  <div className="proj-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="proj-links">
                    {hasLive && (
                      <a className="view-live-btn" href={p.live} target="_blank" rel="noopener noreferrer">
                        View Live ↗
                      </a>
                    )}

                    {hasVideo && (
                      <a className="watch-demo-btn" href={p.video} target="_blank" rel="noopener noreferrer">
                        Watch Demo ▶
                      </a>
                    )}

                    {hasCode && (
                      <a className="code-link" href={p.code} target="_blank" rel="noopener noreferrer">
                        GitHub ↗
                      </a>
                    )}

                    {/* Only shown if literally nothing was provided for this project */}
                    {hasNothing && (
                      <button type="button" className="view-live-btn is-disabled" disabled aria-disabled="true">
                        Links Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}