import { GraduationCap, Menu, X, Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type NavbarProps = {
  isDarkMode: boolean;
  onThemeChange: (isDarkMode: boolean) => void;
};

const Navbar = ({ isDarkMode, onThemeChange }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const departments = ["Accounting", "Management", "Economics", "English"];
  const searchItems = [
    { label: "Home", path: "/" },
    { label: "About ABC College", path: "/about" },
    { label: "Student dashboard", path: "/dashboard" },
    { label: "Teachers", path: "/teachers" },
    { label: "Events", path: "/events" },
    { label: "Admission", path: "/admission" },
    { label: "Contact", path: "/contact" },
  ];
  const searchResults = searchItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navbar Main */}
        <div className="flex h-20 items-center justify-between">
          {/* ================= LOGO ================= */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
              <GraduationCap size={27} />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight text-gray-900 dark:text-white sm:text-xl">
                ABC College
              </h1>
              <p className="text-[10px] font-medium text-gray-500 dark:text-slate-400 sm:text-xs">
                Excellence in Education
              </p>
            </div>
          </a>
          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden items-center gap-1 lg:flex">
            {/* Home */}
            <a
              href="/"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Home
            </a>
            {/* About */}
            <a
              href="/about"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              About
            </a>
            {/* ================= DEPARTMENT DROPDOWN ================= */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1 rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Departments
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>
              {/* Dropdown */}
              <div className="invisible absolute left-0 top-full mt-2 w-52 translate-y-2 rounded-xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900">
                {departments.map((department) => (
                  <a
                    key={department}
                    href={`/departments/${department.toLowerCase()}`}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {department}
                  </a>
                ))}
              </div>
            </div>
            {/* Teachers */}
            <a
              href="/teachers"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Teachers
            </a>
            {/* Notice */}
            <a
              href="/notice"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Notice
            </a>
            {/* Events */}
            <a
              href="/events"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Events
            </a>
            {/* Contact */}
            <a
              href="/contact"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Contact
            </a>
            <a
              href="/dashboard"
              className="rounded-lg px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Dashboard
            </a>
          </div>
          {/* ================= RIGHT SIDE ================= */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              aria-expanded={isSearchOpen}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Search size={20} />
            </button>
            {/* ================= TOGGLE UI ONLY ================= */}
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={(event) => onThemeChange(event.target.checked)}
                className="peer sr-only"
                aria-label="Toggle dark mode"
              />
              <div className="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-600 dark:bg-slate-700">
                <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-5" />
              </div>
            </label>
            {/* Admission */}
            <a
              href="/admission"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700"
            >
              Admission
            </a>
          </div>
          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 dark:text-slate-200 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
        {isSearchOpen && (
          <div className="border-t border-slate-200 pb-4 pt-4 dark:border-slate-800">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search pages, departments, and student services"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
            </div>
            <div className="mt-2 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
              {searchResults.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </Link>
              ))}
              {searchResults.length === 0 && (
                <p className="px-3 py-2 text-sm text-slate-500">
                  No matching pages found.
                </p>
              )}
            </div>
          </div>
        )}
        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${isMenuOpen ? "max-h-[800px] pb-5" : "max-h-0"}`}
        >
          <div className="space-y-1 rounded-xl border border-gray-100 bg-gray-50 p-3 dark:border-slate-700 dark:bg-slate-950">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Home
            </Link>
            {/* About */}
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              About
            </Link>
            {/* ================= MOBILE DEPARTMENTS ================= */}
            <button
              type="button"
              onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
              className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Departments
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${isDepartmentOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isDepartmentOpen && (
              <div className="ml-4 space-y-1 border-l-2 border-blue-200 pl-3">
                {departments.map((department) => (
                  <a
                    key={department}
                    href={`/departments/${department.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    {department}
                  </a>
                ))}
              </div>
            )}
            {/* Teachers */}
            <Link
              to="/teachers"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Teachers
            </Link>
            {/* Notice */}
            <Link
              to="/notice"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Notice
            </Link>
            {/* Events */}
            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Events
            </Link>
            {/* Contact */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Contact
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="block rounded-lg px-4 py-3 font-semibold text-gray-700 transition hover:bg-blue-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Dashboard
            </Link>
            {/* ================= MOBILE ACTIONS ================= */}
            <div className="mt-3 flex gap-2 border-t border-gray-200 pt-3 dark:border-slate-700">
              {/* Search */}
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                <Search size={18} /> Search
              </button>
              {/* Toggle UI */}
              <div className="flex flex-1 items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white py-3 dark:border-slate-700 dark:bg-slate-900">
                <span className="text-sm font-semibold text-gray-700 dark:text-slate-200">
                  Theme
                </span>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={(event) => onThemeChange(event.target.checked)}
                    className="peer sr-only"
                    aria-label="Toggle dark mode"
                  />
                  <div className="h-6 w-11 rounded-full bg-gray-300 transition-colors peer-checked:bg-blue-600 dark:bg-slate-700">
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200 peer-checked:translate-x-5" />
                  </div>
                </label>
              </div>
            </div>
            {/* Admission */}
            <Link
              to="/admission"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 block rounded-lg bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
