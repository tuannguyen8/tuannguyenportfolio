import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index }) {
	const projectUrl = `/projects/${project.id}`;

	return (
		<article className="project-card">
			<div className="project-card__heading">
				<span className="project-card__number" aria-hidden="true">
					{String(index + 1).padStart(2, '0')}
				</span>

				<p className="project-card__category">{project.category}</p>
			</div>

			<Link
				className="project-card__image"
				to={projectUrl}
				aria-label={`View ${project.title}`}
			>
				{project.image ? (
					<img
						src={project.image}
						alt={project.imageAlt}
						loading="lazy"
						decoding="async"
					/>
				) : (
					<div className="project-image-placeholder">
						<span aria-hidden="true">↗</span>
						<p>Project preview coming soon</p>
					</div>
				)}
			</Link>

			<h3 className="project-card__title">{project.title}</h3>

			<p className="project-card__description">{project.description}</p>

			<Link className="project-card__link" to={projectUrl}>
				View project
				<span className="visually-hidden">: {project.title}</span>
				<span aria-hidden="true"> ↗</span>
			</Link>
		</article>
	);
}
