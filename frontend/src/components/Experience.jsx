import {
  technicalExperience,
  additionalExperience,
} from '../data/experience.js';

function ExperienceItem({ experience, defaultOpen = false }) {
  return (
    <details className="experience-item" open={defaultOpen}>
      <summary className="experience-item__summary">
        <span className="experience-item__company">
          {experience.company}
        </span>

        <span className="experience-item__role">
          {experience.role}
        </span>

        <span className="experience-item__period">
          {experience.period}
        </span>

        <span
          className="experience-item__toggle"
          aria-hidden="true"
        />
      </summary>

      <div className="experience-item__content">
        {experience.location && (
          <p className="experience-item__location">
            {experience.location}
          </p>
        )}

        <ul>
          {experience.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </div>
    </details>
  );
}

export default function Experience() {
  return (
    <section
      className="experience-section"
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-title"
    >

      <h2 className="eyebrow experience-section__heading" id="experience-title">
        Experience
      </h2>

      <div className="experience-section__list">
        {technicalExperience.map((experience, index) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            defaultOpen={index === 0}
          />
        ))}
      </div>

      <details className="additional-experience">
        <summary className="additional-experience__summary">
          <span>Additional experience</span>
          <span
            className="experience-item__toggle"
            aria-hidden="true"
          />
        </summary>

        <div className="experience-section__list">
          {additionalExperience.map((experience) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </details>
    </section>
  );
}