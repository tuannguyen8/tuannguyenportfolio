import { Link } from 'react-router-dom';
import { contact } from '../data/contact.js';

function SocialIcon({ label }) {
	const name = label.toLowerCase();

	if (name === 'github') {
		return (
			<svg
				className="site-footer__icon"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.103.773-.244.773-.543 0-.267-.01-.975-.015-1.913-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.023-.7.078-.686.078-.686 1.13.08 1.724 1.16 1.724 1.16 1.006 1.724 2.64 1.226 3.283.938.102-.729.394-1.226.715-1.508-2.498-.284-5.124-1.249-5.124-5.563 0-1.229.44-2.234 1.16-3.021-.116-.285-.503-1.429.11-2.978 0 0 .945-.303 3.094 1.154a10.79 10.79 0 0 1 5.625 0c2.148-1.457 3.092-1.154 3.092-1.154.615 1.55.228 2.693.112 2.978.722.787 1.158 1.792 1.158 3.021 0 4.325-2.63 5.276-5.136 5.555.404.35.765 1.04.765 2.096 0 1.513-.014 2.733-.014 3.104 0 .302.203.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
			</svg>
		);
	}

	if (name === 'linkedin') {
		return (
			<svg
				className="site-footer__icon"
				viewBox="0 0 24 24"
				fill="currentColor"
				aria-hidden="true"
				focusable="false"
			>
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
			</svg>
		);
	}

	return null;
}

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="page-container site-footer__inner">
				<p className="site-footer__message">
					© {new Date().getFullYear()} Tuan Nguyen
				</p>

				<nav
					className="site-footer__links"
					aria-label="Footer contact links"
				>
					<a href={`mailto:${contact.email}`}>
						{contact.email}
					</a>

					{contact.socialLinks.map((link) => (
						<a
							key={link.label}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<SocialIcon label={link.label} />
							<span>{link.label}</span>
							<span aria-hidden="true">↗</span>
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