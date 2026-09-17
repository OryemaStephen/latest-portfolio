import {
  FaArrowRight,
  FaChartLine,
  FaLaptopCode,
  FaMoneyBillTransfer,
  FaDiagramProject,
  FaGaugeHigh,
  FaPenRuler,
  FaPhone,
} from "react-icons/fa6";
import Page from "../components/Page";
import { card } from "../components/ui";
import { author } from "../data/site";

const services = [
  {
    title: "Enterprise web applications",
    icon: FaLaptopCode,
    description:
      "Production React, TypeScript and Next.js apps for user and business management, inventory, verification, amendments and transfers.",
  },
  {
    title: "FinTech & payments",
    icon: FaMoneyBillTransfer,
    description:
      "Financial transactions, mobile money and USSD payments, loans and collections, plus accounting: Chart of Accounts, General Ledger, Trial Balance, Balance Sheet and P&L.",
  },
  {
    title: "Workflow & approval systems",
    icon: FaDiagramProject,
    description:
      "Multi-level approvals and permission-aware workflows with role-based access control, so people only see and act on what they're responsible for.",
  },
  {
    title: "Dashboards & reporting",
    icon: FaChartLine,
    description:
      "KPI dashboards and management reports with server-side filtering, drill-downs, visualizations and Excel/PDF exports.",
  },
  {
    title: "Figma to production",
    icon: FaPenRuler,
    description:
      "Turning business requirements and Figma designs into responsive, accessible, production-ready interfaces built from reusable components.",
  },
  {
    title: "Performance optimization",
    icon: FaGaugeHigh,
    description:
      "Lazy loading, code splitting and frontend tuning to keep pages loading in under 2 seconds.",
  },
];

const steps = [
  {
    title: "Understand the workflow",
    description: "Good software mirrors how your team actually operates, so we start there.",
  },
  {
    title: "Ship in small increments",
    description: "You see progress every week and can give feedback early.",
  },
  {
    title: "Build for the long run",
    description: "Clean code, sensible documentation and a handover your team can maintain.",
  },
];

const Services = () => (
  <Page
    eyebrow="Services"
    title="Frontend engineering for complex products"
    description="If you're building a FinTech, GovTech or SaaS product with real workflows behind it, I can help turn requirements into a reliable, scalable interface."
    updated="2026-09-17"
  >
    <h2>What I build</h2>
    <div className="not-prose grid gap-4 sm:grid-cols-2">
      {services.map(({ title, icon: Icon, description }) => (
        <div
          key={title}
          className={`${card} p-5 transition hover:border-accent/40 hover:shadow-lg hover:shadow-black/5 sm:last:odd:col-span-2`}
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-lg text-accent">
            <Icon aria-hidden="true" />
          </span>
          <h3 className="mt-4 font-semibold tracking-tight text-heading">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed">{description}</p>
        </div>
      ))}
    </div>

    <h2>How I work</h2>
    <ol className="not-prose space-y-5">
      {steps.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line font-display text-sm text-accent">
            {index + 1}
          </span>
          <div>
            <h3 className="font-semibold tracking-tight text-heading">{step.title}</h3>
            <p className="mt-0.5 text-[0.95rem] leading-relaxed">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>

    <div className="not-prose mt-12 rounded-3xl bg-heading p-8 text-surface sm:p-10">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Have a project in mind?
      </h2>
      <p className="mt-3 max-w-lg text-surface/75">
        Tell me what you&apos;re building. I usually reply within a day.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${author.email}`}
          className="group inline-flex items-center gap-2 rounded-full bg-surface px-5 py-2.5 text-sm font-semibold text-heading transition hover:bg-accent-soft"
        >
          Email me
          <FaArrowRight aria-hidden="true" className="transition group-hover:translate-x-0.5" />
        </a>
        <a
          href={`tel:${author.phone.replace(/\s/g, "")}`}
          className="inline-flex items-center gap-2 rounded-full border border-surface/25 px-5 py-2.5 text-sm font-semibold transition hover:border-surface/60"
        >
          <FaPhone aria-hidden="true" />
          {author.phone}
        </a>
      </div>
    </div>
  </Page>
);

export default Services;
