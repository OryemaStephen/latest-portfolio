import { FaCode, FaCubes, FaDatabase, FaPlug } from "react-icons/fa6";
import Page from "../components/Page";
import { card } from "../components/ui";

// Edit freely: this is the list of tools behind the work.
const sections = [
  {
    heading: "Development",
    icon: FaCode,
    items: [
      ["Visual Studio Code", "my main editor"],
      ["Claude Code", "AI pair programmer for refactors, reviews and the boring bits"],
      ["macOS + zsh", "day-to-day environment"],
      ["Git & GitHub", "version control and code reviews"],
      ["Figma", "working from designs to production UI"],
      ["Postman", "exploring and testing REST APIs"],
      ["Docker", "consistent builds and deployments"],
    ],
  },
  {
    heading: "Frontend",
    icon: FaCubes,
    items: [
      ["React & Next.js", "for almost every interface I build"],
      ["TypeScript", "for anything that has to last"],
      ["Tailwind CSS", "styling, including this site"],
      ["Redux Toolkit", "when state gets complicated"],
    ],
  },
  {
    heading: "Backend & data",
    icon: FaDatabase,
    items: [
      ["Node.js & Express", "APIs and services"],
      ["Django REST APIs", "the backends behind most of my enterprise work"],
      ["PostgreSQL & MySQL", "relational data"],
      ["PHP", "for existing platforms that run on it"],
    ],
  },
  {
    heading: "Integrations & hosting",
    icon: FaPlug,
    items: [
      ["Stripe & Flutterwave", "payments"],
      ["OpenAI API", "content automation and recommendations"],
      ["Netlify", "hosting for frontends and static sites"],
    ],
  },
];

const Uses = () => (
  <Page
    eyebrow="Tools"
    title="My tools of trade"
    description="Inspired by uses.tech, here's the software and services I rely on to design, build and ship."
    updated="2026-09-17"
  >
    <div className="not-prose grid gap-4 sm:grid-cols-2">
      {sections.map(({ heading, icon: Icon, items }) => (
        <section key={heading} className={`${card} p-5`}>
          <h2 className="flex items-center gap-2.5 font-semibold tracking-tight text-heading">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-soft text-sm text-accent">
              <Icon aria-hidden="true" />
            </span>
            {heading}
          </h2>
          <ul className="mt-4 divide-y divide-line">
            {items.map(([name, note]) => (
              <li key={name} className="py-2.5 first:pt-0 last:pb-0">
                <p className="text-sm font-semibold text-heading">{name}</p>
                <p className="text-sm text-muted">{note}</p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </Page>
);

export default Uses;
