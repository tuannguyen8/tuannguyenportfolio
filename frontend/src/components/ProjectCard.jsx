export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card__heading">
        <span className="project-card__number" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>

        <p className="project-card__category">{project.category}</p>
      </div>

      <div className="project-card__image">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
        />
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
    </article>
  );
}