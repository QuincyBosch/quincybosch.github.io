/* ==========================================================
   PROFILE DATA — this is the only file you need to edit.
   Every section of the page is built from this object.

   • Anything in [square brackets] is a placeholder to replace.
   • Set a list to [] (or delete it) to hide that whole section.
   • Skill "level" is 0–100 and draws the neon meter; leave it
     out to show the skill as a simple tag instead.
     (The levels below are starting estimates — adjust them.)
   ========================================================== */
window.PROFILE = {
  name: "Quinton Bosch",
  title: "Software Engineering Lead",
  heroScript: "Engineer",               // the pink neon script word under your name
  location: "Port Elizabeth, South Africa",
  email: "quinton.bosch@gmail.com",
  photo: "",                            // e.g. "assets/me.jpg" — empty shows your initials
  resumeUrl: "",                        // e.g. "assets/resume.pdf" — empty hides the button

  taglines: [
    "Full Stack | DevOps | AI enthusiast",
    "JavaScript Warrior. CSS hardened.",
    "C# | .NET Core | SQL | Python",
    "Growing people. Winning mindset.",
    "Writing software since 2008",
  ],

  summary: [
    "Experienced software engineer, now leading the Lexis WinDeed engineering team at LexisNexis South Africa. I've built software across the logistics and supply chain, FMCG, security systems and bottling industries, for large corporates and as a contractor.",
    "Skilled in C#, .NET Core, JavaScript, Angular, OOP, WPF, SQL, Postgres, Git and Azure DevOps, and embracing AI across the development spectrum. A BScIT graduate of Nelson Mandela Metropolitan University, and a friendly, humble go-getter who loves growing people.",
  ],

  stats: [
    { value: "18+", label: "Years coding" },
    { value: "5", label: "Companies" },
    { value: "4", label: "Industries" },
    { value: "3", label: "Languages spoken" },
  ],

  socials: [
    { type: "github", label: "GitHub", url: "https://github.com/QuincyBosch" },
    { type: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/quinton-bosch-a93b5bb9/" },
    { type: "email", label: "Email", url: "mailto:quinton.bosch@gmail.com" },
    { type: "discord", label: "Discord", url: "https://discord.com/users/461250581764374528" },
    { type: "twitch", label: "Twitch", url: "https://www.twitch.tv/quincb" },
    { type: "steam", label: "Steam", url: "https://steamcommunity.com/profiles/76561198065562952/" },
  ],

  skills: [
    {
      group: "Languages",
      items: [
        { name: "C#", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "SQL", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Python", level: 70 },
      ],
    },
    {
      group: "Frameworks & Platforms",
      items: [
        { name: ".NET Core", level: 90 },
        { name: "Angular", level: 80 },
        { name: "WPF", level: 75 },
        "Postgres", "Git", "Azure DevOps", "OOP",
      ],
    },
    {
      group: "Strengths",
      items: [
        "Back-End Web Development", "Databases", "Web Applications", "Full Stack",
        "DevOps", "Technical Analysis", "AI-assisted Development", "Team Leadership",
      ],
    },
    {
      group: "Spoken Languages",
      items: ["English · Native", "Afrikaans · Professional", "Xhosa · Elementary"],
    },
  ],

  experience: [
    {
      role: "Software Engineering Lead",
      company: "LexisNexis South Africa",
      location: "South Africa",
      start: "Apr 2026",
      end: "Present",
      bullets: [
        "Leading the Lexis WinDeed software engineering team.",
      ],
      tech: [],
    },
    {
      role: "Senior Software Engineer",
      company: "LexisNexis South Africa",
      location: "South Africa",
      start: "Mar 2021",
      end: "Apr 2026",
      bullets: [],
      tech: [],
    },
    {
      role: "Senior Software Developer",
      company: "VSC Solutions",
      location: "Port Elizabeth, South Africa",
      start: "Jan 2017",
      end: "Mar 2021",
      bullets: [],
      tech: [],
    },
    {
      role: "Software Developer",
      company: "The Code Crowd PE",
      location: "Port Elizabeth, South Africa",
      start: "May 2014",
      end: "Jul 2015",
      bullets: [],
      tech: [],
    },
    {
      role: "Software Developer",
      company: "Dimension Data Middle East & Africa",
      location: "",
      start: "Nov 2010",
      end: "Apr 2014",
      bullets: [],
      tech: [],
    },
    {
      role: "Software Developer",
      company: "E-Technik",
      location: "",
      start: "Apr 2008",
      end: "Nov 2010",
      bullets: [],
      tech: [],
    },
  ],

  projects: [
    {
      name: "Grim Dawn Grail",
      description: "A simple tool for managing and tracking an item collection in the action RPG Grim Dawn.",
      tech: [],
      repo: "",   // private for now — once it's public, set to "https://github.com/QuincyBosch/GrimDawnGrail"
      demo: "",
    },
    {
      name: "Hungry Fish",
      description: "A p5.js remake of the Hungry Fish game I enjoyed many years ago. A hands-on way to learn 2D game development. Currently in development.",
      tech: ["JavaScript", "p5.js", "HTML Canvas"],
      repo: "https://github.com/QuincyBosch/HungryFish",
      demo: "https://quincybosch.github.io/HungryFish/",   // needs GitHub Pages turned on for the HungryFish repo
      demoLabel: "Play",
    },
    {
      name: "Synthwave Profile",
      description: "This site — a zero-dependency, retro-styled developer profile hosted on GitHub Pages.",
      tech: ["HTML", "CSS", "JavaScript"],
      repo: "https://github.com/QuincyBosch/quincybosch.github.io",
      demo: "",
    },
  ],

  education: [
    {
      school: "Nelson Mandela Metropolitan University",
      degree: "BSc Information Technology",
      start: "2004",
      end: "2007",
    },
    {
      school: "Lawson Brown High School",
      degree: "Matric",
      start: "2001",
      end: "2003",
    },
  ],

  certifications: [],

  // Shown in the order listed. Cover art lives in assets/games/.
  gaming: {
    blurb: "When I'm not writing code, I'm streaming on Twitch. Here's what I play. Come say hi in chat.",
    twitch: "https://www.twitch.tv/quincb",
    games: [
      { name: "Battlefield 6", image: "assets/games/battlefield-6.jpg" },
      { name: "Titan Quest II", image: "assets/games/titan-quest-2.jpg" },
      { name: "Titan Quest Anniversary Edition", image: "assets/games/titan-quest-ae.jpg" },
      { name: "Borderlands 4", image: "assets/games/borderlands-4.jpg" },
      { name: "Grim Dawn", image: "assets/games/grim-dawn.jpg" },
      { name: "Diablo IV", image: "assets/games/diablo-4.jpg" },
      { name: "Diablo III", image: "assets/games/diablo-3.png" },
      { name: "Diablo II: Resurrected", image: "assets/games/diablo-2-resurrected.jpg" },
      { name: "Jagged Alliance Series", image: "assets/games/jagged-alliance.jpg" },
      { name: "The Isle", image: "assets/games/the-isle.jpg" },
      { name: "Jurassic World Evolution 2", image: "assets/games/jurassic-world-evolution-2.jpg" },
      { name: "Blasphemous II", image: "assets/games/blasphemous-2.jpg" },
    ],
  },

  contactBlurb: "Always up for a good conversation about software, AI, leading teams or a new challenge. Drop me a message.",
};
