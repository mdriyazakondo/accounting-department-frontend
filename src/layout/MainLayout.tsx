import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem("abc-college-theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    window.localStorage.setItem(
      "abc-college-theme",
      isDarkMode ? "dark" : "light",
    );
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark min-h-screen" : "min-h-screen"}>
      <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <header className="fixed top-0 left-0 w-full z-50">
          <Navbar isDarkMode={isDarkMode} onThemeChange={setIsDarkMode} />
        </header>
        <main className="mt-16 min-h-screen grow">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
