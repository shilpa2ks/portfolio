export const portfolioData = {
  name: "Shilpa Kundumattathil Sivarajan",
  headline: "Full Stack Software Engineer(Frontend heavy)",
  tagline: "React, Next.js, TypeScript, GraphQL, Java",
  location: "Perth, Australia",
  workRights: "491 Visa",
  email: "shilpa2ks@gmail.com",
  phone: "+61-421280821",
  linkedin: "https://www.linkedin.com/in/shilpa2ks",
  github: "https://github.com/shilpa2ks",
  resumeUrl: "/resume.pdf",
  
  valueProp: "Building scalable, high-performance web applications that serve hundreds of thousands of users. Passionate about modernizing legacy systems and delivering impactful full-stack solutions.",
  
  about: "Full Stack Engineer with 14+ years of experience delivering high-impact solutions at enterprise scale. Specialized in modernizing legacy platforms into performant, maintainable systems using modern frontend technologies. Proven track record of collaborating across teams to design robust APIs, optimize performance, and own production releases from development through on-call support.",
  
  skills: {
    frontend: ["React", "TypeScript", "Next.js", "CSS", "SCSS", "Redux", "Redux Saga", "Material UI"],
    apisData: ["GraphQL", "REST API"],
    backend: ["Java", "Spring Boot", "Oracle SQL DB"],
    waysOfWorking: ["Agile", "Production Support", "Team Player", "Individual Contributer"],
    
  },
  
  experienceHighlights: [
    {
      company: "JP Morgan Chase",
      role: "Senior Associate",
      period: "Nov 2016 – Oct 2025",
      location: "Mumbai, India",
      highlights: [
        "Rebuilt Markets Search platform (React, TypeScript, Next.js, GraphQL) serving ~100,000 users",
        "Delivered full-stack features; collaborated on API contracts and data models",
        "Performance optimization: list virtualization, memoization, state isolation",
      ],
    },
    {
      company: "JP Morgan Chase",
      role: "Automation Developer",
      period: "Aug 2013 – Nov 2016",
      location: "Mumbai, India",
      highlights: [
        "Built automation frameworks and regression suites (Selenium, UFT/QTP)",
        "Created tooling for SONAR metrics analysis and quality reporting",
      ],
    },
  ],
  
  projects: [
    {
      title: "Markets Search Platform Modernization",
      category: "Frontend Development",
      problem: "Legacy search platform with outdated technology stack serving ~100,000 users faced performance issues and high maintenance costs.",
      approach: "Led frontend modernization using React, TypeScript, Next.js, and GraphQL. Collaborated with backend teams on API contracts and data models.",
      impact: "Improved usability, reduced page load times, and significantly lowered maintenance overhead while maintaining service continuity.",
    },
    {
      title: "Performance Optimization Toolkit",
      category: "Frontend Performance",
      problem: "Large data lists and complex UI components caused render bottlenecks and poor user experience on data-heavy pages.",
      approach: "Implemented list virtualization, strategic memoization, stable callbacks, and state isolation patterns across critical components.",
      impact: "Achieved smoother scrolling, faster interactions, and reduced memory footprint for users working with large datasets.",
    },
    {
      title: "Quality Metrics Automation",
      category: "Internal Tooling",
      problem: "Manual SONAR metrics analysis and quality reporting was time-consuming and prone to inconsistencies.",
      approach: "Built automated tooling to extract, analyze, and report code quality metrics. Created runbooks and training materials for team adoption.",
      impact: "Reduced reporting cycle time, improved consistency in quality tracking, and enabled proactive identification of code health issues.",
    },
  ],
  
  hobbyProjects: [
    {
      title: "Planet Facts",
      description: "Some interesting facts about each of the planets",
      techStack: ["React", "Next.js", "TypeScript", "Material UI", "SCSS"],
      githubUrl: "https://github.com/shilpa2ks/planets",
      liveUrl: "https://planet-facts-pi.vercel.app/",
      // Media options (use one): image, video (mp4), or gif
      // media: { type: "image", url: "/projects/planet-facts.png" },
      // media: { type: "video", url: "/projects/planet-facts.mp4" },
      // media: { type: "gif", url: "/projects/planet-facts.gif" },
    },
    // Add more hobby projects here as they grow
  ],

  education: [
    {
      institution: "MVP's College of Engineering, Nashik",
      university: "Pune University",
      degree: "B.E. Electronics & Telecommunications",
      period: "Sep 2006 – May 2010",
    },
  ],
  
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Hobby Projects", href: "#hobby-projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
}
