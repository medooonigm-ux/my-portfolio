import profilePhoto from '../assets/profile/photo.jpg';
import certNtiWeb from '../assets/certificates/nti-web-designer.jpg';
import certCreativa from '../assets/certificates/creativa-uiux.jpg';
import certItcRecognition from '../assets/certificates/itc-recognition.jpg';
import certItcAttendance from '../assets/certificates/itc-attendance.jpg';
import certDepi from '../assets/certificates/depi-certificate.jpg';
import certNtiPentest from '../assets/certificates/nti-pentest.jpg';

export const portfolioData = {
  personal: {
    name: "Ahmed Nigm",
    fullName: "Ahmed Mohamed Abdelsalam Nigm",
    title: "Front-End Developer & Cybersecurity Enthusiast",
    statusBadge: "3rd-Year Cybersecurity Student",
    university: "Zagazig University",
    faculty: "Faculty of Computers and Information",
    specialization: "Cybersecurity",
    expectedGraduation: "2028",
    shortBio: "Third-year Cybersecurity student at Zagazig University with practical experience in Front-End web development and hands-on cybersecurity labs.",
    aboutDetailed: [
      "I am Ahmed Nigm, a third-year Cybersecurity student at Zagazig University's Faculty of Computers and Information. My focus bridges modern Front-End Web Development with practical Cybersecurity fundamentals.",
      "In Front-End development, I build clean, responsive, and user-friendly web interfaces using React, JavaScript, and modern CSS. In Cybersecurity, I continually build practical skills through university coursework, hands-on labs on TryHackMe, and specialized training institutes like NTI.",
      "I believe in learning through practical execution: building web apps, completing specialized tech training, and working on security assessments."
    ],
    photo: profilePhoto,
  },

  socials: {
    github: "https://github.com/medooonigm-ux",
    linkedin: "https://www.linkedin.com/in/ahmed-nigm-453b16272/",
    tryhackme: "https://tryhackme.com/p/AhmedNigm",
    email: "medooonigm@gmail.com",
    phone: "+201004970170",
    phoneDisplay: "010 0497 0170",
    whatsapp: "https://wa.me/201004970170",
  },

  skills: {
    frontend: [
      { name: "React", category: "Framework", highlight: true },
      { name: "JavaScript", category: "Language", highlight: true },
      { name: "HTML5", category: "Markup", highlight: false },
      { name: "CSS3", category: "Styling", highlight: false },
      { name: "Bootstrap", category: "CSS Framework", highlight: false },
      { name: "Responsive Web Design", category: "Core Concept", highlight: true },
      { name: "Figma", category: "Design Tool", highlight: false },
    ],
    cybersecurity: [
      { name: "Linux", category: "Operating Systems", highlight: true },
      { name: "Networking", category: "Infrastructure", highlight: true },
      { name: "Web Penetration Testing", category: "Security", highlight: true },
      { name: "Nmap", category: "Reconnaissance", highlight: false },
      { name: "Burp Suite", category: "Web Security", highlight: false },
      { name: "Metasploit", category: "Exploitation & Testing", highlight: false },
      { name: "TryHackMe Labs", category: "Hands-on Practice", highlight: true },
    ],
  },

  projects: [
    {
      id: "movie-app",
      title: "Movie App",
      category: "frontend",
      featured: true,
      technologies: ["React", "JavaScript", "CSS3", "API Integration"],
      description: "A dynamic movie discovery web application built with React and JavaScript, featuring responsive movie cards, clean categorization, and an interactive browsing experience.",
      liveUrl: "https://movie-1-roan.vercel.app/",
      githubUrl: null,
      image: null,
      highlightBadge: "Featured React Project",
    },
    {
      id: "restaurant-website",
      title: "Restaurant Website",
      category: "frontend",
      featured: false,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "A modern, responsive restaurant landing page with an interactive culinary menu, reservation visual layout, and smooth mobile navigation.",
      liveUrl: "https://resturant-1-mu.vercel.app/",
      githubUrl: null,
      image: null,
    },
    {
      id: "bakery-website",
      title: "Bakery Website",
      category: "frontend",
      featured: false,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "A clean, warm commercial website for an artisanal bakery featuring responsive layouts, product highlights, and modern visual hierarchy.",
      liveUrl: "https://bekary-1.vercel.app/",
      githubUrl: null,
      image: null,
    },
    {
      id: "shoes-store",
      title: "Shoes / Brand Store",
      category: "frontend",
      featured: false,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "An e-commerce brand storefront showcasing catalog presentation, responsive item grid, and sleek modern styling.",
      liveUrl: null,
      githubUrl: null,
      image: null,
    },
    {
      id: "client-portfolio",
      title: "Client Portfolio",
      category: "frontend",
      featured: false,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "A custom personal portfolio website built for a client, highlighting personal branding, work showcase, and responsive design across all devices.",
      liveUrl: "https://portofolio-safwat-1.vercel.app/",
      githubUrl: null,
      image: null,
    },
    {
      id: "client-birthday",
      title: "Client Birthday Website",
      category: "frontend",
      featured: false,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "A customized greeting and celebration web project designed for a client with interactive visual elements and celebratory styling.",
      liveUrl: "https://romancy-tawny.vercel.app/",
      githubUrl: null,
      image: null,
    },
    {
      id: "login-page",
      title: "Interactive Login Page",
      category: "frontend",
      featured: false,
      isCompact: true,
      technologies: ["HTML5", "CSS3", "JavaScript"],
      description: "A modern authentication UI screen featuring focused form styling, input validation state styling, and mobile responsiveness.",
      liveUrl: "https://login-pink-ten-49.vercel.app/",
      githubUrl: null,
      image: null,
    },
    {
      id: "pentest-project",
      title: "Penetration Testing Project",
      category: "cybersecurity",
      featured: true,
      technologies: ["Nmap", "Metasploit", "Networking Concepts", "Server Reconnaissance", "Web Penetration Testing"],
      description: "Collaborative team project exploring practical reconnaissance, vulnerability assessment concepts, and controlled testing methodologies using industry standard tools.",
      liveUrl: null,
      githubUrl: null,
      image: null,
      isTeamProject: true,
      highlightBadge: "Team Security Project",
    },
    {
      id: "tryhackme-labs",
      title: "TryHackMe Hands-on Security Labs",
      category: "cybersecurity",
      featured: true,
      technologies: ["Linux", "Network Security", "Web Exploitation", "Reconnaissance", "Security Fundamentals"],
      description: "Practical cybersecurity training labs completed on the TryHackMe platform, covering practical offensive and defensive security fundamentals in live virtual environments.",
      liveUrl: "https://tryhackme.com/p/AhmedNigm",
      githubUrl: null,
      image: null,
      isLabShowcase: true,
      highlightBadge: "Interactive Labs",
    }
  ],

  cybersecurityOverview: {
    teamProject: {
      title: "Penetration Testing Project (Team Project)",
      role: "Team Member — Security & Reconnaissance",
      tools: ["Metasploit", "Nmap", "Networking Concepts", "Server Testing", "Web Security"],
      points: [
        "Conducted network reconnaissance concepts and host discovery utilizing Nmap.",
        "Explored controlled vulnerability assessment concepts and testing methodologies with Metasploit.",
        "Collaborated within a team structure to analyze simulated target environments and document technical findings."
      ]
    },
    tryhackme: {
      platform: "TryHackMe",
      profileUrl: "https://tryhackme.com/p/AhmedNigm",
      username: "AhmedNigm",
      summary: "Actively solving hands-on security rooms and learning paths to sharpen practical skills in Linux terminal navigation, network protocols, and web vulnerability analysis."
    }
  },

  education: {
    institution: "Zagazig University",
    faculty: "Faculty of Computers and Information",
    degree: "Bachelor's Degree in Computer Science",
    specialization: "Cybersecurity",
    status: "Third-Year Student",
    graduationYear: "2028",
    description: "Rigorous academic curriculum covering computer science fundamentals, data structures, algorithms, operating systems, networking, and dedicated cybersecurity domains."
  },

  certifications: [
    {
      id: "nti-web",
      name: "NTI Summer Training — Web Designer",
      track: "Web Designer",
      organization: "National Telecommunication Institute (NTI) & ITIDA",
      duration: "120 Hours (90h Technical, 30h Freelancing)",
      grade: "Score: 95%",
      topics: ["Web Fundamentals", "Responsive Design", "Modern CSS & Layouts", "Interactive Web Pages", "Freelancing Skills"],
      hasCertificate: true,
      image: certNtiWeb,
      imagePlaceholder: null,
      note: "Successfully completed with an outstanding score of 95%. Official Certificate No. 228826."
    },
    {
      id: "creativa",
      name: "Creativa Innovation Hub — UI-UX Design Diploma",
      track: "UI-UX Design Diploma",
      organization: "Creativa Zagazig / ITIDA / TIEC",
      duration: "63 Hours of Intensive Training",
      date: "Nov 2025 - Feb 2026",
      topics: ["User Research", "Wireframing", "Figma Prototyping", "UI Systems", "User Experience Workflow"],
      hasCertificate: true,
      image: certCreativa,
      imagePlaceholder: null,
      note: "Awarded in recognition of dedication and completion of the 63-hour intensive UI-UX training diploma."
    },
    {
      id: "itc-recognition",
      name: "ITC — Certificate of Recognition",
      track: "IT Department Capacity Building Initiative",
      organization: "Information Technology College (ITC)",
      date: "14 July 2026",
      topics: ["Capacity Building", "Professional Dedication", "IT Operations"],
      hasCertificate: true,
      image: certItcRecognition,
      imagePlaceholder: null,
      note: "Awarded in recognition of outstanding achievement, excellence, and professional dedication."
    },
    {
      id: "itc-attendance",
      name: "ITC — Certificate of Attendance",
      track: "Attendance & Active Participation",
      organization: "Information Technology College (ITC)",
      date: "14 July 2026",
      topics: ["Technical Sessions", "IT Workshop Attendance"],
      hasCertificate: true,
      image: certItcAttendance,
      imagePlaceholder: null,
      note: "Awarded in recognition of attendance and participation in ITC."
    },
    {
      id: "nti-pentest",
      name: "NTI Penetration Testing Training",
      track: "Penetration Testing & Security Assessment",
      organization: "National Telecommunication Institute (NTI)",
      duration: "Intensive Cybersecurity Program",
      topics: ["Reconnaissance", "Network Mapping", "Vulnerability Assessment", "Metasploit", "Security Fundamentals"],
      hasCertificate: true,
      image: certNtiPentest,
      imagePlaceholder: null,
      note: "Successfully completed the practical penetration testing training program at NTI."
    },
    {
      id: "depi",
      name: "Digital Egypt Pioneers Initiative (DEPI)",
      track: "Software Development — React Frontend Web Developer",
      organization: "Ministry of Communications and Information Technology (MCIT)",
      duration: "December 2025 — July 2026",
      topics: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "Figma"],
      hasCertificate: true,
      image: certDepi,
      imagePlaceholder: null,
      note: "Certificate of Achievement for completing and achieving core learning outcomes in the DigitalEgyptPioneersProgram — Software Development, React Frontend Web Developer track."
    }
  ]
};
