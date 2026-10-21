import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects.js';
import { useState } from 'react';
import ImageViewer from '../components/ImageViewer.jsx';

export default function ProjectDetailsPage() {
	const { projectId } = useParams();
	const [viewerIndex, setViewerIndex] = useState(null);

	const projectIndex = projects.findIndex(
		(project) => project.id === projectId,
	);

	const project = projects[projectIndex];

	if (!project) {
		return (
			<section className="projects-section">
				<div className="section-heading">
					<p className="eyebrow">Project not found</p>
					<h1>This project isn’t here.</h1>
				</div>

				<Link className="button" to="/projects">
					View all projects
				</Link>
			</section>
		);
	}

	const previousProject = projects[projectIndex - 1];
	const nextProject = projects[projectIndex + 1];

	return (
		<article className="project-details">
			<Link className="back-link" to="/projects">
				<span aria-hidden="true">←</span> All projects
			</Link>

			<header className="project-details__header">
				<p className="eyebrow">{project.category}</p>
				<h1>{project.title}</h1>
				<p className="project-details__description">{project.description}</p>
			</header>

			{(project.role || project.technologies?.length > 0) && (
				<section
					className="project-details__overview"
					aria-label="Project overview"
				>
					{project.role && (
						<div>
							<h2>My role</h2>
							<p>{project.role}</p>
						</div>
					)}

					{project.technologies?.length > 0 && (
						<div>
							<h2>Technologies</h2>

							<ul className="project-details__technologies">
								{project.technologies.map((technology) => (
									<li key={technology}>{technology}</li>
								))}
							</ul>
						</div>
					)}
				</section>
			)}

			{project.contributions?.length > 0 && (
				<section
					className="project-details__contributions"
					aria-labelledby="contributions-title"
				>
					<h2 id="contributions-title">My contribution</h2>

					<ul>
						{project.contributions.map((contribution) => (
							<li key={contribution}>{contribution}</li>
						))}
					</ul>
				</section>
			)}

			{project.githubUrl && (
				<div className="project-details__links">
					<a
						className="button"
						href={project.githubUrl}
						target="_blank"
						rel="noopener noreferrer"
					>
						View source code <span aria-hidden="true">↗</span>
					</a>
				</div>
			)}
			{project.image ? (
				<button
					className="project-details__cover"
					type="button"
					aria-label={`Enlarge ${project.title} cover screenshot`}
					onClick={() => setViewerIndex(0)}
				>
					<img src={project.image} alt={project.imageAlt} />
					<span className="project-details__image-hint">
						Click image to enlarge ↗
					</span>
				</button>
			) : (
				<div className="project-image-placeholder">
					<span aria-hidden="true">↗</span>
					<p>Project preview coming soon</p>
				</div>
			)}

			{project.screenshots?.length > 0 && (
				<section
					className="project-details__gallery"
					aria-labelledby="screenshots-title"
				>
					<h2 id="screenshots-title">Project screenshots</h2>

					<div className="project-details__screenshots">
						{project.screenshots.map((screenshot, index) => (
							<figure key={screenshot}>
								<button
									className="project-details__thumbnail"
									type="button"
									aria-label={`Enlarge ${project.title} screenshot ${index + 1}`}
									onClick={() => setViewerIndex(index)}
								>
									<img
										src={screenshot}
										alt={`${project.title} — screenshot ${index + 1}`}
										loading="lazy"
										decoding="async"
									/>
								</button>

								<figcaption>Screenshot {index + 1}</figcaption>
							</figure>
						))}
					</div>
				</section>
			)}

			<nav className="project-details__navigation" aria-label="Other projects">
				<div>
					{previousProject && (
						<Link to={`/projects/${previousProject.id}`}>
							<span aria-hidden="true">←</span> Previous project
							<span className="project-details__navigation-title">
								{previousProject.title}
							</span>
						</Link>
					)}
				</div>

				<div>
					{nextProject && (
						<Link to={`/projects/${nextProject.id}`}>
							Next project <span aria-hidden="true">→</span>
							<span className="project-details__navigation-title">
								{nextProject.title}
							</span>
						</Link>
					)}
				</div>
			</nav>

			{viewerIndex !== null && project.screenshots.length > 0 && (
				<ImageViewer
					images={project.screenshots}
					initialIndex={viewerIndex}
					projectTitle={project.title}
					onClose={() => setViewerIndex(null)}
				/>
			)}
		</article>
	);
}
