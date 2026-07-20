export const site = {
  brand: '<sherwin-dev />',
  name: 'Neil Sherwin Velasquez',
  shortName: 'Sherwin',
  role: 'Shopify Developer / Web Developer',
  tagline: 'I design and code clean, practical solutions — and I love what I do.',
  location: 'Nueva Ecija, Philippines',
  email: 'vneilsherwin.dev@gmail.com',
  citizenship: 'Filipino',
  birthdate: '1998-07-31',
  github: 'https://github.com/vsherwin-dev',
  linkedin: 'https://www.linkedin.com/in/neil-sherwin-velasquez-781632239/',
  twitter: 'https://twitter.com/sherwinonlyy',
  facebook: 'https://www.facebook.com/sherwinonlyy',
  instagram: 'https://www.instagram.com/hoysherwin/',
  about: [
    "Hello! I'm Neil Sherwin, a web developer from Nueva Ecija, Philippines. I specialize in building and customizing websites, with strong experience in Shopify and WordPress.",
    'I build and customize Shopify themes, maintain client websites, and bring a QA mindset from my background as a Project Analyst / Quality Assurance engineer.',
  ],
};

export function getAge(birthdate = site.birthdate) {
  const birth = new Date(birthdate);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const hasBirthdayPassed =
    now.getMonth() > birth.getMonth() ||
    (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
  return hasBirthdayPassed ? age : age - 1;
}

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  link?: string;
};

export const experience: ExperienceItem[] = [
  {
    role: 'Shopify Developer',
    company: 'Newfive',
    period: 'May 2025 – Present',
    link: 'https://newfive.com/',
    bullets: [
      'Building and customizing Shopify themes and storefronts for e-commerce brands.',
      'Implementing theme features, Liquid templates, and front-end improvements that support conversion and performance.',
      'Collaborating with the team on Shopify development as part of a broader commerce stack.',
      'Supporting ongoing store maintenance, optimizations, and client delivery.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    period: 'Oct 2018 – Present',
    bullets: [],
  },
  {
    role: 'Shopify Theme Developer',
    company: 'The Gift Group',
    period: 'Sept 2023 – Present (on-call since May 2024)',
    bullets: [
      'Transitioned from full-time to on-call support in May 2024.',
      'Creating and integrating custom Shopify themes and templates.',
      'Customizing Shopify apps and plugins to extend website functionality.',
      'Writing functional requirement documents and guides.',
      'Optimizing websites for SEO and ensuring proper implementation of tracking codes.',
    ],
  },
  {
    role: 'Shopify Theme Developer',
    company: 'Slash Staffing',
    period: 'Jul 2024 – Nov 2025',
    bullets: [
      'Created and integrated custom Shopify themes and templates.',
      'Customized Shopify apps and plugins to extend website functionality.',
      'Wrote functional requirement documents and guides.',
      'Optimized websites for SEO and ensured proper implementation of tracking codes.',
    ],
  },
  {
    role: 'Shopify Theme Developer',
    company: 'Selluxe Coding',
    period: 'Feb 2024 – Jun 2024',
    bullets: [
      'Created and integrated custom Shopify themes and templates.',
      'Customized Shopify apps and plugins to extend website functionality.',
      'Wrote functional requirement documents and guides.',
      'Optimized websites for SEO and ensured proper implementation of tracking codes.',
    ],
  },
  {
    role: 'Shopify Theme Developer & Bootcamp Instructor',
    company: 'Element Code Camp',
    period: 'Feb 2023 – Nov 2023',
    bullets: [
      'Maintained and improved client websites.',
      'Built WordPress themes and plugins.',
      'Wrote functional requirement documents and guides.',
      'Executed and evaluated manual test cases and reported test results.',
      'Served as an instructor in a web development bootcamp.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Inspree Marketing & Design',
    period: 'Apr 2022 – Dec 2022',
    bullets: [
      'Maintained and improved client websites.',
      'Built WordPress themes and plugins.',
      'Created React.js components.',
      'Wrote functional requirement documents and guides.',
      'Executed and evaluated manual test cases and reported test results.',
      'Reviewed code for standards, structure, and cross-browser compatibility.',
    ],
  },
  {
    role: 'Project Analyst / Quality Assurance',
    company: 'FurtherEdge Corp.',
    period: 'May 2021 – Feb 2022',
    bullets: [
      'Reviewed functional and design specifications to ensure a clear understanding of deliverables.',
      'Developed, documented, and maintained functional test cases and related test artifacts.',
      'Executed and evaluated manual test cases and reported test results.',
      'Performed backend database testing in Microsoft SQL Server, including validating jobs and triggers.',
    ],
  },
  {
    role: 'Data Analyst',
    company: 'Datahold Philippines Inc.',
    period: 'Mar 2019 – Sept 2019',
    bullets: [
      'Interpreted data, analyzed results, and provided ongoing reports.',
      'Identified and interpreted trends and patterns in complex data sets.',
      'Filtered and cleaned data review reports and performance indicators.',
    ],
  },
  {
    role: 'OJT – IT Support',
    company: 'NIA–UPRIIS',
    period: 'Sept 2017 – Apr 2018',
    bullets: ['Supported clerical and IT support duties.'],
  },
];

export const education = [
  {
    level: 'Tertiary',
    degree: 'Bachelor of Science in Computer Science',
    school: 'AMA Computer College, Cabanatuan City, Nueva Ecija',
    period: '2015 – 2018',
  },
  {
    level: 'Secondary',
    degree: 'Secondary Education',
    school: 'Gabaldon Essential Academy, Gabaldon, Nueva Ecija',
    period: '',
  },
];

export const skills = {
  coding: [
    { name: 'HTML / CSS', level: 95 },
    { name: 'Vanilla JavaScript', level: 90 },
    { name: 'Shopify', level: 90 },
    { name: 'React.js / Express.js / Node.js', level: 70 },
    { name: 'PHP / MySQL / WordPress / Laravel', level: 70 },
  ],
  knowledge: [
    'Microsoft Office',
    'Application testing (UFT, LoadRunner)',
    'Microsoft SQL Server',
    'GitHub and Azure DevOps',
    'Bootstrap',
    'Photoshop',
    'Web design',
  ],
  certificates: [
    'The 15th Youth Congress on Information Technology (Y4iT) — Nov 7, 2017',
    'Fundamentals of Web Development — Feb 9, 2019',
    'freeCodeCamp Responsive Web Design — Feb 15, 2022',
  ],
  tags: {
    Languages: ['HTML/CSS', 'JavaScript', 'PHP'],
    Frontend: ['React', 'Shopify Liquid', 'Bootstrap'],
    Backend: ['Node.js', 'Express', 'MySQL', 'Laravel'],
    Tools: ['GitHub', 'Azure DevOps', 'WordPress', 'Photoshop'],
  },
};

export const services = [
  {
    title: 'Front-end',
    description:
      'Turning requirements into polished interfaces with HTML, CSS, and JavaScript.',
  },
  {
    title: 'Web Development',
    description:
      'Building and maintaining websites for businesses and client projects.',
  },
  {
    title: 'Shopify Themes',
    description:
      'Custom Shopify themes, Liquid templates, and storefront functionality.',
  },
  {
    title: 'WordPress',
    description:
      'Themes, plugins, and ongoing maintenance for WordPress sites.',
  },
  {
    title: 'QA / Testing',
    description:
      'Manual test cases, validation, and quality checks across deliverables.',
  },
  {
    title: 'Support',
    description:
      'Reliable ongoing support for client sites as requirements grow.',
  },
];
