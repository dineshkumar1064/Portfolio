import { certifications, education } from "../data/portfolioData";
import { Link } from "react-router-dom";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap cert-grid">
  <div className="panel">
    <p className="eyebrow">Certifications</p>
    <h3>Keeping the fundamentals sharp.</h3>

    <ul className="cert-list">
      {certifications.map((c) => (
                  <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${c.title}`}
          >
        <li key={c.id}>
          <span>
            <span className="cdot"></span>
            {c.title}
          </span>


            ↗
          
        </li>
        </a>
      ))}
    </ul>
  </div>
        <div className="panel">
          <p className="eyebrow">Education</p>
          <h3>&nbsp;</h3>
          <div className="edu-row">
            <div className="edu-icon">🎓</div>
            <div>
              <div className="degree">{education.degree}</div>
              <div className="school">{education.school}</div>
              <div className="meta">{education.meta}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
