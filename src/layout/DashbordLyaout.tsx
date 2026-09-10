import {
  Bell,
  BookOpen,
  CalendarDays,
  ChevronDown,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  User,
  Users,
  X,
  Building2,
  FileText,
  UserRound,
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const location = useLocation();

  // =====================================================
  // CLOSE SIDEBAR
  // =====================================================

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // =====================================================
  // MENU ITEMS
  // =====================================================

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      title: "Students",
      icon: Users,
      path: "/dashboard/students",
    },
    {
      title: "Teachers",
      icon: UserRound,
      path: "/dashboard/teachers",
    },
    {
      title: "Departments",
      icon: Building2,
      path: "/dashboard/departments",
    },
    {
      title: "Courses",
      icon: BookOpen,
      path: "/dashboard/courses",
    },
    {
      title: "Notice",
      icon: FileText,
      path: "/dashboard/notice",
    },
    {
      title: "Events",
      icon: CalendarDays,
      path: "/dashboard/events",
    },
  ];

  const bottomMenuItems = [
    {
      title: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  // =====================================================
  // ACTIVE MENU
  // =====================================================

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-slate-900 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* =====================================================
            SIDEBAR HEADER
        ====================================================== */}

        <div className="flex h-20 shrink-0 items-center justify-between border-b border-slate-800 px-5">
          <Link
            to="/"
            onClick={closeSidebar}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
              <GraduationCap size={24} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-white">ABC College</h1>

              <p className="text-xs text-slate-400">Management System</p>
            </div>
          </Link>

          {/* Mobile Close Button */}

          <button
            type="button"
            onClick={closeSidebar}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-slate-800 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={21} />
          </button>
        </div>

        {/* =====================================================
            SIDEBAR CONTENT
        ====================================================== */}

        <div className="flex flex-1 flex-col overflow-y-auto px-4 py-5">
          {/* Main Menu */}

          <div>
            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Main Menu
            </p>

            <nav className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeSidebar}
                    className={`group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                    }`}
                  >
                    <Icon
                      size={19}
                      className={`shrink-0 transition-transform duration-200 ${
                        !active ? "group-hover:scale-110" : ""
                      }`}
                    />

                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Others */}

          <div className="mt-8">
            <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Others
            </p>

            <nav className="space-y-1">
              {bottomMenuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeSidebar}
                    className={`flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-300 hover:bg-slate-800 hover:text-blue-400"
                    }`}
                  >
                    <Icon size={19} />

                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Info */}

          <div className="mt-auto pt-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <GraduationCap size={20} />
              </div>

              <h3 className="text-sm font-bold text-white">College Portal</h3>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Manage your college activities from one place.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            LOGOUT
        ====================================================== */}

        <div className="border-t border-slate-800 p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-semibold text-red-400 transition-all duration-200 hover:bg-red-950/30 hover:text-red-300"
          >
            <LogOut size={19} />

            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* =====================================================
          MAIN AREA
      ====================================================== */}

      <div className="min-h-screen lg:pl-72">
        {/* =====================================================
            TOPBAR
        ====================================================== */}

        <header className="sticky top-0 z-30 h-20 border-b border-slate-800 bg-slate-900/95 backdrop-blur-md">
          <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* LEFT */}

            <div className="flex items-center gap-3">
              {/* Mobile Menu */}

              <button
                type="button"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-200 transition-all duration-200 hover:bg-slate-800 lg:hidden"
                aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
              >
                {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
              </button>

              <div>
                <h2 className="text-lg font-bold text-white sm:text-xl">
                  Dashboard
                </h2>

                <p className="hidden text-xs text-slate-400 sm:block">
                  Welcome back to your dashboard
                </p>
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-2 sm:gap-3">
              {/* =================================================
                  NOTIFICATION
              ================================================== */}

              <button
                type="button"
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 transition-all duration-200 hover:bg-slate-800 hover:text-white"
              >
                <Bell size={19} />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-slate-900" />
              </button>

              {/* Divider */}

              <div className="hidden h-8 w-px bg-slate-700 sm:block" />

              {/* =================================================
                  PROFILE
              ================================================== */}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 rounded-xl p-1.5 transition-all duration-200 hover:bg-slate-800"
                >
                  {/* Avatar */}

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-600/20">
                    RA
                  </div>

                  {/* User Info */}

                  <div className="hidden text-left md:block">
                    <p className="text-sm font-semibold text-white">
                      Riyaz Akondo
                    </p>

                    <p className="text-[11px] text-slate-400">Student</p>
                  </div>

                  {/* Chevron */}

                  <ChevronDown
                    size={16}
                    className={`hidden text-slate-400 transition-transform duration-200 md:block ${
                      isProfileOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* =================================================
                    PROFILE DROPDOWN
                ================================================== */}

                {isProfileOpen && (
                  <div className="absolute right-0 top-14 w-52 rounded-xl border border-slate-700 bg-slate-900 p-2 shadow-2xl shadow-black/30">
                    {/* Profile */}

                    <Link
                      to="/dashboard/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                      <User size={17} />

                      <span>Profile</span>
                    </Link>

                    {/* Settings */}

                    <Link
                      to="/dashboard/settings"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                      <Settings size={17} />

                      <span>Settings</span>
                    </Link>

                    {/* Divider */}

                    <div className="my-1 border-t border-slate-700" />

                    {/* Logout */}

                    <button
                      type="button"
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 transition-colors hover:bg-red-950/30 hover:text-red-300"
                    >
                      <LogOut size={17} />

                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* =====================================================
            PAGE CONTENT
        ====================================================== */}

        <main className="min-h-[calc(100vh-80px)] bg-slate-950 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
