import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pager = ({ item, direction }) => {
  const isNext = direction === "next";
  if (!item) return <span className="hidden flex-1 sm:block" />;

  return (
    <Link
      to={item.to}
      className={`group flex-1 rounded-2xl border border-line p-4 transition hover:border-accent hover:bg-accent-soft ${
        isNext ? "text-right" : ""
      }`}
    >
      <span
        className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted ${
          isNext ? "justify-end" : ""
        }`}
      >
        {!isNext && <FaArrowLeft aria-hidden="true" className="transition group-hover:-translate-x-0.5" />}
        {isNext ? "Next" : "Previous"}
        {isNext && <FaArrowRight aria-hidden="true" className="transition group-hover:translate-x-0.5" />}
      </span>
      <span className="mt-1 block font-semibold text-heading group-hover:text-accent">
        {item.title}
      </span>
    </Link>
  );
};

const Pagination = ({ prev, next }) => (
  <nav aria-label="Pages" className="mt-12 flex flex-col gap-3 border-t border-line pt-8 sm:flex-row">
    <Pager item={prev} direction="prev" />
    <Pager item={next} direction="next" />
  </nav>
);

export default Pagination;
