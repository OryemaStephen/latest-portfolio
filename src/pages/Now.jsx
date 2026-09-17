import Page from "../components/Page";

const focus = [
  {
    title: "IRAS frontend",
    description:
      "Building the next version of the frontend for Uganda's Integrated Revenue Administration System.",
  },
  {
    title: "School management system",
    description: "Developing a platform for running a school's day-to-day operations.",
  },
  {
    title: "Groundwater management system",
    description: "Building a system to track and manage groundwater resources.",
  },
  {
    title: "Multitenant starter kit",
    description:
      "A foundation so new business apps start with auth, tenants and billing already solved.",
  },
  {
    title: "Jeba Pesa",
    description: "Growing a digital platform for savings groups and SACCOs.",
  },
];

const Now = () => (
  <Page
    eyebrow="Now"
    title="Now Now Now"
    description="This is a “now” page and shows you what I'm currently focused on."
    updated="2026-09-17"
  >
    <div className="not-prose flex items-center gap-3 rounded-2xl border border-accent/30 bg-accent-soft px-5 py-4">
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>
      <p className="text-[0.95rem] text-heading">
        Frontend Software Engineer at <strong>Yoya Technologies</strong>, taking
        on freelance projects on the side.
      </p>
    </div>

    <h2>Currently working on</h2>
    <ol className="not-prose space-y-3">
      {focus.map((item, index) => (
        <li key={item.title} className="flex gap-4 rounded-2xl border border-line p-4">
          <span className="w-8 shrink-0 font-display text-lg leading-tight tabular-nums text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-semibold tracking-tight text-heading">{item.title}</h3>
            <p className="mt-0.5 text-[0.95rem] leading-relaxed">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>

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
