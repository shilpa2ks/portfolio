export const portfolioData = {
  name: "Shilpa Kundumattathil Sivarajan",
  displayName: "Shilpa Kundumattathil Sivarajan",
  role: "Full Stack Software Engineer (Frontend-leaning)",
  roleShort: "Full Stack Software Engineer",
  roleExtended: "(Frontend-leaning)",
  location: "Perth, Australia",
  workRights: "491 Visa",
  email: "shilpa2ks@gmail.com",
  phone: "+61-421280821",
  linkedin: "https://www.linkedin.com/in/shilpa2ks",
  github: "https://github.com/shilpa2ks",
  resumeUrl:
    "https://drive.google.com/file/d/1XQYxYnBZp_uwiKf_gUhdhmQOvjVQvSvI/view?usp=drive_link",

  valueProp:
    "Passionate about UI development and crafting polished user experiences, I also bring strong full-stack capability—contributing to backend services in Java/Spring, working with SQL/data models, and owning delivery end-to-end from architecture and implementation through production releases and on-call support.",

  about:
    "Frontend-leaning Full-Stack Engineer with 14+ years of experience delivering enterprise web platforms at scale. I specialize in modernizing legacy systems into fast, maintainable React/Next.js applications—building pixel-perfect, accessible, fully responsive UIs with TypeScript, designing clean API integrations (GraphQL/REST), and optimizing performance for large user bases.",

  skills: {
    frontend: [
      "ReactJS",
      "TypeScript",
      "Next.js",
      "HTML5",
      "CSS",
      "SCSS",
      "Redux",
      "Redux Saga",
      "Material UI",
      "Responsive Design",
      "Accessibility",
      "Storybook",
      "React Testing Library",
    ],
    apisData: ["GraphQL", "REST API"],
    backend: ["Java", "Spring Boot", "Oracle SQL DB"],
    waysOfWorking: [
      "Agile",
      "Production Support",
      "Team Player",
      "Individual Contributor",
    ],
  },

  experienceHighlights: [
    {
      company: "JP Morgan Chase",
      role: "Senior Associate",
      period: "Nov 2016 - Oct 2025",
      location: "Mumbai, India",
      highlights: [
        "Modernized a core Markets Search platform, rebuilding the experience with ReactJS, TypeScript, Next.js, and GraphQL for ~100,000 users.",
        "Built reusable, scalable UI components with React hooks and enterprise design systems, owned production releases and issue triage, and partnered with QA, Product, and Design teams to deliver intuitive user experiences.",
        "Translated Figma designs into pixel-perfect, responsive UIs aligned with accessibility and performance standards.",
        "Improved performance by refactoring legacy components, implementing list virtualization, and optimizing render cycles (memoization, stable callbacks, and state isolation).",
        "Contributed to backend enhancements using Java, Spring Boot, REST APIs, and Oracle SQL (including stored procedures) to support new features.",
      ],
    },
    {
      company: "JP Morgan Chase",
      role: "Automation Developer",
      period: "Aug 2013 - Nov 2016",
      location: "Mumbai, India",
      highlights: [
        "Designed and maintained automation frameworks and regression suites using Selenium, UFT/QTP, and BPT across business-critical applications.",
        "Improved test efficiency and maintainability through reusable utilities, standards, and framework optimization.",
        "Built internal tooling to analyse SONAR metrics (coverage, bugs, and violations) and automate quality reporting for engineering teams.",
        "Prepared production runbooks and supported release readiness activities to reduce deployment risk.",
        "Delivered training sessions and knowledge transfers for testers and production support teams.",
      ],
    },
    {
      company: "Infosys Limited",
      role: "Test Engineer",
      period: "Mar 2011 - Aug 2013",
      location: "Pune, India",
      highlights: [
        "Built and enhanced software testing frameworks with reusable functions for web, Siebel, and PeopleSoft applications.",
        "Partnered with developers and analysts to define test strategies, test data, and execution plans to ensure comprehensive coverage.",
        "Managed defect tracking and root-cause analysis to reduce production issues and improve overall quality.",
      ],
    },
  ],

  projects: [
    {
      title: "Markets Search Platform Modernization",
      category: "Web development",
      problem:
        "Legacy search platform with outdated technology stack serving ~100,000 users faced performance issues and high maintenance costs.",
      approach:
        "Led frontend modernization using React, TypeScript, Next.js, and GraphQL. Collaborated with backend teams on API contracts and data models.",
      impact:
        "Improved usability, reduced page load times, and significantly lowered maintenance overhead while maintaining service continuity.",
    },
    {
      title: "Performance Optimization Toolkit",
      category: "Applications",
      problem:
        "Large data lists and complex UI components caused render bottlenecks and poor user experience on data-heavy pages.",
      approach:
        "Implemented list virtualization, strategic memoization, stable callbacks, and state isolation patterns across critical components.",
      impact:
        "Achieved smoother scrolling, faster interactions, and reduced memory footprint for users working with large datasets.",
    },
    {
      title: "Quality Metrics Automation",
      category: "Web development",
      problem:
        "Manual SONAR metrics analysis and quality reporting was time-consuming and prone to inconsistencies.",
      approach:
        "Built automated tooling to extract, analyze, and report code quality metrics. Created runbooks and training materials for team adoption.",
      impact:
        "Reduced reporting cycle time, improved consistency in quality tracking, and enabled proactive identification of code health issues.",
    },
  ],

  hobbyProjects: [
    {
      title: "Planet Facts",
      description: "Some interesting facts about each of the planets",
      techStack: ["React", "Next.js", "TypeScript", "Material UI", "SCSS"],
      githubUrl: "https://github.com/shilpa2ks/planets",
      liveUrl: "https://planet-facts-pi.vercel.app/",
    },
  ],

  education: [
    {
      institution: "MVP's College of Engineering, Nashik",
      university: "Pune University",
      degree: "B.E. Electronics & Telecommunications",
      period: "Sep 2006 - May 2010",
    },
  ],

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
};
