import { author, site } from "../data/site";
import SocialIcon from "./SocialIcon";

const Footer = () => (
  <footer className="mt-20 border-t border-line bg-subtle">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a
          href={site.url}
          className="font-medium text-heading hover:text-accent"
        >
          {author.name}
        </a>
      </p>

      <ul className="flex items-center gap-1">
        <li className="mr-2 text-xs font-semibold uppercase tracking-wider">
          Follow
        </li>
        {author.links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={link.label}
              title={link.label}
              className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-surface hover:text-accent"
            >
              <SocialIcon name={link.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
