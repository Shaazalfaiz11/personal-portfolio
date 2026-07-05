// portfolioData.js
// Centralized configuration file for the portfolio.
// You can edit any value in this file to update the website content instantly.

const portfolioData = {
  personalInfo: {
    firstName: "Shaaz",
    lastName: "Alfaiz",
    initials: "SA",
    tagline: "Hello, I'm",
    fullName: "Shaaz Alfaiz",
    signatureTitle: "Shaaz Alfaiz", // Elegant signature name on profile badge
    subtitle: "Full Stack Developer",
    resumeLink: "Shaaz_Alfaiz_Resume.pdf", // Your resume filename
    bio: "Full Stack Developer specializing in scalable MERN applications, real-time systems, cloud deployment, and modern backend architecture. Passionate about building production-ready software with React, Node.js, MongoDB, Redis, Docker, AWS, and AI-powered solutions.",
    socials: {
      linkedin: "#", // Replace with your LinkedIn URL
      github: "#", // Replace with your GitHub URL
      email: "shaazalfaiz25@gmail.com"
    }
  },
  
  // Roles shown in typing typewriter effect
  roles: [
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Backend Developer",
    "AI Enthusiast",
    "Building Production Applications"
  ],

  // Bottom stats capsule bar on hero page
  stats: [
    {
      value: "2",
      label: "Years Experience",
      icon: "fa-solid fa-briefcase",
      colorClass: "icon-purple",
      isStatic: false
    },
    {
      value: "4",
      label: "Production Projects",
      icon: "fa-solid fa-code",
      colorClass: "icon-cyan",
      isStatic: false
    },
    {
      value: "1000",
      label: "Hours of Development",
      icon: "fa-solid fa-laptop-code",
      colorClass: "icon-pink",
      isStatic: false
    },
    {
      value: "7.1",
      label: "CGPA",
      icon: "fa-solid fa-graduation-cap",
      colorClass: "icon-blue",
      isStatic: false
    },
    {
      value: "AWS",
      label: "Cloud & DevOps",
      icon: "fa-solid fa-cloud",
      colorClass: "icon-purple",
      isStatic: true
    }
  ],

  // About me section bullet points and card statistics
  about: {
    metaTag: "ABOUT ME",
    title: "Who I Am",
    bullets: [
      {
        text: "Recently graduated B.Tech Computer Science Engineer",
        icon: "fa-solid fa-graduation-cap",
        colorClass: "purple"
      },
      {
        text: "Experienced Full Stack MERN Developer",
        icon: "fa-solid fa-code",
        colorClass: "cyan"
      },
      {
        text: "Building scalable real-time web applications",
        icon: "fa-solid fa-server",
        colorClass: "pink"
      },
      {
        text: "Experienced with Docker, Redis, AWS & CI/CD",
        icon: "fa-solid fa-cloud",
        colorClass: "blue"
      },
      {
        text: "Passionate about AI Engineering & System Design",
        icon: "fa-solid fa-brain",
        colorClass: "purple"
      }
    ],
    stats: [
      {
        value: "7.1",
        label: "CGPA<br>(B.Tech)",
        icon: "fa-solid fa-graduation-cap",
        borderColorClass: "border-blue",
        target: "7.1"
      },
      {
        value: "4",
        label: "Production<br>Projects",
        icon: "fa-solid fa-code",
        borderColorClass: "border-cyan",
        target: "4"
      },
      {
        value: "2",
        label: "Years<br>Experience",
        icon: "fa-solid fa-briefcase",
        borderColorClass: "border-purple",
        target: "2"
      },
      {
        value: "1000",
        label: "Hours of<br>Dev",
        icon: "fa-solid fa-laptop-code",
        borderColorClass: "border-pink",
        target: "1000"
      },
      {
        value: "AWS",
        label: "Cloud<br>Infra",
        icon: "fa-solid fa-cloud",
        borderColorClass: "border-purple",
        target: "AWS",
        isStatic: true
      }
    ]
  },

  // Education Timeline (Horizontal Timeline)
  education: [
    {
      timeRange: "2022 – Present",
      degree: "Bachelor of Technology (Computer Science Engineering)",
      institution: "KCC Institute of Technology & Management",
      badge: "CGPA 7.1/10",
      nodeClass: "glow-purple",
      cardBorderClass: "border-purple",
      nodeIcon: "fa-solid fa-graduation-cap",
      coursework: {
        title: "Relevant Coursework",
        items: [
          "Data Structures",
          "Algorithms",
          "DBMS",
          "Operating Systems",
          "Computer Networks",
          "System Design"
        ]
      }
    }
  ],

  // Experience Section (Vertical Timeline)
  experience: {
    quote: "I enjoy building production-ready software that solves real-world business problems.",
    jobs: [
      {
        timeRange: "Apr 2026 – Present",
        role: "Full Stack Developer",
        company: "Grow Spark Consulting",
        colorClass: "text-pink",
        nodeClass: "glow-pink",
        nodeIcon: "fa-solid fa-briefcase",
        description: "Developed scalable MERN applications including Order Management, Admin Dashboard, Attendance Management System, Redis caching, Docker containerization, AWS deployment, Socket.io real-time systems, JWT authentication and CI/CD pipelines."
      },
      {
        timeRange: "Sep 2025 – Jan 2026",
        role: "Founder & Full Stack Developer",
        company: "DishPop",
        colorClass: "text-cyan",
        nodeClass: "glow-cyan",
        nodeIcon: "fa-solid fa-store",
        description: "Built a Restaurant Technology Platform with AR Menu, Billing System, Live Order Tracking, Customer Analytics Dashboard and complete MERN architecture."
      }
    ]
  },

  // Projects Listed in Carousel
  projects: [
    {
      title: "DreamFit Couture ERP",
      description: "Production tailoring ERP featuring Order Management, Customer Management, Attendance, Inventory, Dashboard Analytics, Role-Based Access Control and Measurement Management.",
      image: "dreamfit.png",
      borderClass: "border-purple",
      iconClass: "fa-solid fa-gears text-purple",
      tags: ["React", "Node.js", "MongoDB", "Redis", "Socket.io", "Docker", "AWS"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "DishPop",
      description: "Restaurant technology platform featuring AR Menu, Billing System, Live Order Tracking and Analytics Dashboard.",
      image: "dishpop.png",
      borderClass: "border-cyan",
      iconClass: "fa-solid fa-store text-cyan",
      tags: ["React", "Node.js", "MongoDB", "Express", "REST API"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Orry Chat Application",
      description: "Real-time chat platform supporting JWT Authentication, Redis Caching, Online Presence, Typing Indicator and Socket.io communication.",
      image: "orry.png",
      borderClass: "border-pink",
      iconClass: "fa-solid fa-comments text-pink",
      tags: ["React", "Socket.io", "Redis", "MongoDB"],
      liveDemo: "#",
      github: "#"
    },
    {
      title: "EKLAVYA",
      description: "AI-powered adaptive learning platform built for Smart India Hackathon with personalized learning recommendations.",
      image: "eklavya.png",
      borderClass: "border-blue",
      iconClass: "fa-solid fa-brain text-blue",
      tags: ["AI", "Machine Learning", "Recommendation System"],
      liveDemo: "#",
      github: "#"
    }
  ],

  // Technical Skills Listed by Category with dynamic icons mapped
  skills: [
    {
      category: "Languages",
      iconClass: "fa-solid fa-code",
      colorClass: "circle-purple",
      timelineClass: "timeline-purple",
      items: [
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "SQL", icon: "fa-solid fa-database", isFontAwesome: true, iconStyle: "color: #3b82f6;" }
      ]
    },
    {
      category: "Frontend",
      iconClass: "fa-solid fa-laptop-code",
      colorClass: "circle-cyan",
      timelineClass: "timeline-cyan",
      items: [
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" }
      ]
    },
    {
      category: "Backend",
      iconClass: "fa-solid fa-server",
      colorClass: "circle-pink",
      timelineClass: "timeline-pink",
      items: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original", iconStyle: "color: #ffffff;" },
        { name: "REST APIs", icon: "fa-solid fa-gears", isFontAwesome: true, iconStyle: "color: #10b981;" },
        { name: "JWT", icon: "fa-solid fa-key", isFontAwesome: true, iconStyle: "color: #f59e0b;" },
        { name: "RBAC", icon: "fa-solid fa-user-shield", isFontAwesome: true, iconStyle: "color: #f472b6;" },
        { name: "MVC", icon: "fa-solid fa-cubes", isFontAwesome: true, iconStyle: "color: #3b82f6;" }
      ]
    },
    {
      category: "Databases",
      iconClass: "fa-solid fa-database",
      colorClass: "circle-purple",
      timelineClass: "timeline-purple",
      items: [
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Redis", icon: "devicon-redis-plain colored" }
      ]
    },
    {
      category: "Cloud & DevOps",
      iconClass: "fa-solid fa-cloud",
      colorClass: "circle-cyan",
      timelineClass: "timeline-cyan",
      items: [
        { name: "AWS EC2", icon: "devicon-amazonwebservices-plain colored" },
        { name: "AWS S3", icon: "devicon-amazonwebservices-plain colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "CI/CD", icon: "fa-solid fa-arrows-spin", isFontAwesome: true, iconStyle: "color: #ef4444;" },
        { name: "GitHub Actions", icon: "devicon-github-original", iconStyle: "color: #ffffff;" },
        { name: "Linux", icon: "devicon-linux-plain colored" }
      ]
    },
    {
      category: "Real-Time",
      iconClass: "fa-solid fa-bolt",
      colorClass: "circle-pink",
      timelineClass: "timeline-pink",
      items: [
        { name: "Socket.io", icon: "devicon-socketio-original", iconStyle: "color: #ffffff;" },
        { name: "WebSockets", icon: "fa-solid fa-plug", isFontAwesome: true, iconStyle: "color: #10b981;" },
        { name: "Event Driven", icon: "fa-solid fa-bolt", isFontAwesome: true, iconStyle: "color: #f59e0b;" }
      ]
    },
    {
      category: "Tools",
      iconClass: "fa-solid fa-toolbox",
      colorClass: "circle-purple",
      timelineClass: "timeline-purple",
      items: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "fa-brands fa-github", isFontAwesome: true, iconStyle: "color: #ffffff;" },
        { name: "Postman", icon: "devicon-postman-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Atlas", icon: "devicon-mongodb-plain colored" }
      ]
    },
    {
      category: "CS Fundamentals",
      iconClass: "fa-solid fa-graduation-cap",
      colorClass: "circle-cyan",
      timelineClass: "timeline-cyan",
      items: [
        { name: "DSA", icon: "fa-solid fa-diagram-project", isFontAwesome: true, iconStyle: "color: #10b981;" },
        { name: "OOP", icon: "fa-solid fa-object-group", isFontAwesome: true, iconStyle: "color: #3b82f6;" },
        { name: "DBMS", icon: "fa-solid fa-database", isFontAwesome: true, iconStyle: "color: #a78bfa;" },
        { name: "OS", icon: "fa-solid fa-desktop", isFontAwesome: true, iconStyle: "color: #f472b6;" },
        { name: "Networks", icon: "fa-solid fa-network-wired", isFontAwesome: true, iconStyle: "color: #ef4444;" },
        { name: "System Design", icon: "fa-solid fa-sitemap", isFontAwesome: true, iconStyle: "color: #f59e0b;" }
      ]
    }
  ],

  // Certifications Section (Side-By-Side Row)
  certifications: [
    {
      name: "The Complete Full Stack Web Development Bootcamp",
      issuer: "Dr. Angela Yu (Udemy)",
      logoText: "Udemy",
      logoClass: "udemy-logo",
      textClass: "logo-txt-orange",
      link: "#"
    }
  ],

  // Current Focus Section (Side-By-Side Row)
  focus: [
    {
      title: "AI Engineering",
      icon: "fa-solid fa-brain",
      glowClass: "glow-purple",
      borderClass: "border-purple"
    },
    {
      title: "System Design",
      icon: "fa-solid fa-diagram-project",
      glowClass: "glow-blue",
      borderClass: "border-blue"
    },
    {
      title: "Cloud & DevOps",
      icon: "fa-solid fa-cloud",
      glowClass: "glow-cyan",
      borderClass: "border-cyan"
    },
    {
      title: "Backend Engineering",
      icon: "fa-solid fa-server",
      glowClass: "glow-pink",
      borderClass: "border-pink"
    }
  ],

  // Contact section configurations
  contact: {
    title: "Let's Build Something Great Together!",
    subtitle: "Have a project in mind, want to collaborate, or looking for a developer? I'd love to hear from you!",
    form: {
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your Message",
      buttonText: "Send Message"
    }
  }
};
