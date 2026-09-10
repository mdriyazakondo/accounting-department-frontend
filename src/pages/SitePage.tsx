import { ArrowLeft, ArrowRight, Building2 } from "lucide-react";
import { Link, useLocation } from "react-router";

const pageDetails: Record<
  string,
  { eyebrow: string; title: string; description: string }
> = {
  "/about": {
    eyebrow: "About ABC College",
    title: "A focused community for ambitious learners.",
    description:
      "Meet the people, values, and learning environment behind ABC College.",
  },
  "/teachers": {
    eyebrow: "Faculty directory",
    title: "Learn from people who know the work.",
    description:
      "Our faculty pair academic depth with practical experience and a generous approach to teaching.",
  },
  "/notice": {
    eyebrow: "Notice board",
    title: "Stay close to campus updates.",
    description:
      "Important academic notices, deadlines, and student announcements will appear here.",
  },
  "/events": {
    eyebrow: "Campus events",
    title: "There is always something worth showing up for.",
    description:
      "Browse talks, society meetups, workshops, and community events at ABC College.",
  },
  "/contact": {
    eyebrow: "Contact us",
    title: "Let us help you find your way in.",
    description:
      "Reach the admissions office or visit our campus on College Road, Dhaka.",
  },
  "/admission": {
    eyebrow: "Admissions",
    title: "Your next chapter starts here.",
    description:
      "Applications for the 2026 academic year are open. Prepare your documents and take the first step.",
  },
};

const SitePage = () => {
  const { pathname } = useLocation();
  const departmentName = pathname.startsWith("/departments/")
    ? pathname.split("/").pop()?.replace(/-/g, " ")
    : undefined;
  const details = departmentName
    ? {
        eyebrow: "Academic department",
        title: `${departmentName.replace(/^./, (letter) => letter.toUpperCase())} at ABC College.`,
        description:
          "Explore courses, faculty, and practical opportunities in this department.",
      }
    : (pageDetails[pathname] ?? {
        eyebrow: "ABC College",
        title: "This page is ready for its next update.",
        description:
          "Return home to explore the college, departments, and student life.",
      });

  return (
    <main className="mx-auto flex min-h-[65vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 ">
      <div className="max-w-2xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Building2 size={28} />
        </div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {details.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          {details.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
          {details.description}
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
          >
            <ArrowLeft size={18} /> Back home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 font-bold text-slate-700 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200"
          >
            Contact the college <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SitePage;
