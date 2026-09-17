import {
  FaBriefcase,
  FaGraduationCap,
  FaHeart,
  FaLaptopCode,
} from "react-icons/fa6";
import Page from "../components/Page";

const sections = [
  {
    heading: "At work",
    icon: FaBriefcase,
    items: [
      {
        title: "IRAS",
        description:
          "I'm contributing to Uganda's Integrated Revenue Administration System, the platform local governments rely on to register taxpayers, assess and bill them, collect payments and report on revenue, and I keep extending it with new modules. I work across registration, assessments, billing, payments, objections and inspections, and build the pieces that keep public revenue accountable: 30+ management reports with drill-downs and Excel/PDF exports, property valuation, payment reconciliation, the accounting ledger, trial balance, audit trail and map-based location verification.",
      },
      {
        title: "Smart Parking & Revenue Management System",
        description:
          "Maintaining the municipal parking platform running in two Ugandan cities, covering parking operations, billing, mobile money payments and accounting.",
      },
      {
        title: "Tayari Loans Management System",
        description:
          "Maintaining the loan management and accounting platform for motorcycle and e-bike asset financing, from loan origination through repayments, collections and financial reporting.",
      },
    ],
  },
  {
    heading: "Building on the side",
    icon: FaLaptopCode,
    items: [
      {
        title: "School management system",
        description:
          "A multi-tenant platform where one deployment serves many schools, each with its own users, roles, students and records. Access is decided by permissions, never by role names.",
      },
      {
        title: "A personal idea in tech",
        description:
          "Something of my own that I'm shaping in my spare hours. More on it when it's ready to share.",
      },
    ],
  },
  {
    heading: "Learning",
    icon: FaGraduationCap,
    items: [
      {
        title: "Going deeper on the backend",
        description:
          "Designing APIs, data models and permissions with Node.js, Express and PostgreSQL, so I can own a product from the database to the interface.",
      },
    ],
  },
  {
    heading: "Life outside work",
    icon: FaHeart,
    items: [
      {
        title: "Time with my son",
        description:
          "When I'm not working, my son gets most of my free time, and he enjoys every bit of it.",
      },
      {
        title: "Eating well",
        description:
          "I pay close attention to what I eat to stay fit and healthy.",
      },
    ],
  },
];

const Now = () => (
  <Page
    eyebrow="Now"
    title="Now Now Now"
    description="A snapshot of where my time and attention go at the moment: work, what I'm building, what I'm learning and life at home."
    updated="2026-09-17"
  >
    <div className="not-prose flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent-soft px-5 py-4">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>
      <p className="text-[0.95rem] text-heading">
        Software Engineer at <strong>Yoya Technologies</strong> in Kampala, and
        a dad making the most of every free moment with my son.
      </p>
    </div>

    {sections.map(({ heading, icon: Icon, items }) => (
      <section key={heading}>
        <h2 className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent-soft text-sm text-accent">
            <Icon aria-hidden="true" />
          </span>
          {heading}
        </h2>
        <ul className="not-prose space-y-3">
          {items.map((item) => (
            <li key={item.title} className="rounded-2xl border border-line p-4">
              <h3 className="font-semibold tracking-tight text-heading">{item.title}</h3>
              <p className="mt-0.5 text-[0.95rem] leading-relaxed">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
    ))}

    <p className="mt-8">
      Learn more about what a <em>“now”</em> page is at{" "}
      <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">
        nownownow.com
      </a>
      .
    </p>
  </Page>
);

export default Now;
