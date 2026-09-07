import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  Users,
} from "lucide-react";
import { Link } from "react-router";

const highlights = [
  {
    icon: BookOpenCheck,
    value: "24+",
    label: "Academic programs",
  },
  {
    icon: Users,
    value: "3,200",
    label: "Students learning",
  },
  {
    icon: GraduationCap,
    value: "96%",
    label: "Graduate success",
  },
];

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.42),transparent_32%),linear-gradient(120deg,#0f172a_0%,#172554_100%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Admissions are open for 2026
            </p>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Learn with purpose. Lead with confidence.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              ABC College helps curious students turn strong foundations into
              meaningful careers through practical learning and a supportive
              campus community.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-400"
              >
                Start your application <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-3 font-bold text-slate-100 transition hover:border-blue-300 hover:text-blue-200"
              >
                Explore the college
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-blue-200">This week at ABC</p>
                  <h2 className="mt-1 text-2xl font-bold">Campus life</h2>
                </div>
                <CalendarDays className="text-blue-300" size={28} />
              </div>
              <div className="space-y-4 pt-5">
                {[
                  ["Mon", "Orientation & welcome", "09:00"],
                  ["Wed", "Accounting society meet", "14:30"],
                  ["Fri", "Career talk: Finance", "11:00"],
                ].map(([day, title, time]) => (
                  <div key={title} className="flex items-center gap-4">
                    <span className="w-10 text-sm font-bold text-blue-200">
                      {day}
                    </span>
                    <div className="min-w-0 flex-1 border-l border-white/15 pl-4">
                      <p className="truncate font-semibold">{title}</p>
                      <p className="mt-1 text-sm text-slate-400">Main campus</p>
                    </div>
                    <span className="text-sm text-slate-300">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          {highlights.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 sm:justify-center"
            >
              <Icon className="text-blue-600 dark:text-blue-400" size={25} />
              <div>
                <p className="text-2xl font-black text-slate-950 dark:text-white">
                  {value}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Your next chapter
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              A college experience built around your future.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Find your people, sharpen your skills, and make ideas useful. Our
            departments connect classroom knowledge to the world beyond campus.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Accounting", "Management", "Economics"].map(
            (department, index) => (
              <Link
                key={department}
                to={`/departments/${department.toLowerCase()}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700"
              >
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  0{index + 1}
                </span>
                <h3 className="mt-12 text-xl font-bold text-slate-950 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {department}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Explore courses, faculty, and opportunities.
                </p>
                <ArrowRight
                  className="mt-6 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                  size={20}
                />
              </Link>
            ),
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
