import { aboutStats } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-row about-text">
          <p className="eyebrow">About me</p>
          <h2 style={{ marginTop: 10 }}>
            Turning complex problems into simple, intelligent software.
          </h2>
          <p style={{ marginTop: 18 }}>
            I'm a Full Stack MERN Developer with 1.5+ years of experience at Tata Consultancy
            Services (TCS), specializing in LLM integration, RAG pipelines, and AI-powered
            applications.
          </p>
          <p>
            I build scalable web applications using React, Node.js, Express.js and MongoDB, and
            work with LangChain.js, vector databases, and modern LLMs to build AI products that
            solve real-world problems. I enjoy taking a project from a rough idea to a
            production-ready feature — writing clean APIs, thinking through edge cases, and
            making sure the AI layer actually holds up under real usage.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: 8 }}>
            Know more about me →
          </a>
        </div>

        <div className="about-row">
          <div className="achieve-head">
            <h3>Achievements at a glance</h3>
            <span className="eyebrow">By the numbers</span>
          </div>
          <div className="about-stats">
            {aboutStats.map((s) => (
              <div className="card" key={s.lbl}>
                <div className={`icon ${s.cls}`}>{s.icon}</div>
                <div className="num">{s.num}</div>
                <div className="lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
