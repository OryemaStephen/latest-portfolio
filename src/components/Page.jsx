import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRegClock, FaRegCalendar } from "react-icons/fa6";
import { site, navigation } from "../data/site";
import { eyebrow as eyebrowClass } from "./ui";
import Pagination from "./Pagination";

const WORDS_PER_MINUTE = 200;

const formatReadTime = (words) => {
  const minutes = Math.round(words / WORDS_PER_MINUTE);
  if (minutes < 1) return "less than 1 minute read";
  return `${minutes} minute${minutes === 1 ? "" : "s"} read`;
};

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

// Falls back to the masthead order when a page doesn't pass its own neighbours.
const neighboursFromNav = (pathname) => {
  const index = navigation.findIndex((item) => item.to === pathname);
  if (index === -1) return {};
  return { prev: navigation[index - 1], next: navigation[index + 1] };
};

const Page = ({
  title,
  eyebrow,
  description,
  updated,
  prev,
  next,
  children,
  footer,
}) => {
  const contentRef = useRef(null);
  const [readTime, setReadTime] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pathname === "/" ? site.title : `${title} - ${site.title}`;
    const words = contentRef.current?.textContent.trim().split(/\s+/).length ?? 0;
    setReadTime(formatReadTime(words));
  }, [title, pathname, children]);

  const neighbours =
    prev || next ? { prev, next } : neighboursFromNav(pathname);

  return (
    <article itemScope itemType="https://schema.org/CreativeWork">
      <header>
        {eyebrow && <p className={`mb-3 ${eyebrowClass}`}>{eyebrow}</p>}
        <h1
          itemProp="headline"
          className="font-display text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-heading sm:text-[2.75rem]"
        >
          {title}
        </h1>
        <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <FaRegClock aria-hidden="true" />
            {readTime}
          </span>
          {updated && (
            <span className="flex items-center gap-1.5">
              <FaRegCalendar aria-hidden="true" />
              Updated <time dateTime={updated}>{formatDate(updated)}</time>
            </span>
          )}
        </p>
      </header>

      <div ref={contentRef}>
        <section itemProp="text" className="prose mt-8 max-w-none leading-relaxed">
          {description && <p className="lead">{description}</p>}
          {children}
        </section>

        {footer}
      </div>

      <Pagination prev={neighbours.prev} next={neighbours.next} />
    </article>
  );
};

export default Page;
