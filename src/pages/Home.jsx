import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCertificate,
  FaDownload,
  FaGraduationCap,
} from "react-icons/fa6";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";
import {
  buttonPrimary,
  buttonSecondary,
  card,
  chip,
  eyebrow,
} from "../components/ui";
import projects from "../data/projects";
import { author, site } from "../data/site";

const stats = [
  { value: "2+", label: "years building production apps" },
  { value: "100K+", label: "users served by apps I work on" },
  { value: "UGX 100M+", label: "facilitated in daily revenue collections" },
];

const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
  {
    group: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL"] },
  { group: "Tools", items: ["Git", "GitHub", "Docker", "Figma", "Postman"] },
];

const experience = [
  {
    role: "Software Engineer – Frontend",
    company: "Yoya Technologies Limited",
    location: "Uganda",
    period: "Sept 2025 – Present",
    points: [
      "Develop production web applications for financial services, government revenue administration and municipal operations, serving 100,000+ users and facilitating over UGX 100M in daily revenue collections.",
      "Build workflow-driven modules for payments, accounting, inventory, reporting, verification, transfers and multi-level approvals, including Chart of Accounts, General Ledger, Trial Balance, Balance Sheet and Profit & Loss.",
      "Implement role-based access control and permission-aware workflows, and integrate React apps with Django REST APIs.",
      "Optimize performance with lazy loading and code splitting, keeping page load times under 2 seconds.",
    ],
  },
  {
    role: "Software Developer",
    company: "Jeba Pesa Uganda Limited",
    location: "Hybrid",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Developed responsive features for a digital financial platform supporting crowdfunding, SACCOs, savings groups, financial tracking and credit building.",
      "Built financial dashboards and reusable React components with Redux Toolkit state management.",
    ],
  },
  {
    role: "Software Developer",
    company: "AI Smartual Learning",
    location: "Malaysia · Remote",
    period: "Sept 2024 – Sept 2025",
    points: [
      "Built course management, content publishing, creator dashboards and learning workflows for a digital learning and content monetization platform.",
      "Integrated Node.js/Express.js APIs and automated email notifications, working with distributed teams across time zones.",
    ],
  },
];

const certifications = [
  { name: "ALX ProDev Frontend Developer", year: "2025" },
  { name: "Tunga Tech Impact Academy – Fullstack Developer", year: "2024" },
  {
    name: "freeCodeCamp – JavaScript Algorithms & Data Structures",
    year: "2024",
  },
];

const SectionHeading = ({ label, title, action }) => (
  <div className="flex items-end justify-between gap-4">
    <div>
      <p className={eyebrow}>{label}</p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-heading">
        {title}
      </h2>
    </div>
    {action}
  </div>
);

const Home = () => (
  <Page
    eyebrow={`${author.role} · ${author.location}`}
    title="Hi, I'm Stephen. I build software that runs real businesses."
    footer={
      <>
        <section className="mt-16">
          <SectionHeading label="Career" title="Experience" />
          <ol className="relative mt-8 space-y-10 border-l border-line pl-7">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute left-[-2.15rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-surface ring-4 ring-surface" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {job.period} · {job.location}
                </p>
                <h3 className="mt-1.5 font-semibold tracking-tight text-heading">
                  {job.role}{" "}
                  <span className="font-normal text-accent">
                    @ {job.company}
                  </span>
                </h3>
                <ul className="mt-2 space-y-1.5 text-[0.95rem] leading-relaxed">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted" />
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <SectionHeading
            label="Selected work"
            title="Production projects"
            action={
              <Link
                to="/projects"
                className="group hidden items-center gap-1.5 text-sm font-semibold text-accent sm:inline-flex"
              >
                All projects
                <FaArrowRight
                  aria-hidden="true"
                  className="transition group-hover:translate-x-0.5"
                />
              </Link>
            }
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <Link
            to="/projects"
            className={`${buttonSecondary} mt-6 w-full sm:hidden`}
          >
            All projects
          </Link>
        </section>

        <section className="mt-16">
          <SectionHeading label="Toolkit" title="Technical skills" />
          <dl className="mt-8 divide-y divide-line rounded-2xl border border-line">
            {skills.map(({ group, items }) => (
              <div
                key={group}
                className="grid gap-2 px-5 py-4 sm:grid-cols-[7rem_1fr] sm:items-center"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {group}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className={chip}>
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-16 grid gap-4 sm:grid-cols-2">
          <div className={`${card} p-6`}>
            <p className={`flex items-center gap-2 ${eyebrow}`}>
              <FaCertificate aria-hidden="true" />
              Certifications
            </p>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li key={cert.name}>
                  <p className="text-sm font-semibold text-heading">
                    {cert.name}
                  </p>
                  <p className="text-xs text-muted">{cert.year}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${card} p-6`}>
            <p className={`flex items-center gap-2 ${eyebrow}`}>
              <FaGraduationCap aria-hidden="true" />
              Education
            </p>
            <p className="mt-4 text-sm font-semibold text-heading">
              BSc Petroleum Geoscience and Production
            </p>
            <p className="text-sm">Makerere University, Kampala</p>
            <p className="text-xs text-muted">2016 – 2021</p>
            <p className="mt-3 inline-flex rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
              Mastercard Foundation Scholar
            </p>
          </div>
        </section>
      </>
    }
  >
    <p className="lead">
      I&apos;m a frontend engineer, building and maintaining production web
      applications with React, TypeScript and Next.js across FinTech, GovTech,
      SaaS and digital learning.
    </p>

    <div className="not-prose my-8 flex flex-wrap gap-3">
      <Link to="/services" className={buttonPrimary}>
        Work with me
        <FaArrowRight aria-hidden="true" />
      </Link>
      <a href={site.cv} download className={buttonSecondary}>
        <FaDownload aria-hidden="true" />
        Download CV
      </a>
    </div>

    <dl className="not-prose my-10 grid overflow-hidden rounded-2xl border border-line sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="border-b border-line px-5 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="font-display text-3xl font-semibold tracking-tight text-heading">
            {stat.value}
          </dd>
          <dd className="mt-1 text-xs leading-snug text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>

    <p>
      I develop workflow-driven systems for financial transactions, payments,
      accounting, user and business management, inventory, approvals, reporting,
      verification and role-based access control. I turn business requirements
      and Figma designs into scalable, responsive interfaces, integrate REST
      APIs, manage complex application state and optimize performance.
    </p>
    <p>
      I&apos;m also comfortable with Node.js, Express.js, PostgreSQL and MySQL,
      so I can contribute across the full software development lifecycle. Have a
      look at the <Link to="/services">services</Link> I offer, the{" "}
      <Link to="/uses">tools I use</Link>, and what I&apos;m focused on{" "}
      <Link to="/now">right now</Link>.
    </p>
  </Page>
);

export default Home;
