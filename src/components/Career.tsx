import "./styles/Career.css";
import { config } from "../config";
import { FaTrophy, FaCertificate } from "react-icons/fa6";

const getEndYear = (period: string) => {
  if (period.includes("Present")) return "NOW";
  const parts = period.split(/\s*[-–—]\s*/);
  const end = parts[parts.length - 1];
  const yearMatch = end.match(/\d{4}/);
  return yearMatch ? yearMatch[0] : end;
};

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {config.experiences.map((exp, index) => (
            <div key={index} className="career-info-box">
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.position}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{getEndYear(exp.period)}</h3>
              </div>
              <div className="career-desc-wrap">
                <p>{exp.description}</p>
                {exp.technologies && (
                  <div className="career-tags-flex">
                    {exp.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="career-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Certifications Showcase */}
        <div className="career-extra-grid">
          <div className="career-extra-card">
            <div className="career-extra-header">
              <FaTrophy className="career-extra-icon" />
              <h3>Achievements</h3>
            </div>
            <div className="career-extra-list">
              {config.achievements.map((item, idx) => (
                <div key={idx} className="career-extra-item">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="career-extra-card">
            <div className="career-extra-header">
              <FaCertificate className="career-extra-icon" />
              <h3>Certifications</h3>
            </div>
            <div className="career-extra-list">
              {config.certifications.map((item, idx) => (
                <div key={idx} className="career-extra-item">
                  <h4>{item.name}</h4>
                  <p>{item.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
