export const profile = {
  name: 'Tuan Nguyen',

  photo: `${import.meta.env.BASE_URL}img/profile.jpg`,

  introduction:
    'I’m Tuan Nguyen, a software engineer based in Portland, Oregon. I enjoy building web applications and working on both the frontend and backend to make them work well together.',

  paragraphs: [
    'At Seminaut, I worked on an interactive event map, built responsive interfaces, and connected the frontend to backend APIs. During my internship at JNR Networks, I built an automation workflow that collected customer information and created service tickets. These experiences helped me become more comfortable solving problems and working with a team.',
    'I’m pursuing a master’s degree in Computer Science at Portland State University, with an expected graduation in June 2027. My coursework includes computer security, web and cloud security, and privacy-aware computing. I want to keep growing as a full-stack developer and use what I’ve learned about security to build safer applications.',
  ],

  skillGroups: [
    {
      title: 'Languages',
      skills: [
        'JavaScript',
        'TypeScript',
        'Python',
        'C++',
        'Java',
        'SQL',
      ],
    },
    {
      title: 'Frontend',
      skills: [
        'React',
        'HTML',
        'SCSS',
        'Bootstrap',
        'Responsive Design',
      ],
    },
    {
      title: 'Backend & APIs',
      skills: [
        'Node.js',
        'Express',
        'FastAPI',
        'Flask',
        'REST APIs',
      ],
    },
    {
      title: 'Databases',
      skills: [
        'PostgreSQL',
        'MySQL',
        'MongoDB',
        'SQLite',
      ],
    },
    {
      title: 'Tools & Testing',
      skills: [
        'Git',
        'Docker',
        'Postman',
        'pytest',
        'Rewst',
      ],
    },
    {
      title: 'Security Foundations — Coursework',
      skills: [
        'Computer Security',
        'Web & Cloud Security',
        'Privacy-Aware Computing',
      ],
    },
  ],
};