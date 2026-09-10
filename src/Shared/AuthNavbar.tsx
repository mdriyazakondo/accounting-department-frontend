import {
  BriefcaseBusiness,
  GraduationCap,
  LogIn,
  Menu,
  Moon,
  Sun,
  User,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const AuthNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= Desktop / Main Navbar ================= */}
        <div className="relative flex min-h-20 items-center justify-between gap-3">
          {/* ================= Logo ================= */}
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex shrink-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md sm:h-11 sm:w-11">
              <GraduationCap size={24} className="sm:hidden" />
              <GraduationCap size={27} className="hidden sm:block" />
            </div>

            <div>
              <h1 className="text-base font-bold leading-tight text-gray-900 dark:text-white sm:text-lg lg:text-xl">
                ABC College
              </h1>

              <p className="hidden text-[10px] font-medium text-gray-500 dark:text-slate-400 sm:block sm:text-xs">
                Excellence in Education
              </p>
            </div>
          </Link>

          {/* ================= Desktop Center Menu ================= */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex xl:gap-2">
            {/* Student */}
            <NavLink to="/auth/login/student" className={navLinkClass}>
              <User size={17} />
              <span>Student</span>
            </NavLink>

            {/* Teacher */}
            <NavLink to="/auth/login/teacher" className={navLinkClass}>
              <Users size={17} />
              <span>Teacher</span>
            </NavLink>

            {/* Office Assistant */}
            <NavLink to="/auth/login/office-assistant" className={navLinkClass}>
              <BriefcaseBusiness size={17} />
              <span>Office Assistant</span>
            </NavLink>
          </div>

          {/* ================= Right Side ================= */}
          <div className="ml-auto flex items-center gap-2">
            {/* Dark / Light Toggle */}
            <button
              type="button"
              onClick={() => setIsDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-100 text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-yellow-400 dark:hover:bg-slate-700"
            >
              {isDarkMode ? (
                <Sun
                  size={19}
                  className="rotate-0 transition-transform duration-300"
                />
              ) : (
                <Moon size={19} className="transition-transform duration-300" />
              )}
            </button>

            {/* Desktop Login */}
            <Link
              to="/auth/login"
              className="hidden shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg sm:flex"
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-gray-100 text-gray-700 transition hover:bg-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 lg:hidden"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ================= Tablet Menu ================= */}
        <div className="hidden border-t border-gray-200 py-3 md:flex lg:hidden dark:border-slate-800">
          <div className="mx-auto flex items-center justify-center gap-2">
            <NavLink to="/auth/login/student" className={navLinkClass}>
              <User size={17} />
              <span>Student</span>
            </NavLink>

            <NavLink to="/auth/login/teacher" className={navLinkClass}>
              <Users size={17} />
              <span>Teacher</span>
            </NavLink>

            <NavLink to="/auth/login/office-assistant" className={navLinkClass}>
              <BriefcaseBusiness size={17} />
              <span>Office Assistant</span>
            </NavLink>
          </div>
        </div>

        {/* ================= Mobile Menu ================= */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 py-4 lg:hidden dark:border-slate-800">
            <div className="flex flex-col gap-2">
              {/* Student */}
              <NavLink
                to="/auth/login/student"
                onClick={() => setIsMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                <User size={19} />
                <span>Student Login</span>
              </NavLink>

              {/* Teacher */}
              <NavLink
                to="/auth/login/teacher"
                onClick={() => setIsMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                <Users size={19} />
                <span>Teacher Login</span>
              </NavLink>

              {/* Office Assistant */}
              <NavLink
                to="/auth/login/office-assistant"
                onClick={() => setIsMenuOpen(false)}
                className={mobileNavLinkClass}
              >
                <BriefcaseBusiness size={19} />
                <span>Office Assistant Login</span>
              </NavLink>

              {/* Mobile Login */}
              <Link
                to="/auth/login"
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                <LogIn size={19} />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default AuthNavbar;
