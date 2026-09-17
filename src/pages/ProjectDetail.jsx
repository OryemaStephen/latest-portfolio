import { useParams } from "react-router-dom";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import Page from "../components/Page";
import ProjectCover from "../components/ProjectCover";
import TagList from "../components/TagList";
import { buttonPrimary, buttonSecondary, card } from "../components/ui";
import NotFound from "./NotFound";
import projects from "../data/projects";

const toPagerItem = (project) =>
  project && { to: `/projects/${project.slug}`, title: project.title };

const ProjectDetail = () => {
  const { slug } = useParams();
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return <NotFound />;

  const project = projects[index];

  return (
    <Page
      eyebrow={project.company ?? "Project"}
      title={project.title}
      description={project.description}
      prev={
        toPagerItem(projects[index - 1]) ?? {
          to: "/projects",
          title: "All projects",
        }
      }
      next={toPagerItem(projects[index + 1])}
      footer={<TagList tags={project.tags} />}
    >
      {project.company && (
        <dl className="not-prose mb-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {[
            ["Company", project.company],
            ["Role", project.role],
            ["Team", project.context],
          ]
            .filter(([, value]) => value)
            .map(([label, value]) => (
              <div
                key={label}
                className="bg-surface px-4 py-3 last:col-span-2 sm:last:col-span-1"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-heading">
                  {value}
                </dd>
              </div>
            ))}
        </dl>
      )}

      {(project.live || project.github) && (
        <div className="not-prose mb-8 flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonPrimary}
            >
              Visit site
              <FaArrowUpRightFromSquare
                aria-hidden="true"
                className="text-xs"
              />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonSecondary}
            >
              <FaGithub aria-hidden="true" />
              Source
            </a>
          )}
        </div>
      )}

      <figure className="not-prose overflow-hidden rounded-2xl border border-line bg-subtle shadow-xl shadow-black/5">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="w-full"
          />
        ) : (
          <div className="aspect-video">
            <ProjectCover project={project} />
          </div>
        )}
      </figure>

      {project.modules && (
        <>
          <h2>Key modules</h2>
          <ul className="not-prose grid gap-2 sm:grid-cols-2">
            {project.modules.map((module) => (
              <li
                key={module}
                className="flex items-start gap-2.5 rounded-xl border border-line px-3.5 py-2.5 text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {module}
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>What I did</h2>
      <ul>
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      {project.challenge && (
        <div className="not-prose mt-10 grid gap-4 sm:grid-cols-2">
          <div className={`${card} p-5`}>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Challenge
            </p>
            <p className="mt-2 leading-relaxed">{project.challenge}</p>
          </div>
          <div className={`${card} border-accent/30 bg-accent-soft p-5`}>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Solution
            </p>
            <p className="mt-2 leading-relaxed text-heading">
              {project.solution}
            </p>
          </div>
        </div>
      )}
    </Page>
  );
};

export default ProjectDetail;
