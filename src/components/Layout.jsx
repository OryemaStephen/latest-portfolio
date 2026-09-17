import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Masthead from "./Masthead";
import AuthorProfile from "./AuthorProfile";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-heading focus:px-3 focus:py-2 focus:text-sm focus:text-surface"
      >
        Skip to content
      </a>

      <Masthead />

      <div
        id="main"
        className="mx-auto mt-8 grid w-full max-w-7xl flex-1 content-start gap-8 px-6 sm:px-8 lg:mt-14 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-14 lg:px-12 xl:grid-cols-[12rem_minmax(0,1fr)] xl:gap-20"
      >
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <AuthorProfile />
        </aside>

        <main key={pathname} className="min-w-0 motion-safe:animate-rise">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
