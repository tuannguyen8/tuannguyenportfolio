import { profile } from '../data/profile.js';

export default function About() {
  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <p className="eyebrow">A little about me</p>
        <h2 id="about-title">Behind the code</h2>
      </div>

      <div className="about-section__layout">
        <div className="about-section__photo">
          <img
            src={profile.photo}
            alt={profile.name}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="about-section__content">
          <p className="about-section__introduction">
            {profile.introduction}
          </p>

          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="about-section__skills">
            {profile.skillGroups.map((group) => (
              <div key={group.title}>
                <h3>{group.title}</h3>

                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}