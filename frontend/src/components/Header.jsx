import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contact } from '../data/contact.js';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuButtonRef = useRef(null);

	const { pathname } = useLocation();

	function handleSectionClick(sectionId) {
		setMenuOpen(false);

		if (pathname === '/') {
			requestAnimationFrame(() => {
				document.getElementById(sectionId)?.scrollIntoView({
					behavior: 'auto',
					block: 'start',
				});
			});
		}
	}

	useEffect(() => {
		if (!menuOpen) return;

		function handleEscape(event) {
			if (event.key === 'Escape') {
				setMenuOpen(false);
				menuButtonRef.current?.focus();
			}
		}

		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('keydown', handleEscape);
		};
	}, [menuOpen]);

	return (
		<header className="site-header">
			<div className="page-container site-header__inner">

				<Link
					className="site-header__brand"
					to="/#top"
					onClick={() => handleSectionClick('top')}
				>
					Tuan Nguyen
				</Link>
				<button
					ref={menuButtonRef}
					className="site-header__menu-button"
					type="button"
					aria-expanded={menuOpen}
					aria-controls="primary-navigation"
					aria-label={
						menuOpen ? 'Close navigation menu' : 'Open navigation menu'
					}
					onClick={() => setMenuOpen((current) => !current)}
				>
					<span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
				</button>

				<nav
					id="primary-navigation"
					className={`site-header__nav ${
						menuOpen ? 'site-header__nav--open' : ''
					}`}
					aria-label="Main navigation"
				>
					<Link to="/#projects" onClick={() => handleSectionClick('projects')}>
						Work
					</Link>

					<Link to="/#about" onClick={() => handleSectionClick('about')}>
						About
					</Link>

					<Link
						to="/#experience"
						onClick={() => handleSectionClick('experience')}
					>
						Experience
					</Link>

					<Link to="/#contact" onClick={() => handleSectionClick('contact')}>
						Contact
					</Link>

					<a
					className="button header-resume"
					href={contact.resumeUrl}
					download="Tuan_Nguyen_Resume.pdf"
					onClick={() => setMenuOpen(false)}
					>
					Resume <span aria-hidden="true">↗</span>
					</a>
				</nav>
			</div>
		</header>
	);
}
