import publisher from "../assets/projects/publisher.png";
import jebapesa from "../assets/projects/jebapesa.png";
import ndiisaclan from "../assets/projects/ndiisaclan.png";
import portfolio from "../assets/projects/portfolio.png";
import barbershop from "../assets/projects/barbershop.png";
import myshop from "../assets/projects/myshop.png";
import rentcars from "../assets/projects/rentcars.png";

export const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const yoya = { company: "Yoya Technologies" };

const projects = [
  {
    ...yoya,
    title: "Integrated Revenue Administration System (IRAS)",
    shortName: "IRAS",
    category: "GovTech · Revenue",
    palette: "teal",
    role: "Frontend Engineer",
    context: "10-developer team",
    description:
      "A national revenue administration platform used by Ugandan local governments to register taxpayers, assess, bill, collect and report on non-tax revenue.",
    modules: [
      "Taxpayer registration",
      "Assessments & billing",
      "Payments & reconciliation",
      "Objections",
      "Inspections",
      "Property valuation",
      "Accounting ledger & trial balance",
      "Administration & audit trail",
    ],
    highlights: [
      "Worked across registration, assessments, billing, payments, objections, inspections, accounting and administration as part of a 10-developer team",
      "Built 30+ management and analytical reports with server-side filtering, drill-downs, visualizations and Excel/PDF exports",
      "Developed property valuation, amendments, payment reconciliation, the accounting ledger, trial balance and audit trail functionality",
      "Implemented administrative workflows including role delegation, SLA configuration, scheduled reports and document management",
      "Added location verification using Mapbox GL",
    ],
    tags: ["React", "TypeScript", "Vite", "MUI", "Ant Design", "Mapbox GL", "Flexmonster"],
  },
  {
    ...yoya,
    title: "Tayari Loans Management System",
    shortName: "Tayari",
    category: "Fintech · Lending",
    palette: "amber",
    role: "Frontend Engineer",
    context: "One of two lead frontend contributors",
    description:
      "A loan management and accounting platform for motorcycle and e-bike asset financing, from loan origination through repayment, collections and financial reporting.",
    modules: [
      "Loan application workflow",
      "Restructuring & rescheduling",
      "Instalments & bulk payments",
      "Penalties & discounts",
      "Defaulter dashboards",
      "Financial reports",
      "Transaction locking",
      "Role-based access control",
    ],
    highlights: [
      "Built major modules as one of two lead frontend contributors, including the end-to-end loan application workflow, restructuring, rescheduling and multiple application types",
      "Developed 20+ financial reports covering loan books, debtor aging, balance sheets, the general ledger, transactions, invoices, overpayments and asset recovery",
      "Implemented payments and collections features, including bulk payments, instalments, penalties, discounts and defaulter dashboards",
      "Built role-based access control and financial-period transaction locking, protecting accounting integrity while allowing authorized overrides",
      "Contributed to reusable, metadata-driven form and register components that significantly reduced development effort for new modules",
    ],
    tags: ["React", "TypeScript", "Ant Design", "MUI", "Redux Toolkit", "Mapbox GL", "Flexmonster"],
    challenge:
      "Protecting accounting integrity once a financial period closes, while still allowing necessary corrections.",
    solution:
      "Financial-period transaction locking combined with role-based access control, so only authorized users can override a locked period.",
  },
  {
    ...yoya,
    title: "Smart Parking & Revenue Management System",
    shortName: "Smart Parking",
    category: "Smart City · Payments",
    palette: "sky",
    role: "Frontend Developer",
    context: "Deployed in two Ugandan cities",
    description:
      "A municipal parking and revenue management platform covering parking operations, billing, payments, accounting and field operations.",
    modules: [
      "Street & slot parking",
      "Bookings & reservations",
      "Coupons & stickers",
      "Vehicle clamping & penalties",
      "Billing & mobile money payments",
      "General ledger & reconciliation",
      "Staff wages & commissions",
      "KPI dashboards & reports",
    ],
    highlights: [
      "Built frontend modules for street and slot parking, bookings, reservations, coupons, stickers, vehicle clamping and penalties",
      "Implemented billing and payment workflows supporting PRN generation, MTN MoMo, Airtel Pay, USSD, QR payments, prepaid balances, reversals and receipts",
      "Developed the general ledger, trial balance, reconciliation, expenses, requisitions and automated staff wage and commission calculations",
      "Built granular role-based access control, JWT authentication, OTP verification and session security",
      "Delivered KPI dashboards and operational reports on occupancy, revenue, agent performance, end-of-day operations and debtor ageing, with Excel/CSV export and ad hoc reporting",
    ],
    tags: ["React", "TypeScript", "MUI", "Ant Design", "Mapbox GL"],
  },
  {
    title: "VPublisher",
    company: "AI Smartual Learning",
    role: "Software Developer",
    image: publisher,
    live: "https://vpublisher.vlearned.com",
    github: "https://github.com/OryemaStephen",
    description:
      "A digital learning and content monetization platform serving learners and content creators.",
    highlights: [
      "Developed and maintained frontend features for course management, content publishing, creator dashboards and learning workflows using React and Redux Toolkit",
      "Integrated REST APIs with Node.js/Express.js backend services to support user, content and learning operations",
      "Implemented communication workflows, including automated email notifications and user-facing status updates",
      "Integrated Stripe and Flutterwave for subscriptions and content payments",
      "Used the OpenAI API to automate content approval and recommend content to readers",
      "Created a rich text editor with image uploads",
      "Built an analytics dashboard to track content performance",
      "Contributed to testing, bug resolution, production releases and continuous platform improvements",
    ],
    tags: ["React", "Redux Toolkit", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Stripe", "Flutterwave", "OpenAI"],
    challenge:
      "Handling real-time content updates from multiple contributors while keeping data consistent.",
    solution:
      "Used WebSocket connections for live updates and tuned PostgreSQL queries with proper indexing.",
  },
  {
    title: "Jeba Pesa",
    company: "Jeba Pesa Uganda Limited",
    role: "Software Developer",
    image: jebapesa,
    live: "https://jebapesa.com",
    description:
      "A digital financial platform supporting crowdfunding, SACCOs, savings groups, financial tracking and credit-building services.",
    highlights: [
      "Developed responsive frontend features for crowdfunding, SACCO and savings group workflows",
      "Built financial dashboards and data-driven interfaces for managing financial activities and user information",
      "Integrated REST APIs to retrieve and manage financial data and support end-to-end user workflows",
      "Implemented reusable React components and Redux Toolkit state management to improve application maintainability",
      "Optimized interfaces for mobile responsiveness, accessibility and usability across different devices",
    ],
    tags: ["React", "Redux Toolkit", "Tailwind CSS"],
    challenge: "Keeping financial data accurate and secure for sensitive transactions.",
    solution: "Server-side validation, audit logging and regular database backups.",
  },
  {
    title: "Ndiisaclan Portal",
    image: ndiisaclan,
    live: "https://ndiisaclan.org/",
    description:
      "A clan management system with a public portal and an admin dashboard.",
    highlights: [
      "Built member registration and profile management for administrators",
      "Created a content management system for clan news and announcements",
      "Added an e-commerce section for clan merchandise",
      "Implemented genealogy tracking for clan members",
    ],
    tags: ["React", "Tailwind CSS", "PHP", "MySQL"],
    challenge: "Modelling complex family tree relationships in the database.",
    solution:
      "A hierarchical data model with recursive queries and a visualization library.",
  },
  {
    title: "E-Commerce Store",
    image: myshop,
    live: "https://myshop256.netlify.app/",
    github: "https://github.com/OryemaStephen/shopping-cart",
    description: "An online shopping platform with catalog search and cart functionality.",
    highlights: [
      "Developed a product catalog with filtering and search",
      "Implemented a shopping cart persisted to local storage",
      "Created a checkout flow with multiple payment options",
      "Built product reviews and ratings",
    ],
    tags: ["React", "Tailwind CSS", "Context API"],
    challenge: "Handling product variants and keeping inventory in sync.",
    solution: "A custom inventory model with atomic updates.",
  },
  {
    title: "Car Rental Platform",
    image: rentcars,
    live: "https://rentcars256.netlify.app/",
    github: "https://github.com/OryemaStephen/car-rental-landing-page",
    description: "A vehicle rental experience with search and instant booking.",
    highlights: [
      "Developed vehicle search with type, price and feature filters",
      "Implemented a booking calendar with availability checks",
      "Added an interactive map of pickup locations",
    ],
    tags: ["React", "Bootstrap", "Mapbox GL"],
    challenge: "Managing overlapping reservations and vehicle availability.",
    solution: "Conflict detection on bookings plus a waiting list.",
  },
  {
    title: "The Gentleman Barbershop",
    image: barbershop,
    live: "https://the-gentleman-barbershop.netlify.app/",
    github: "https://github.com/OryemaStephen/the-gentleman-barbershop",
    description:
      "An elegant website showcasing a premium barbershop's services and atmosphere.",
    highlights: [
      "Designed a clean interface that reflects the shop's upscale brand",
      "Built responsive service listings with pricing",
      "Created a gallery of the shop's work and space",
      "Optimized for fast loading (95+ Lighthouse score)",
    ],
    tags: ["React", "Tailwind CSS"],
    challenge: "Keeping high-quality imagery without slowing the site down.",
    solution: "Compressed, lazy-loaded images and clear, accessible typography.",
  },
  {
    title: "Personal Website",
    image: portfolio,
    live: "https://oryemasteph.netlify.app/",
    github: "https://github.com/OryemaStephen/Oryemasteph",
    description: "The previous version of this site: a showcase of my work and skills.",
    highlights: [
      "Designed a modern UI with a dark/light mode toggle",
      "Created a project showcase with detailed case studies",
      "Built a contact form with email integration",
    ],
    tags: ["React", "Tailwind CSS"],
    challenge: "Balancing visual appeal with fast load times.",
    solution: "Optimized images and lazy loading.",
  },
].map((project) => ({ ...project, slug: slugify(project.title) }));

export default projects;
