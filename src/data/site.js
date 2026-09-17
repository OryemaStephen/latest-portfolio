// Everything personal about the site lives here, so updating it rarely
// means touching a component.

export const site = {
  title: "Stephen Oryema",
  subtitle:
    "Frontend engineer from Kampala building enterprise, fintech & govtech applications with React, TypeScript and Next.js",
  url: "https://oryemasteph.netlify.app",
  cv: "/Stephen_Oryema_CV.pdf",
};

export const author = {
  name: "Stephen Oryema",
  bio: "Frontend Engineer building workflow-driven FinTech, GovTech and SaaS applications with React, TypeScript and Next.js.",
  role: "Frontend Engineer",
  location: "Kampala, Uganda",
  available: true,
  email: "oryemasteve9@gmail.com",
  phone: "+256 771 634 966",
  altPhone: "+256 750 098 228",
  links: [
    { label: "Email", href: "mailto:oryemasteve9@gmail.com", icon: "email" },
    {
      label: "GitHub",
      href: "https://github.com/OryemaStephen",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/oryema-stephen-76b891133/",
      icon: "linkedin",
    },
    { label: "X", href: "https://x.com/Oryemasteph", icon: "x" },
  ],
};

// Order here drives both the masthead and the Previous / Next pager.
export const navigation = [
  { title: "Home", to: "/", hidden: true },
  { title: "Services", to: "/services" },
  { title: "Projects", to: "/projects" },
  { title: "Tools", to: "/uses" },
  { title: "Now", to: "/now" },
];
