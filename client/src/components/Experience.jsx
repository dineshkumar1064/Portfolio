import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2>Where I've worked.</h2>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <div className="t-item" key={e.role}>
              <div className="t-dot"></div>
              <div className="t-card">
                <div className="role">{e.role}</div>
                <div className="org">{e.org}</div>
                <span className="t-date">{e.date}</span>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
