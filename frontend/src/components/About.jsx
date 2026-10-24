import { profile } from '../data/profile.js';

export default function About() {
	return (
		<section
			className="about-section"
			id="about"
			aria-labelledby="about-title"
		>
			<p className="eyebrow about-section__label">About</p>

			<div className="about-section__layout">
				<div className="about-section__photo">
					<img
						src={profile.photo}
						alt={profile.name}
						loading="lazy"
						decoding="async"
					/>
				</div>

				<div className="about-section__content">
					<h2
						className="about-section__introduction"
						id="about-title"
					>
						{profile.introduction.split(profile.name).map((part, index) => (
							<span key={index}>
								{index > 0 && (
									<span className="about-section__name">
										{profile.name}
									</span>
								)}
								{part}
							</span>
						))}
					</h2>

					{profile.paragraphs.map((paragraph) => (
						<p key={paragraph}>{paragraph}</p>
					))}

					<div className="about-section__skills">
						{profile.skillGroups.map((group) => (
							<div key={group.title}>
								<h3>{group.title}</h3>

								<ul>
									{group.skills.map((skill) => (
										<li key={skill}>{skill}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}