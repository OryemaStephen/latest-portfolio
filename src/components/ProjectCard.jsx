import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { card, chip } from "./ui";
import ProjectCover from "./ProjectCover";

const ProjectCard = ({ project }) => (
  <article
    className={`${card} group relative flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40`}
  >
    <div className="aspect-16/10 overflow-hidden border-b border-line bg-subtle">
      {project.image ? (
        <img
          src={project.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <ProjectCover
          project={project}
          className="transition duration-500 group-hover:scale-[1.04]"
        />
      )}
    </div>
    <div className="flex flex-1 flex-col p-5">
      {project.company && (
        <p className="mb-1.5 text-xs font-medium text-muted">
          {[project.company, project.role].join(" · ")}
        </p>
      )}
      <h3 className="flex items-center justify-between gap-3 font-semibold tracking-tight text-heading">
        <Link
          to={`/projects/${project.slug}`}
          className="after:absolute after:inset-0 group-hover:text-accent"
        >
          {project.title}
        </Link>
        <FaArrowRight
          aria-hidden="true"
          className="shrink-0 -translate-x-1 text-sm text-accent opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
        />
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink">
        {project.description}
      </p>
      <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
        {project.tags.slice(0, 3).map((tag) => (
          <li key={tag} className={chip}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export default ProjectCard;
