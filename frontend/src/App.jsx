import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx';

export default function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetailsPage />}
          /> 

          <Route
            path="*"
            element={
              <section className="projects-section">
                <div className="section-heading">
                  <p className="eyebrow">404</p>
                  <h1>This page isn’t here.</h1>
                </div>

                <Link className="button" to="/">
                  Back home
                </Link>
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  );
}