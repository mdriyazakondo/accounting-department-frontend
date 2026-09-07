import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

type Student = {
  id: string;
  name: string;
  department: string;
  semester: string;
  attendance: number;
  status: "Active" | "On leave";
};

const students: Student[] = [
  {
    id: "ACC-2401",
    name: "Nusrat Jahan",
    department: "Accounting",
    semester: "6th",
    attendance: 94,
    status: "Active",
  },
  {
    id: "MGT-2308",
    name: "Rafi Ahmed",
    department: "Management",
    semester: "8th",
    attendance: 88,
    status: "Active",
  },
  {
    id: "ECO-2414",
    name: "Sadia Rahman",
    department: "Economics",
    semester: "4th",
    attendance: 91,
    status: "Active",
  },
  {
    id: "ENG-2206",
    name: "Arif Hossain",
    department: "English",
    semester: "8th",
    attendance: 76,
    status: "On leave",
  },
  {
    id: "ACC-2503",
    name: "Maliha Chowdhury",
    department: "Accounting",
    semester: "2nd",
    attendance: 97,
    status: "Active",
  },
  {
    id: "MGT-2411",
    name: "Tanvir Hasan",
    department: "Management",
    semester: "4th",
    attendance: 84,
    status: "Active",
  },
];

const notices = [
  {
    title: "Midterm registration closes",
    date: "Sep 12",
    tone: "bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300",
  },
  {
    title: "Career talk: Finance",
    date: "Sep 18",
    tone: "bg-blue-100 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
  },
  {
    title: "Library hours extended",
    date: "Sep 22",
    tone: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
  },
];

const DashboardPage = () => {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All departments");
  const filteredStudents = students.filter((student) => {
    const matchesQuery = `${student.name} ${student.id}`
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesDepartment =
      department === "All departments" || student.department === department;
    return matchesQuery && matchesDepartment;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Student services
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                College dashboard
              </h1>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                A clear view of students, attendance, and what needs attention.
              </p>
            </div>
            <Link
              to="/admission"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              Add application <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              label: "Total students",
              value: "3,248",
              detail: "+8.2% this year",
              icon: Users,
              color:
                "text-blue-600 bg-blue-100 dark:bg-blue-400/10 dark:text-blue-300",
            },
            {
              label: "Average attendance",
              value: "91.4%",
              detail: "+2.4% this month",
              icon: CheckCircle2,
              color:
                "text-emerald-600 bg-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-300",
            },
            {
              label: "Active courses",
              value: "24",
              detail: "Across 4 departments",
              icon: BookOpen,
              color:
                "text-violet-600 bg-violet-100 dark:bg-violet-400/10 dark:text-violet-300",
            },
            {
              label: "Upcoming events",
              value: "08",
              detail: "Next: Sep 12",
              icon: CalendarDays,
              color:
                "text-orange-600 bg-orange-100 dark:bg-orange-400/10 dark:text-orange-300",
            },
          ].map(({ label, value, detail, icon: Icon, color }) => (
            <div
              key={label}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 text-3xl font-black text-slate-950 dark:text-white">
                    {value}
                  </p>
                </div>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}
                >
                  <Icon size={20} />
                </span>
              </div>
              <p className="mt-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                {detail}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-8 xl:grid-cols-[1fr_320px]">
          <section className="min-w-0 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-slate-200 p-5 dark:border-slate-800">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                    Student directory
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {filteredStudents.length} students shown
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label className="relative">
                    <span className="sr-only">Search students</span>
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                      size={16}
                    />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search students"
                      className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 sm:w-48 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    />
                  </label>
                  <select
                    value={department}
                    onChange={(event) => setDepartment(event.target.value)}
                    className="h-10 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-700 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                  >
                    <option>All departments</option>
                    <option>Accounting</option>
                    <option>Management</option>
                    <option>Economics</option>
                    <option>English</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                  <tr>
                    <th className="px-5 py-3 font-bold">Student</th>
                    <th className="px-5 py-3 font-bold">Department</th>
                    <th className="px-5 py-3 font-bold">Semester</th>
                    <th className="px-5 py-3 font-bold">Attendance</th>
                    <th className="px-5 py-3 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredStudents.map((student) => (
                    <tr
                      key={student.id}
                      className="transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    >
                      <td className="px-5 py-4">
                        <p className="font-bold text-slate-900 dark:text-white">
                          {student.name}
                        </p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                          {student.id}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-300">
                        {student.department}
                      </td>
                      <td className="px-5 py-4 text-slate-600 dark:text-slate-300">
                        {student.semester} semester
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <span className="h-2 w-20 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                            <span
                              className="block h-full rounded-full bg-blue-500"
                              style={{ width: `${student.attendance}%` }}
                            />
                          </span>
                          <span className="font-semibold text-slate-700 dark:text-slate-200">
                            {student.attendance}%
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-bold ${student.status === "Active" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300" : "bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300"}`}
                        >
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredStudents.length === 0 && (
                <p className="p-8 text-center text-sm text-slate-500">
                  No students match your search.
                </p>
              )}
            </div>
          </section>

          <aside className="space-y-8">
            <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                  Quick actions
                </h2>
                <GraduationCap className="text-blue-500" size={20} />
              </div>
              <div className="mt-4 space-y-2">
                {[
                  "View class routine",
                  "Check exam results",
                  "Open digital library",
                ].map((action, index) => (
                  <Link
                    key={action}
                    to={["/routine", "/results", "/library"][index]}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {action}
                    <ArrowUpRight size={16} />
                  </Link>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-slate-950 dark:text-white">
                  Upcoming notices
                </h2>
                <Clock3 className="text-orange-500" size={19} />
              </div>
              <div className="mt-4 space-y-4">
                {notices.map((notice) => (
                  <div key={notice.title} className="flex gap-3">
                    <span
                      className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-black ${notice.tone}`}
                    >
                      {notice.date.split(" ")[1]}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {notice.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        Due {notice.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
