import { techStack } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Tech stack</p>
          <h2>Tools I reach for.</h2>
        </div>
        <div className="stack-grid">
          {techStack.map((s) => (
            <div className="stack-card" key={s.title}>
              <div className={`icon ${s.cls}`}>{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
