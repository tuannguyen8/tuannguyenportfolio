import Header from './components/Header.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import { projects } from './data/projects.js';

export default function App() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Header />

      <main
        className="page-container"
        id="main-content"
        tabIndex={-1}
      >
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Software engineer / Portland, Oregon</p>

          <h1 id="hero-title">
            Building things
            <br />
            <em>that work.</em>
          </h1>

          <p className="hero__description">
            Web applications, APIs, and automation — built with care.
          </p>

          <a className="button" href="#projects">
            View selected work <span aria-hidden="true">↘</span>
          </a>
        </section>

        <section
          className="projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="projects-title">Featured projects</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}