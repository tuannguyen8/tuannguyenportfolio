const courseworkGroups = [
	{
		title: 'Software Development',
		courses: [
			'Full-Stack Web Development',
			'Front-End Web Development',
			'Database Management Systems',
			'Software Engineering',
			'Internet, Web, and Cloud Systems',
			'Code Revision and Review',
		],
	},
	{
		title: 'Security & Privacy',
		courses: [
			'Web and Cloud Security',
			'Introduction to Computer Security',
			'Introduction to Privacy-Aware Computing',
		],
	},
];

export default function Education() {
	return (
		<section className="education-section" aria-labelledby="education-title">
			<div className="education-section__heading">
				<p className="eyebrow">Education</p>
				<h2 id="education-title">Portland State University</h2>
			</div>

			<div className="education-section__content">
				<div className="education-section__degree">
					<h3>M.S. Computer Science</h3>
					<p>Expected June 2027</p>
				</div>

				<p className="education-section__gpa">Graduate GPA: 3.76 / 4.00</p>

				<div className="education-section__degree">
					<h3>B.S. Computer Science</h3>
					<p>March 2022</p>
				</div>

				<p className="education-section__minor">Mathematics Minor</p>

				<p className="education-section__gpa">PSU GPA: 3.43 / 4.00</p>

				<details className="education-section__coursework">
					<summary>Selected coursework</summary>

					<div className="education-section__coursework-grid">
						{courseworkGroups.map((group) => (
							<div key={group.title}>
								<h3>{group.title}</h3>

								<ul>
									{group.courses.map((course) => (
										<li key={course}>{course}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</details>
			</div>
		</section>
	);
}
