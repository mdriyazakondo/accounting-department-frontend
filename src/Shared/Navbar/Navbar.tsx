import { GraduationCap, Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type NavbarProps = {
  isDarkMode: boolean;
  onThemeChange: (isDarkMode: boolean) => void;
};

const Navbar = ({ isDarkMode, onThemeChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);

  const departments = ["Accounting", "Management", "Economics", "English"];

  // ================= THEME TOGGLE =================
  const handleThemeToggle = () => {
    onThemeChange(!isDarkMode);
  };

  // ================= CLOSE MOBILE MENU =================
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsDepartmentOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =====================================================
            NAVBAR MAIN
        ====================================================== */}
        <div className="flex min-h-20 items-center justify-between gap-4">
          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex shrink-0 items-center gap-3"
          >
            {/* Logo Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md transition-transform duration-300 hover:scale-105 sm:h-11 sm:w-11">
              <GraduationCap size={25} />
            </div>

            {/* Logo Text */}
            <div>
              <h1 className="text-base font-bold leading-tight text-gray-900 dark:text-white sm:text-lg lg:text-xl">
                ABC College
              </h1>

              <p className="text-[9px] font-medium text-gray-500 dark:text-slate-400 sm:text-[10px]">
                Excellence in Education
              </p>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP MENU
          ====================================================== */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {/* ================= HOME ================= */}
            <Link
              to="/"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 xl:px-4"
            >
              Home
            </Link>

            {/* ================= ABOUT ================= */}
            <Link
              to="/about"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 xl:px-4"
            >
              About
            </Link>

            {/* =================================================
                DEPARTMENTS
            ================================================== */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 xl:px-4"
              >
                Departments
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              {/* Department Dropdown */}
              <div className="invisible absolute left-0 top-full mt-2 w-56 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900">
                {departments.map((department) => (
                  <Link
                    key={department}
                    to={`/departments/${department.toLowerCase()}`}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  >
                    {department}
                  </Link>
                ))}
              </div>
            </div>

            {/* ================= TEACHERS ================= */}
            <Link
              to="/teachers"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 xl:px-4"
            >
              Teachers
            </Link>

            {/* ================= NOTICE ================= */}
            <Link
              to="/notice"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 xl:px-4"
            >
              Notice
            </Link>

            {/* ================= EVENTS ================= */}
            <Link
              to="/events"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 xl:px-4"
            >
              Events
            </Link>

            {/* ================= CONTACT ================= */}
            <Link
              to="/contact"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 xl:px-4"
            >
              Contact
            </Link>

            {/* ================= DASHBOARD ================= */}
            <Link
              to="/dashboard"
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400 xl:px-4"
            >
              Dashboard
            </Link>
          </div>

          {/* =====================================================
              DESKTOP RIGHT SIDE
          ====================================================== */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* ================= THEME TOGGLE ================= */}
            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
              aria-pressed={isDarkMode}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-gray-100 text-gray-700 transition-all duration-300 hover:scale-105 hover:bg-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-yellow-400 dark:hover:bg-slate-700"
            >
              {/* Moon */}
              <span
                className={`absolute transition-all duration-300 ${
                  isDarkMode
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              >
                <Moon size={19} />
              </span>

              {/* Sun */}
              <span
                className={`absolute transition-all duration-300 ${
                  isDarkMode
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              >
                <Sun size={19} />
              </span>
            </button>

            {/* ================= LOGIN ================= */}
            <Link
              to="/auth/login"
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg xl:px-5"
            >
              Login
            </Link>
          </div>

          {/* =====================================================
              MOBILE RIGHT SIDE
          ====================================================== */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* ================= MOBILE THEME ================= */}
            <button
              type="button"
              onClick={handleThemeToggle}
              aria-label="Toggle theme"
              aria-pressed={isDarkMode}
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-100 text-gray-700 transition-all duration-300 hover:bg-gray-200 dark:border-slate-700 dark:bg-slate-800 dark:text-yellow-400 dark:hover:bg-slate-700"
            >
              {/* Moon */}
              <span
                className={`absolute transition-all duration-300 ${
                  isDarkMode
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }`}
              >
                <Moon size={20} />
              </span>

              {/* Sun */}
              <span
                className={`absolute transition-all duration-300 ${
                  isDarkMode
                    ? "rotate-90 scale-0 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              >
                <Sun size={20} />
              </span>
            </button>

            {/* ================= MOBILE MENU BUTTON ================= */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-all duration-200 hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* =====================================================
            MOBILE MENU
        ====================================================== */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-[1000px] pb-5" : "max-h-0"
          }`}
        >
          <div className="space-y-1 rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-slate-700 dark:bg-slate-950">
            {/* ================= HOME ================= */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              Home
            </Link>

            {/* ================= ABOUT ================= */}
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              About
            </Link>

            {/* =================================================
                MOBILE DEPARTMENTS
            ================================================== */}
            <button
              type="button"
              onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              <span>Departments</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  isDepartmentOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Department Items */}
            {isDepartmentOpen && (
              <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-3 dark:border-blue-800">
                {departments.map((department) => (
                  <Link
                    key={department}
                    to={`/departments/${department.toLowerCase()}`}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400"
                  >
                    {department}
                  </Link>
                ))}
              </div>
            )}

            {/* ================= TEACHERS ================= */}
            <Link
              to="/teachers"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              Teachers
            </Link>

            {/* ================= NOTICE ================= */}
            <Link
              to="/notice"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              Notice
            </Link>

            {/* ================= EVENTS ================= */}
            <Link
              to="/events"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              Events
            </Link>

            {/* ================= CONTACT ================= */}
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              Contact
            </Link>

            {/* ================= DASHBOARD ================= */}
            <Link
              to="/dashboard"
              onClick={closeMobileMenu}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
            >
              Dashboard
            </Link>

            {/* ================= MOBILE LOGIN ================= */}
            <Link
              to="/auth/login"
              onClick={closeMobileMenu}
              className="mt-3 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
