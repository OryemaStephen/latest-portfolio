import { useSearchParams } from "react-router-dom";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const tagCounts = projects
  .flatMap((project) => project.tags)
  .reduce((counts, tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1), new Map());

const sortedTags = [...tagCounts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

const filterClass = (active) =>
  `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition ${
    active
      ? "border-heading bg-heading text-surface"
      : "border-line text-ink hover:border-accent hover:text-accent"
  }`;

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTag = searchParams.get("tag");
  const visible = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;

  const selectTag = (tag) =>
    setSearchParams(tag && tag !== activeTag ? { tag } : {}, { replace: true });

  return (
    <Page
      eyebrow="Portfolio"
      title="Projects"
      description="A selection of platforms and sites I've designed and built. Filter by technology to narrow it down."
    >
      <ul className="not-prose flex flex-wrap gap-2">
        <li>
          <button
            type="button"
            onClick={() => selectTag(null)}
            aria-pressed={!activeTag}
            className={filterClass(!activeTag)}
          >
            All <span className="opacity-60">{projects.length}</span>
          </button>
        </li>
        {sortedTags.map(([tag, count]) => (
          <li key={tag}>
            <button
              type="button"
              onClick={() => selectTag(tag)}
              aria-pressed={tag === activeTag}
              className={filterClass(tag === activeTag)}
            >
              {tag} <span className="opacity-60">{count}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="not-prose mt-8 grid gap-6 sm:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Page>
  );
};

export default Projects;
