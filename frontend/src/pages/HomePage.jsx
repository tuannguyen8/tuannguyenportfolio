import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import About from '../components/About.jsx';
import Experience from '../components/Experience.jsx';
import Education from '../components/Education.jsx';
import Contact from '../components/Contact.jsx';
import { contact } from '../data/contact.js';


export default function HomePage() {
	const featuredProjects = projects.filter((project) => project.featured);

	return (
		<>
      <section
        className="hero"
        id="top"
        aria-labelledby="hero-title"
      >
        <div className="hero__content">
          <p className="eyebrow">
            Software engineer / Portland, Oregon
          </p>

          <h1 id="hero-title">
            Building things
            <br />
            <em>that work.</em>
          </h1>

          <p className="hero__description">
            Web applications, APIs, and automation — built with care.
          </p>

          <div className="hero__actions">
            <a className="button" href="#projects">
              View selected work <span aria-hidden="true">↘</span>
            </a>

            <a
              className="hero__resume"
              href={contact.resumeUrl}
              download="Tuan_Nguyen_Resume.pdf"
            >
              Download resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="hero__artwork">
          <img
            src={`${import.meta.env.BASE_URL}img/hero-artwork.png`}
            alt=""
            width="1536"
            height="1024"
            fetchPriority="high"
            decoding="async"
          />

          <p className="hero__motto">
            <span>Ideas</span>
            <span>Code</span>
            <span>People</span>
            <span>A brighter</span>
            <span>tomorrow</span>
          </p>
        </div>
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
						<ProjectCard key={project.id} project={project} index={index} />
					))}
				</div>

				<div className="projects-section__actions">
					<Link className="button" to="/projects">
						View all projects <span aria-hidden="true">→</span>
					</Link>
				</div>
			</section>
			<About />
      <Experience />
      <Education />
      <Contact />
		</>
	);
}
