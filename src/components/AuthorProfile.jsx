import { useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload, FaLocationDot } from "react-icons/fa6";
import avatar from "../assets/avatar.jpg";
import { author, site } from "../data/site";
import SocialIcon from "./SocialIcon";

const itemClass =
  "group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-ink transition hover:bg-subtle hover:text-accent lg:-mx-2";

const AuthorProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      itemScope
      itemType="https://schema.org/Person"
      className="flex items-center gap-4 border-b border-line pb-5 lg:block lg:border-0 lg:pb-0"
    >
      <Link to="/" className="shrink-0">
        <img
          src={avatar}
          alt={author.name}
          itemProp="image"
          className="h-12 w-12 rounded-full object-cover ring-4 ring-accent-soft lg:aspect-square lg:h-auto lg:w-full lg:max-w-40"
        />
      </Link>

      <div className="min-w-0 flex-1 lg:mt-5">
        <h3
          itemProp="name"
          className="text-base font-bold leading-tight tracking-tight text-heading"
        >
          <Link to="/">{author.name}</Link>
        </h3>
        <p className="text-xs text-muted lg:hidden">{author.role}</p>
        <p className="mt-2 hidden text-sm leading-relaxed text-muted lg:block">
          {author.bio}
        </p>
      </div>

      <div className="relative lg:mt-5">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="rounded-full border border-line px-4 py-1.5 text-xs font-semibold text-heading transition hover:border-accent hover:text-accent lg:hidden"
        >
          Follow
        </button>

        <ul
          className={`${
            open ? "block" : "hidden"
          } absolute right-0 top-full z-10 mt-3 w-56 rounded-xl border border-line bg-surface p-1.5 shadow-lg shadow-black/5 lg:static lg:mt-0 lg:block lg:w-auto lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          <li
            itemProp="homeLocation"
            className="flex items-center gap-2.5 px-2 py-1.5 text-sm text-ink lg:-mx-2"
          >
            <FaLocationDot
              aria-hidden="true"
              className="w-4 shrink-0 text-muted"
            />
            <span>{author.location}</span>
          </li>
          {author.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer me"
                itemProp="sameAs"
                className={itemClass}
              >
                <SocialIcon
                  name={link.icon}
                  className="w-4 shrink-0 text-muted transition group-hover:text-accent"
                />
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-1 lg:mt-4">
            <a
              href={site.cv}
              download
              className="flex items-center justify-center gap-2 rounded-full bg-heading px-4 py-2 text-xs font-semibold text-surface transition hover:bg-accent"
            >
              <FaDownload aria-hidden="true" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AuthorProfile;
