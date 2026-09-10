import { Outlet } from "react-router";
import AuthNavbar from "../Shared/AuthNavbar";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <AuthNavbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
