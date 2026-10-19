import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function ProjectsPage() {
  return (
    <section
      className="projects-section"
      aria-labelledby="all-projects-title"
    >
      <Link className="back-link" to="/">
        <span aria-hidden="true">←</span> Back home
      </Link>

      <div className="section-heading">
        <p className="eyebrow">Project collection</p>
        <h1 id="all-projects-title">All projects</h1>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}