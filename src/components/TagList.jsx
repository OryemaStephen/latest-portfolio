import { Link } from "react-router-dom";
import { chip } from "./ui";

const TagList = ({ tags }) => (
  <div className="mt-10 flex flex-wrap items-center gap-2">
    <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted">
      Built with
    </span>
    {tags.map((tag) => (
      <Link
        key={tag}
        to={`/projects?tag=${encodeURIComponent(tag)}`}
        className={`${chip} transition hover:border-accent hover:text-accent`}
      >
        {tag}
      </Link>
    ))}
  </div>
);

export default TagList;
