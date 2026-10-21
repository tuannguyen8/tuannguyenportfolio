import { Link } from 'react-router-dom';
import { contact } from '../data/contact.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container site-footer__inner">
        <p className="site-footer__message">
          Let’s make something useful.
        </p>

        <nav
          className="site-footer__links"
          aria-label="Footer contact links"
        >
          <a href={`mailto:${contact.email}`}>
            Email <span aria-hidden="true">↗</span>
          </a>

          {contact.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </nav>

        <Link
          className="site-footer__brand"
          to="/#top"
          aria-label="Tuan Nguyen — back to home"
          onClick={() => {
            requestAnimationFrame(() => {
              window.scrollTo({ top: 0, behavior: 'auto' });
            });
          }}
        >
          TN.
        </Link>
      </div>
    </footer>
  );
}